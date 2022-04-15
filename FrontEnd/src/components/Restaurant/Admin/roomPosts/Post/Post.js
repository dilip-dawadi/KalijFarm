import React, { useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography, ButtonBase, CardMedia } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './styles'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deleteaRoom } from '../../../../../redux/actions/roomaction';
import { useNavigate } from 'react-router-dom';

const Post = ({ Room, setcurrentRoomId }) => {

  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'))

  const openPost = () => {
    navigate(`/room/${Room._id}`)
  }
  return (
    <Card className={classes.card}>
      <ButtonBase component="span"
        name="test"
        className={classes.cardAction} onClick={openPost}>
        <CardMedia className={classes.media} style={{ backgroundImage: `url(${Room.selectedFile})` || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' }} title={Room.title} />

        <div className={classes.overlay}>
          <Typography variant="h6">{Room.name}</Typography>
          <Typography variant="body2">{moment(Room.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" disabled={!user?.result} onClick={(e) => {
            e.stopPropagation();
            setcurrentRoomId(Room._id)
          }}><MoreHorizIcon fontSize="medium" /></Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{Room?.tags?.map((tag) => `#${tag} `)}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{Room?.booked}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{Room?.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{Room?.message.split(' ').splice(0, 6).join(' ')}</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result}>
          Price {Room.price}
        </Button>
        <Button size="small" color="primary" disabled={!user?.result.bill} onClick={() => { dispatch(deleteaRoom(Room._id)) }}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card >

  )
}

export default Post
