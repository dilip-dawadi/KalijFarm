import React, { useEffect, useLayoutEffect } from 'react';
import {Grid, CardMedia, Typography, CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { getKalijs } from '../../actions/kalijs';
import useStyles from '../kalijFile/Component/kalijcss'
const Image = () => {
  const {Kalijs, isLoading} = useSelector((state) => state.Kalijs); 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getKalijs());
      }, [dispatch]);
      const classes = useStyles();
      useLayoutEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'instant',
        });
    }, []);
  return (
    isLoading ? <CircularProgress  className={classes.gallery}/> : (
            <div className={classes.gallery}>
            <Typography variant="h4" align="center" className={classes.galleryH}>Food <span className={classes.spanFood}>Gallery</span></Typography>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                 {Kalijs.map((kalij) => (
          
          <Grid key={kalij._id} item xs={12} sm={6} md={3} lg={4}>
          <center><CardMedia className={classes.madia}  image={kalij.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={kalij.title} /></center>
         </Grid>
      ))}
      </Grid>
      </div>
  ));
}
export default Image;