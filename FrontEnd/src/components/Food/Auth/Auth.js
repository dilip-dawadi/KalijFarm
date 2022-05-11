import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Zoom } from "react-reveal";
import { signin, signup } from '../../../redux/actions/Auth';
import useStyles from './Styles';
import Input from './Input';
import GoogleAuth from './GoogleAuth';
import ReCAPTCHA from "react-google-recaptcha";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  //   form usestate i can save the form data in paylaod and later on in mongoodb
  const [isSignup, setIsSignup] = useState(false);
  // using isSignup usesatate hook i can save the data in payload
  const [Error, setError] = useState(null);
  const [ErrorSignIn, setErrorSignIn] = useState(null);
  const [success, setsuccess] = useState(null);
  const [wait, setwait] = useState(false);
  const [recaptchaToken, setrecaptchaToken] = useState(null);
  const [messageIsNotRobot, setmessageIsNotRobot] = useState(false);
  const recaptchaRef = React.useRef();
  const { errorAuthSignUp, errorAuthSignIn, authData } = useSelector((state) => state.Auth);
  useEffect(() => {
    setError(errorAuthSignUp);
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [errorAuthSignUp]);
  useEffect(() => {
    setErrorSignIn(errorAuthSignIn);
    setTimeout(() => {
      setErrorSignIn(null);
    }, 3000);
  }, [errorAuthSignIn]);

  useEffect(() => {
    setsuccess(authData?.message);
    setTimeout(() => {
      setsuccess(null);
    }, 8000);
  }, [authData]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const handleShowPassword = () => { setShowPassword(!showPassword) };
  const handleShowCPassword = () => { setShowCPassword(!showCPassword) };

  const switchMode = () => {
    setError(null);
    setErrorSignIn(null);
    setsuccess(null);
    if (recaptchaToken === null) {
      setIsSignup(true);
    } else { setIsSignup((prevIsSignup) => !prevIsSignup); }
    setShowPassword(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (recaptchaToken === null) {
        setError("Please verify that you are not a robot..");
        setTimeout(() => {
          setError(null);
        }, 4000);
        return;
      }
    }
    setwait(true);
    setTimeout(() => {
      setwait(false);
    }, 5000);
    if (isSignup) {
      dispatch(signup(formData));
    } else {
      // dispatching meaning giving different thinks
      dispatch(signin(formData, navigate));
    }
  };
  // <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Zoom>
      <Container component="main" maxWidth="xs" className={isSignup ? classes.container : classes.container1} >
        <Paper className={isSignup ? classes.paper : classes.paper1} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ letterSpacing: '2px', fontWeight: "500", textTransform: 'uppercase' }}>{isSignup ? 'Sign up' : 'Sign in'}</Typography>
          {isSignup ? null : <GoogleAuth />}
          <form className={classes.formData} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              {isSignup && <Input name="confirmPassword" label="Repeat Password" type={showCPassword ? 'text' : 'password'} handleShowCPassword={handleShowCPassword} handleChange={handleChange} />}
            </Grid>
            {(ErrorSignIn || Error || success) && <Typography className={(success ? classes.success : classes.Error)}>{(ErrorSignIn?.slice(0, -2) || Error?.slice(0, -2) || success?.slice(0, -2))}</Typography>}
            <Button type="submit" fullWidth variant="contained" disabled={wait} className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
            <Grid container justify="flex-end">
              {isSignup ? <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE}
                onChange={(value) => {
                  setrecaptchaToken(value);
                }}
                onExpired={() => {
                  setrecaptchaToken(null);
                }}
              /> : null}
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? !recaptchaToken ? `Sign In! Are you a Robot 🤔` : `Already have an account? Sign in` : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Zoom>
  );
};

export default SignUp;