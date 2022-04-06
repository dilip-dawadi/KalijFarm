import React, { useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getKalijs } from '../../../redux/actions/kalijs';
import LoadingPlaceHolder, { containerStyles } from '../../loading/loading';
import { Zoom } from 'react-reveal';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function Slider() {
  const dispatch = useDispatch();
  const { isLoading, Kalijs } = useSelector((state) => state.Kalijs);
  useEffect(() => {
    dispatch(getKalijs());
  }, [dispatch]);
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Kalijs?.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{
      flexGrow: 1,
      paddingTop: '66px'
    }} id="header">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} >
          {isLoading ? <LoadingPlaceHolder extraStyles={{
            height: 0,
            paddingTop: '66%', objectFit: 'cover',
            width: '90%', margin: 'auto', borderRadius: '10px'
          }} /> :
            <Zoom duration={2000}>
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                interval={3500}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {Kalijs?.map((step, index) => (
                  <div key={step.title}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <CardMedia image={step.selectedFile}
                        style={{
                          height: 0,
                          paddingTop: '66%',
                          width: '95%',
                          objectFit: 'cover',
                        }}
                        title={step.title} />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
            </Zoom>
          }
          <MobileStepper
            steps={maxSteps}
            position="static"
            sx={{
              [theme.breakpoints.down('xl')]: {
                display: 'none',
              },
            }}
            activeStep={activeStep}
            nextButton={
              <Button
                style={{
                  backgroundColor: 'coral',
                  margin: '0.1rem',
                  padding: '0.1rem 0.4rem',
                  color: 'white',
                }}
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}

              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" style={{
                margin: '0.1rem',
                backgroundColor: 'coral',
                padding: '0.1rem 0.4rem',
                color: 'white',
              }} onClick={handleBack}
                disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{
          margin: 'auto',
        }} >
          <Paper
            square
            elevation={6}
            sx={{
              overflow: "hidden",
              borderRadius: '12px',
              height: 'auto',
              padding: '2rem',
              textAlign: 'center',
              margin: '120px 20px',
              [theme.breakpoints.down('lg')]: {
                margin: '70px 5px',
                width: '85%',
              },
              [theme.breakpoints.down('md')]: {
                margin: '0px 5px',
              },
              [theme.breakpoints.down('sm')]: {
                padding: '2rem',
                overflow: 'hidden',
                height: 'auto',
                margin: '10px 5px',
              },
            }}
          >
            {isLoading ? <LoadingPlaceHolder extraStyles={{
              height: '14px', width: 'auto',
              textAlign: 'center', borderRadius: '12px', margin: '8px 25px',
            }} /> :
              <Typography variant="body1" component="p" style={{
                fontSize: '1.2rem',
                padding: '0.2rem 1rem',
                fontWeight: 'bold',
                color: 'coral',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginBottom: '0.5rem',
                [theme.breakpoints.down('md')]: {
                  marginTop: '0.5rem',
                  fontSize: '1rem',
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1.1rem',
                },
              }}
              >{Kalijs[activeStep]?.title.split(' ').splice(0, 2).join(' ')}</Typography>}
            {
              isLoading ?
                Array.from(Array(Math.ceil(4)).keys()).map(() => (
                  <LoadingPlaceHolder extraStyles={{
                    height: '12px', width: 'auto',
                    textAlign: 'center', borderRadius: '12px', margin: '10px 50px'
                  }} />)) :
                <Typography
                  variant="body1"
                  component="p"
                  style={{
                    fontSize: '0.9rem',
                    color: '#454545',
                    textTransform: 'capitalize',
                    textAlign: 'justify',
                    marginBottom: '1rem',
                    [theme.breakpoints.down('md')]: {
                      fontSize: '0.8rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '0.9rem',
                    },
                  }}

                >{Kalijs[activeStep]?.message.split(' ').splice(0, 25).join(' ')}</Typography>}
            <Button variant="contained" style={{
              fontSize: '0.7rem',
              fontWeight: 'bold',
              color: '#fff',
              textTransform: 'uppercase',
              backgroundColor: '#ED9F64',
              padding: '10px 20px',
              [theme.breakpoints.down('md')]: {
                fontSize: '0.6rem',
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '0.7rem',
              },
            }}
              disabled={!user?.result?.name}
              onClick={() => { (user?.result?.name) && navigate(`/kalijs/${Kalijs[activeStep]?._id}`) }}
            >
              Learn More
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Slider;
