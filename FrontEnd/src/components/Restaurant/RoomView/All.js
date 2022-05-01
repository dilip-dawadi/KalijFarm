import React from "react";
import {
  Grid,
  Typography,
  CardActions,
  CardMedia,
  Button,
  ButtonBase,
  Card,
  CardContent,
} from "@material-ui/core";
import ChipInput from 'material-ui-chip-input';
import { useSelector } from "react-redux";
import Model from "../../Food/modal/messageM";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStyles from "../../Food/kalijFile/Component/kalijcss";
import useStyle from "../../Food/kalijFile/Component/onlyKalij";
import { roomLike } from "../../../redux/actions/roomaction";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { margin } from "@mui/system";
const All = ({ Room }) => {
  const [openM, setOpenM] = React.useState(false);
  const handleOpenM = () => {
    setOpenM(true);
  };
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const { Rooms, likeRoomMessage } = useSelector((state) => state.Room);
  const classes = useStyles();
  console.log(Room, 'Rooms');
  const dispatch = useDispatch();
  const classed = useStyle();
  const [likes, setLikes] = React.useState(Room?.likes);
  const [likeMessage, setLikeMessage] = React.useState('');
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedRoom = Room?.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(roomLike(Room._id));

    if (hasLikedRoom) {
      setLikes(Room.likes.filter((id) => id !== userId));
    } else {
      setLikes([...Room.likes, userId]);
    }
  };
  React.useEffect(() => {
    setLikeMessage(likeRoomMessage);
    setTimeout(() => {
      setLikeMessage(null);
    }, 3000);
  }, [likeRoomMessage]);
  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <span className={classed.like}>
            <><ThumbUpAltIcon fontSize="small" style={{
              color: '#008f95'
            }} onClick={handleLike} />&nbsp;{likes.length > 2 ? `You & ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
          </span>
        ) : (
          <span className={classed.like}>
            <><ThumbUpAltOutlined fontSize="small" style={{
              color: '#4abdac'
            }} onClick={handleLike} />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
          </span>
        );
    }

    return <span className={classed.like}><><ThumbUpAltOutlined fontSize="small" onClick={handleLike} />&nbsp;Like</></span>;
  };
  return (
    <>
      {Rooms?.length ?
        // <Zoom out duration={1500}>
        <Card className={classed.cards} raised elevation={4}>
          <ButtonBase
            component="span"
            name="test"
            className={classes.cardAction}
            onClick={() => {
              user?.result?.name ? navigate(`/room/${Room._id}`) : handleOpenM();
            }}
          >
            <CardMedia className={classes.media} style={{ backgroundImage: `url(${Room.selectedFile})` || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' }} title={Room.title} />
          </ButtonBase>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {Room.title.split(" ").splice(0, 2).join(" ")}
          </Typography>
          <CardContent className={classes.cartTitle} >
            <Typography variant="body2" color="textSecondary" component="p">{Room.message.split(' ').splice(0, 4).join(' ')}...</Typography>
          </CardContent>
          <div className={classes.details}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="h2"
            >
              {Room.tags.map((tag) =>
              (
                <Button style={{
                  backgroundColor: '#4abdac',
                  borderRadius: '6px',
                  color: 'white',
                  padding: '1px 7px',
                  margin: '2px 3px',
                  fontSize: '13px',
                }} >
                  {tag}
                </Button>)
              ).splice(-3)}
            </Typography>
          </div>
          <CardActions className={classed.cardActionsI}>
            {!user?.result?.name ? (
              <>
                <Button
                  size="small"
                  className={classed.btn}
                  onClick={handleOpenM}
                  type="button"
                >
                  Learn More
                </Button>
                <Model openM={openM} setOpenM={setOpenM} />
              </>
            ) : (
              <Likes />
            )}
          </CardActions>
        </Card>
        :
        <Grid item lg={12} >
          <Card className={classed.cardsearch} raised elevation={4}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: "center", letterSpacing: '2px', color: 'gray', margin: '10px auto' }}
              >
                No Post Found 🧐
              </Typography>
            </CardContent>
          </Card>
        </Grid>}
    </>
  );
};
export default All;
