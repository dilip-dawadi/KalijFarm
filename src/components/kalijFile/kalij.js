import React, { useEffect}from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, CircularProgress } from '@material-ui/core/';
import useWindowPosition from '../../hook/useWindowPosition';
import useStyles from './Component/kalijcss'
import useStyle from './Component/onlyKalij'
import { useNavigate, Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { getKalijs } from '../../actions/kalijs';
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
    const classed = useStyle();
    return (
      isLoading ? <CircularProgress /> : ( 
      <>
          <h2 className={classes.Food}>About <span className={classes.spanFood}>Food</span></h2>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {Kalijs.slice(0, 8).map((kalij) => (

      <Grid key={kalij._id} checked={checked} item xs={12} sm={6} md={3} lg={3}>
        <Card className={classed.cards} raised elevation={6}>
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
        <Button size="small" className={classed.btn} onClick={() => {if(user?.result?.name) {handleAddProduct(kalij)}else {alert('Login To Add Cart'); navigate('/auth')}}}>
        Add Cart
        </Button>
        <Button size="small" className={classed.btn}>
          Rs. {kalij.price}
        </Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
    <br />
    <br />
        <center><Button variant="contained" color="secondary"><Link
        to='/gallery'
        className={classes.link}
        onClick={() => {
          alert("Moving to Food Gallery")}}
      >
       View More
      </Link></Button></center>
      </>
    ))
}

export default Kalij;
