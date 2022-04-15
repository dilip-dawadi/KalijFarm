import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles';
const Posts = ({ setcurrentRoomId }) => {
    const { Rooms, isLoading } = useSelector((state) => state.Room);
    const classes = useStyles();

    if (!Rooms.length && !isLoading) return 'No Post Found';
    return (
        isLoading ? <center><CircularProgress /></center> : (
            <Grid className={classes.container} id="place-to-visit" container alignItems="stretch" spacing={3}>
                {Rooms?.map((Room) => (
                    <Grid key={Room._id} item xs={12} sm={6} md={6}>
                        <Post Room={Room} setcurrentRoomId={setcurrentRoomId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
