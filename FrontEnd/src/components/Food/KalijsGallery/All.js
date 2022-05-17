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
import { useSelector, useDispatch } from "react-redux";
import Model from "../modal/messageM";
import { useNavigate } from "react-router-dom";
import useStyles from "./styleFood";
import useStyle from "../kalijFile/Component/onlyKalij";
import { foodLike } from "../../../redux/actions/kalijs";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
const All = ({ kalij }) => {
  const [openM, setOpenM] = React.useState(false);
  const handleOpenM = () => {
    setOpenM(true);
  };
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const { Kal } = useSelector((state) => state.Kalijs);
  const classes = useStyles();
  const classed = useStyle();
  const dispatch = useDispatch();
  const [likes, setLikes] = React.useState(kalij?.likes);
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedFood = kalij?.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(foodLike(kalij._id));

    if (hasLikedFood) {
      setLikes(kalij.likes.filter((id) => id !== userId));
    } else {
      setLikes([...kalij.likes, userId]);
    }
  };
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
      {Kal?.length ?
        <Card className={classed.cards} raised elevation={4}>
          <ButtonBase
            component="span"
            name="test"
            className={classes.cardAction}
            onClick={() => {
              user?.result?.name ? navigate(`/food/${kalij._id}`) : handleOpenM();
            }}
          >
            <CardMedia className={classes.media} style={{ backgroundImage: `url(${kalij.selectedFile})` || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' }} title={kalij.title.split(" ").splice(0, 1)} />

            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {kalij.title.split(" ").splice(0, 2).join(" ")}
            </Typography>
            <CardContent className={classes.cartTitle} >
              <Typography variant="body2" color="textSecondary" component="p">{kalij.message.split(' ').splice(0, 4).join(' ')}...</Typography>
            </CardContent>
          </ButtonBase>
          <div className={classes.details}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="h2"
            >
              {kalij.tags.map((tag) =>
              (
                <Button style={{
                  backgroundImage: 'linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e)',
                  borderRadius: '6px',
                  color: 'white',
                  letterSpacing: '1px',
                  padding: '1px 7px',
                  margin: '2px 3px',
                  fontSize: '13px',
                }} >
                  {tag}
                </Button>)
              ).splice(-2)}
            </Typography>
          </div>
          <CardActions className={user?.result?.name ? (classed.cardActionsIuser) : (classed.cardActionsI)}>
            {!user?.result?.name ? (
              <>
                <Button
                  size="small"
                  className={classed.btn}
                  onClick={handleOpenM}
                >
                  Learn More
                </Button>
                <Model openM={openM} setOpenM={setOpenM} />
              </>
            ) : (<>
              <Likes />
            </>
            )}
          </CardActions>
        </Card> :
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
              <Button
                size="large"
                style={{ width: '100%', margin: '10px 0px', padding: "10px", backgroundColor: '#f50057', color: 'white', borderRadius: '5px', letterSpacing: '4px' }}
                onClick={() => {
                  navigate("/food");
                }}
              >Search All</Button>
            </CardContent>
          </Card>

        </Grid>}
    </>
  );
};
export default All;
