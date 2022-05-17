// react usestate
import React, { useState } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from 'react-reveal';
import useStyles from '../kalijFile/Component/kalijcs'
import useStyle from '../kalijFile/Component/onlyKalij'
import LoadingPlaceHolder from './loading'
import { useSelector } from 'react-redux'
const Loading = () => {
  const classes = useStyles();
  const classed = useStyle();
  const { isLoading } = useSelector((state) => state.Kalijs);
  return (
    <div>
      <h2 className={classes.Food} style={{ marginTop: "40px" }} >About <span className={classes.spanFood}>Food</span></h2>
      <br />
      <Grid className={classes.container} container alignItems="stretch" spacing={2}>
        {Array.from(Array(Math.ceil(4)).keys()).map((kalij) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Zoom in duration={3000}>
              <Card className={classed.cards} raised elevation={4}>
                {isLoading ? <LoadingPlaceHolder extraStyles={{
                  height: 0,
                  paddingTop: '80%', objectFit: 'cover',
                  margin: 'auto', borderRadius: '10px 5px 10px 5px',
                }} /> :
                  <div>
                    <CardMedia className={classes.media} style={{ backgroundImage: `url(${kalij.selectedFile})` }} title={kalij.title} />
                  </div>}
                {isLoading ? <LoadingPlaceHolder extraStyles={{
                  height: '35px', margin: '10px auto 0px auto', padding: '0.1rem 0rem',
                }} /> :
                  <Typography className={classes.title} gutterBottom variant="h5" component="h2"></Typography>}
                {isLoading ? <LoadingPlaceHolder extraStyles={{
                  height: '30px',
                  margin: '10px auto 4px auto', padding: '0.1rem 0rem',
                }} /> :
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p"></Typography>
                  </CardContent>}
                {isLoading ? <span style={{
                  display: 'flex', margin: '10px 20px',
                }} > <LoadingPlaceHolder extraStyles={{
                  height: '20px', width: '90px',
                  borderRadius: '12px', margin: '2px 10px', padding: '0.1rem 0rem',
                }} /> <LoadingPlaceHolder extraStyles={{
                  height: '20px', width: '90px',
                  borderRadius: '12px', margin: '2px 10px', padding: '0.1rem 0rem',
                }} />
                  <LoadingPlaceHolder extraStyles={{
                    height: '20px', width: '90px',
                    borderRadius: '12px', margin: '2px 0px', padding: '0.1rem 0rem',
                  }} /></span> :
                  <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2"></Typography>
                  </div>}

                {isLoading ? <><CardActions className={classes.cardActionsI}><LoadingPlaceHolder extraStyles={{
                  height: '40px',
                  borderRadius: '1px', margin: '0px auto', padding: '0.1rem 0rem',
                }} /></CardActions></> :
                  <CardActions className={classes.cardActionsI}>
                    <Button size="small" className={classed.btn} type="button">Learn More
                    </Button>
                  </CardActions>}
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <center><Button variant="contained" style={{
        backgroundImage: 'linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e)',
        padding: '10px 20px', letterSpacing: '2px', fontWeight: '600', borderRadius: '7px', color: 'white'
      }}>
        View More
      </Button></center>
    </div>
  );
}
export default Loading;