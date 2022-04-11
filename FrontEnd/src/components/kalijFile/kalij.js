import React, { useEffect } from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import { Fade } from 'react-reveal';
import useWindowPosition from '../../hook/useWindowPosition';
import useStyles from './Component/kalijcs'
import useStyle from './Component/onlyKalij'
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getKalijs } from '../../redux/actions/kalijs';
import Notification from '../modal/noticeM'
import Model from '../modal/messageM'
import Notify from '../modal/notify'
import Loading from '../loading/indexkalij'

const Kalij = ({ handleAddProduct }) => {
  const [openM, setOpenM] = React.useState(false);
  const handleOpenM = () => {
    setOpenM(true);
  };
  const dispatch = useDispatch();
  const checked = useWindowPosition('header');
  const { Kalijs, isLoading } = useSelector((state) => state.Kalijs);
  useEffect(() => {
    dispatch(getKalijs());
  }, [dispatch]);
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  const classes = useStyles();
  const classed = useStyle();
  return (
    isLoading ? <Loading /> : (
      <>
        <h2 className={classes.Food}>About <span className={classes.spanFood}>Food</span></h2>
        <br />
        <Grid className={classes.container} container alignItems="stretch" spacing={2}>
          {Kalijs.slice(0, 4).map((kalij) => (
            <Grid key={kalij._id} checked={checked} item xs={12} sm={6} md={4} lg={3}>
              <Fade top duration={2000}>
                <Card className={classed.cards} raised elevation={3}>
                  <ButtonBase component="span"
                    name="test"
                    className={classes.cardAction} onClick={() => { (user?.result?.name) && navigate(`/kalijs/${kalij._id}`) }} >
                    <CardMedia className={classes.media} style={{ backgroundImage: `url(${kalij.selectedFile})` }} title={kalij.title} />
                    <div className={classes.details}>
                      <Typography variant="body2" color="textSecondary" component="h2">{kalij?.tags?.map((tag) => `#${tag} `)}</Typography>
                    </div>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{kalij.title.split(' ').splice(0, 2).join(' ')}</Typography>
                    <CardContent className={classes.cartTitle} >
                      <Typography variant="body2" color="textSecondary" component="p">{kalij.message.split(' ').splice(0, 4).join(' ')}...</Typography>
                    </CardContent>
                  </ButtonBase>
                  <CardActions className={classes.cardActions}>
                    {(user?.result?.name) ? (
                      <Button size="small" onClick={() => { handleAddProduct(kalij) }}>
                        <Notify />
                      </Button>
                    ) : (
                      <Button size="small">
                        <Notification />
                      </Button>
                    )}
                    {(!user?.result?.name) ? (
                      <><Button size="small" className={classed.btn} onClick={handleOpenM} type="button">Learn More
                      </Button><Model openM={openM} setOpenM={setOpenM} /></>

                    ) : (
                      <Button size="small" className={classed.btn} onClick={() => { navigate(`/kalijs/${kalij._id}`) }}>
                        Learn More
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <center><Button variant="contained" style={{ backgroundColor: 'coral', padding: '10px 20px', letterSpacing: '2px', fontWeight: '600', borderRadius: '7px', color: 'white' }}><Link
          to='/foods?page=1'
          className={classes.link}>
          View More
        </Link></Button></center>

      </>
    ))
}

export default Kalij;
