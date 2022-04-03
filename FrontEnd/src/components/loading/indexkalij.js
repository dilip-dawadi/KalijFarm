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
    const {isLoading} = useSelector((state) => state.Kalijs);
    return (
        <div>
        <h2 className={classes.Food} style={{ marginTop:"40px" }} >About <span className={classes.spanFood}>Food</span></h2>
        <br />
        <Grid className={classes.container} container alignItems="stretch" spacing={2}>
          {Array.from(Array(Math.ceil(4)).keys()).map((kalij) => (
            <Grid key={kalij._id} item xs={12} sm={6} md={4} lg={3}>
              <Fade left>
                <Card className={classed.cards} raised elevation={6}>
                {isLoading ? <LoadingPlaceHolder extraStyles={{height: 0,
                 paddingTop: '70%', objectFit: 'cover',
                   margin: 'auto', borderRadius: '10px',}} /> :
                    <div>
                    <CardMedia className={classes.media} style={{ backgroundImage: `url(${kalij.selectedFile})` }} title={kalij.title} />
                    </div>}
                    {isLoading ? <LoadingPlaceHolder extraStyles={{height: '20px', width: '60px',
             borderRadius: '12px', margin: '2px', padding: '0.1rem 0rem',}} /> :
                    <div className={classes.details}>
                      <Typography variant="body2" color="textSecondary" component="h2"></Typography>
                    </div>}
                    {isLoading ? <LoadingPlaceHolder extraStyles={{height: '20px', width: '200px',
             borderRadius: '12px', margin: '3px 30px', padding: '0.1rem 0rem',}} /> :
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2"></Typography>}
                    {isLoading ? <LoadingPlaceHolder extraStyles={{height: '20px', width: '200px',
             borderRadius: '12px', margin: '3px 30px', padding: '0.1rem 0rem',}} /> :
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p"></Typography>
                    </CardContent>}
                  <CardActions className={classes.cardActions}>
                      <Button className={classed.btn} size="small">
                        Add
                      </Button>
                      <Button size="small" className={classed.btn} type="button">Learn More
                      </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <center><Button variant="contained" style={{ backgroundColor: 'coral', color:'white' }}>
          View More
        </Button></center>
        </div>
    );
    }
export default Loading;