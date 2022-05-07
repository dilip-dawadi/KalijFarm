import React, { useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getGalleries } from '../../../../redux/actions/galleryAction';
import LoadingPlaceHolder, { containerStyles } from '../../loading/loading';
import { Zoom } from 'react-reveal';
import useStyles from './style';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function Slider() {
  const dispatch = useDispatch();
  const { isLoading, gallery } = useSelector((state) => state.Gallery);
  useEffect(() => {
    dispatch(getGalleries());
  }, [dispatch]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // find width of device screen
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [mQ, setMQ] = React.useState(
    width > height ? width : height
  );
  // find user device
  const [device, setDevice] = React.useState(
    width > height ? 'desktop' : 'mobile'
  );
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const classes = useStyles();
  return (
    <Grid container className={classes.container} >
      <Grid item xs={12} sm={12} md={12}>
        {isLoading ? <LoadingPlaceHolder extraStyles={{
          height: '89vh', objectFit: 'cover', width: '100%',
        }} /> :
          // <Zoom duration={3000}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            interval={5000}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {gallery?.map((step, index) => (
              <div key={step.title}>
                {Math.abs(activeStep - index) <= 2 ? (
                  (device === 'mobile') ? (<CardMedia
                    style={{
                      backgroundImage: `url('./backimage.png'), url(${step.selectedFile})`,
                    }}
                    className={classes.media}
                    title={step.title} />) : (<CardMedia
                      style={{
                        backgroundImage: `url(${step.selectedFile})`,
                      }}
                      className={classes.media}
                      title={step.title} />)
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          // </Zoom>
        }
      </Grid>
      <Grid item xs={12} sm={12} md={12} className={classes.text} >
        <Paper
          square
          elevation={3}
          sx={{
            overflow: "hidden",
            borderRadius: '8px',
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
          <img src='./gurantee.png' alt='gurantee' className={classes.gurantee} />
          <div className={classes.guranteeMessage}>
            <span className={classes.guranteeTitle}>Our #1</span> Priority here at Rhino Spot and Kalij Farm is your happiness
            and well being. We are committed to providing you with the best
            quality products and services.
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Slider;
