import React, { useEffect, useLayoutEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { getKalij } from '../../../../../actions/kalijs'
import useStyles from './Pdetail'
import moment from 'moment'
const KalijDetail = () => {

  useLayoutEffect(() => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'instant',
    });
}, []);
    const classes = useStyles()
    const {kalij, isLoading} = useSelector((state) => state.Kalijs)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getKalij(id));  
    }, [id])


      if (!kalij) return null;
      if (isLoading) {
        return (
          <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em" />
          </Paper>
        );
      }
    return (
        <Paper style={{ padding: '20px', borderRadius: '15px', marginTop: '120px' }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">{kalij.title}</Typography>
            <Typography gutterBottom variant="body1" component="p">{kalij.message}</Typography>
            <Typography variant="body1">{moment(kalij.createdAt).fromNow()}</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
            <Divider style={{ margin: '20px 0' }} />
            {/* <CommentSection kalij={kalij} /> */}
            <Divider style={{ margin: '20px 0' }} />
          </div>
          <div className={classes.imageSection}>
            <img className={classes.media} src={kalij.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={kalij.title} />
          </div>
        </div>
      </Paper>
    );
  };

export default KalijDetail
