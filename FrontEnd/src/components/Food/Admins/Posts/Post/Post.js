import React, { useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography, ButtonBase, CardMedia } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './styles'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deleteKalij } from '../../../../../redux/actions/kalijs';
import { useNavigate } from 'react-router-dom';

const Post = ({ kalij, setCurrentId }) => {

  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'))
  const [billPay, setbillPay] = useState(false);

  const openPost = () => {
    navigate(`/kalijs/${kalij._id}`)
  }
  return (
    <Card className={classes.card}>
      <ButtonBase component="span"
        name="test"
        className={classes.cardAction} onClick={openPost}>
        <CardMedia className={classes.media} style={{ backgroundImage: `url(${kalij.selectedFile})` || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' }} title={kalij.title} />

        <div className={classes.overlay}>
          <Typography variant="h6">{kalij.name}</Typography>
          <Typography variant="body2">{moment(kalij.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" disabled={!user?.result} onClick={(e) => {
            e.stopPropagation();
            setCurrentId(kalij._id)
          }}><MoreHorizIcon fontSize="medium" /></Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{kalij?.tags?.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{kalij?.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{kalij?.message.split(' ').splice(0, 6).join(' ')}</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result}>
          Price {kalij.price}
        </Button>
        <Button size="small" color="primary" disabled={!user?.result.bill} onClick={() => { dispatch(deleteKalij(kalij._id)) }}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card >

  )
}

export default Post
