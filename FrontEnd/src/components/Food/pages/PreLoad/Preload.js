import React from "react";
import { Zoom, Flip, Roll } from "react-reveal";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Image from '../Images/10.jpg'
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));
export default function CircularUnderLoad() {
  const classes = useStyles();
  return (
    <>
      <Zoom>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
            margin: 'auto',
            flexDirection: "column",
          }}
        >
          <Roll>
            <Avatar
              alt="Kalij"
              src="/10.jpg"
              className={classes.large}
              style={{ borderRadius: "30px" }}
            />
          </Roll>
          <Flip>
            <span
              style={{
                backgroundColor: "coral",
                color: "white",
                padding: "12px 30px",
                margin: "15px 20px",
                borderRadius: "10px",
                letterSpacing: "2px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Rhino Spot Resort & Kalij Farm
            </span>
          </Flip>
        </div>
      </Zoom>
    </>
  );
}
