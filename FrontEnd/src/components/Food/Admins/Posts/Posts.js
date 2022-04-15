import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles';
const Posts = ({ setCurrentId }) => {
    const { Kalijs, isLoading } = useSelector((state) => state.Kalijs);
    const classes = useStyles();

    if (!Kalijs.length && !isLoading) return 'No Post Found';
    return (
        isLoading ? <center><CircularProgress /></center> : (
            <Grid className={classes.container} id="place-to-visit" container alignItems="stretch" spacing={3}>
                {Kalijs?.map((kalij) => (
                    <Grid key={kalij._id} item xs={12} sm={6} md={6}>
                        <Post kalij={kalij} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
