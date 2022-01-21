import React, { useEffect}from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, CircularProgress } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import useWindowPosition from '../../hook/useWindowPosition';
import useStyles from './Component/kalijcss'
import { useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { getKalijs, likeKalij } from '../../actions/kalijs';
const Kalij = ({handleAddProduct}) => {
  const checked = useWindowPosition('header');
  const {Kalijs, isLoading} = useSelector((state) => state.Kalijs); 
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getKalijs())
    }, [dispatch])
    const user = JSON.parse(localStorage.getItem('profile'))
    const navigate = useNavigate()
    const openPost = () => {}
    const classes = useStyles();
    return (
      isLoading ? <CircularProgress /> : ( <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {Kalijs.slice(0, 8).map((kalij) => (

      <Grid key={kalij._id} checked={checked} item xs={12} sm={6} md={3} lg={3}>
        <Card className={classes.card} raised elevation={6}>
      <ButtonBase component="span"
      name="test"
      className={classes.cardAction} onClick={() => {if(user?.result?.name) {navigate(`/kalijs/${kalij._id}`)}else {alert('Login to Open the Post')}}} >
 
        <CardMedia className={classes.media} image={kalij.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={kalij.title} />
       
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{kalij.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{kalij.message.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent>
        </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" className={classes.btn} onClick={() => {handleAddProduct(kalij); 
          alert('Thank for order Go to Card to Procced')}} disabled={!user?.result}>
        Add to Cart 
        </Button>
        <Button size="small" className={classes.btn}>
          Rs. {kalij.price}
        </Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
    ))
}

export default Kalij;
