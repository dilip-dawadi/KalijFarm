import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import Icon from "./Icon";
import useStyles from "./Styles";

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleError = () =>
    console.log("Google Sign In was unsuccessful. Try again later");
  return (
    <>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <Button
            className={classes.googleButton}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            startIcon={<Icon />}
            variant="contained"
          >
            Google Sign In
          </Button>
        )}
        buttonText="Login"
        onSuccess={googleSuccess}
        onFailure={googleError}
        cookiePolicy="single_host_origin"
      />
    </>
  );
};
export default GoogleAuth;
