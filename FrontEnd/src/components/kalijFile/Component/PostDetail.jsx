import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core/";
import { getKalij, getKalBySearch } from "../../../redux/actions/kalijs";
import useStyles from "./Pdetail";
import moment from "moment";
import Notify from "../../modal/notify";
import Mail from "../../modal/buyNow";

const KalijDetail = ({ handleAddProduct }) => {
  const [openM, setOpenM] = React.useState(false);
  const navigate = useNavigate();
  const openPost = (id) => {
    navigate(`/kalijs/${id}`);
  };
  const handleOpenM = () => {
    setOpenM(true);
  };
  useLayoutEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "instant",
    });
  }, []);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { kalij, Kal, isLoading } = useSelector((state) => state.Kalijs);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getKalij(id));
  }, [id]);
  useEffect(() => {
    dispatch(getKalBySearch({ search: "none", tags: kalij?.tags.join(",") }));
  }, [kalij]);
  if (!kalij) {
    return (
      <div style={{ padding: "80px 10px 0px 10px" }}>
        <Paper
          elevation={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            borderRadius: "15px",
            height: "70vh",
          }}
        >
          <CircularProgress
            size="7em"
            className={classes.gallery}
            style={{ display: "block", margin: "0px auto" }}
          />
        </Paper>
      </div>
    );
  } else {
    if (isLoading) {
      return (
        <div style={{ padding: "80px 10px 0px 10px " }}>
          <Paper
            elevation={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              borderRadius: "15px",
              height: "70vh",
            }}
          >
            <CircularProgress size="7em" />
          </Paper>
        </div>
      );
    }
    const recommented = Kal?.filter(({ _id }) => _id !== kalij._id);
    return (
      <div style={{ borderRadius: "15px", padding: "80px 15px 20px 15px" }}>
        <Paper elevation={3} style={{ borderRadius: "12px" }}>
          <div className={classes.card}>
            <div className={classes.section}>
              <div className={classes.section1}>
                <div className={classes.imageSection} style={{ flex: 1 }}>
                  <img
                    className={classes.media}
                    src={kalij?.selectedFile}
                    title={kalij?.title}
                  />
                </div>
                <div style={{ margin: "auto", flex: "1" }}>
                  <Typography className={classes.title}>
                    {kalij?.title}
                  </Typography>
                  <Typography className={classes.time}>
                    {moment(kalij?.createdAt).fromNow()}
                  </Typography>
                  <div className={classes.details}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h2"
                    >
                      {kalij?.tags?.map((tag) => ` #${tag}`)}
                    </Typography>
                  </div>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="p"
                    style={{ textAlign: "justify" }}
                    className={classes.message}
                  >
                    {kalij?.message} and price of the product is Price{" "}
                    <span
                      style={{
                        backgroundColor: "#ED9F64",
                        padding: " 4.5px 15px",
                        borderRadius: "8px",
                        color: "white",
                      }}
                    >
                      Rs.{kalij?.price}
                    </span>
                  </Typography>
                  <Divider style={{ margin: "20px 0" }} />
                  <CardActions className={classes.cardActionsS}>
                    <Button
                      size="small"
                      className={classes.btn}
                      onClick={() => {
                        handleAddProduct(kalij);
                      }}
                    >
                      <Notify />
                    </Button>
                    <Button
                      size="small"
                      className={classes.buy}
                      onClick={handleOpenM}
                    >
                      Buy Now
                    </Button>
                    <Mail openM={openM} setOpenM={setOpenM} />
                  </CardActions>
                  <Divider style={{ margin: "20px 0" }} />
                </div>
              </div>
            </div>
            {!!recommented.length && (
              <div className={classes.section}>
                <Typography gutterBottom variant="h5">
                  You might also like:
                </Typography>
                <Divider />
                <div className={classes.recommendedPosts}>
                  {recommented.map(
                    ({ title, tags, message, selectedFile, _id }) => (
                      <Paper
                        elevation={3}
                        style={{
                          padding: "10px",
                          margin: "10px auto",
                          cursor: "pointer",
                        }}
                        onClick={() => openPost(_id)}
                        key={_id}
                      >
                        <Typography gutterBottom variant="h5">
                          {title}
                        </Typography>

                        <Typography gutterBottom variant="subtitle2">
                          {message.split(" ").splice(0, 5).join(" ")}...
                        </Typography>
                        <Typography gutterBottom variant="subtitle2">
                          #{tags.join(", #")}`
                        </Typography>
                        <img src={selectedFile} width="220px" />
                      </Paper>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </Paper>
      </div>
    );
  }
};

export default KalijDetail;
