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
import { Fade } from "react-reveal";
import { useSelector } from "react-redux";
import Model from "../modal/messageM";
import { useNavigate } from "react-router-dom";
import useStyles from "../kalijFile/Component/kalijcss";
import useStyle from "../kalijFile/Component/onlyKalij";
import Loading from "../loading/AllKalijs";
const All = () => {
  const [openM, setOpenM] = React.useState(false);
  const handleOpenM = () => {
    setOpenM(true);
  };
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const { Kal, isLoading } = useSelector((state) => state.Kalijs);
  const classes = useStyles();
  const classed = useStyle();
  return isLoading ? (
    <Loading
    />
  ) : (
    <>
      {Kal?.length ?
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {Kal?.map((kalij) => (
            <Grid key={kalij?._id} item xs={12} sm={6} md={6} lg={4} >
              <Fade left duration={2000}>
                <Card className={classed.cards} raised elevation={4}>
                  <ButtonBase
                    component="span"
                    name="test"
                    className={classes.cardAction}
                    onClick={() => {
                      user?.result?.name && navigate(`/kalijs/${kalij._id}`);
                    }}
                  >
                    <CardMedia className={classes.media} style={{ backgroundImage: `url(${kalij.selectedFile})` || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' }} title={kalij.title} />
                  </ButtonBase>
                  <div className={classes.details}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h2"
                    >
                      {kalij?.tags?.map((tag) => `#${tag} `)}
                    </Typography>
                  </div>
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
                      <Button
                        size="small"
                        className={classed.btn}
                        onClick={() => {
                          navigate(`/kalijs/${kalij._id}`);
                        }}
                      >
                        Learn More
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid> :
        <Grid item lg={12} >
          <Fade left>
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
                    navigate("/foods?page=1");
                  }}
                >Search All</Button>
              </CardContent>
            </Card>
          </Fade>
        </Grid>}
    </>
  );
};
export default All;
