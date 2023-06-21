import React, { useState, useRef, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";

import { commentFood } from "../../../../redux/actions/kalijs";
import useStyles from "./Pdetail";

const CommentSection = ({ food }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState();
  const classes = useStyles();
  const commentsRef = useRef();
  useEffect(() => {
    setComments(food?.comments);
  }, [food]);

  const handleComment = async () => {
    setComments(null);
    const newComments = await dispatch(
      commentFood(`${user?.result?.name}: ${comment}`, food._id)
    );
    setComment("");
    setComments(newComments);
    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography
            gutterBottom
            variant="h6"
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Your Comments
          </Typography>
          {comments?.map((c, i) => (
            <>
              <Typography key={i} gutterBottom variant="subtitle1">
                <strong>{c.split(": ")[0]}</strong>
                {c.split(":")[1]}
              </Typography>
            </>
          ))}
          <div ref={commentsRef} />
        </div>
        <div style={{ width: "100%" }}>
          <TextField
            fullWidth
            ows={4}
            multiline
            variant="outlined"
            inputProps={{ maxLength: 25 }}
            label="Write a comment"
            helperText={comment.length === 25 && "Max Char 25"}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <Button
            style={{
              marginTop: "10px",
              backgroundImage:
                "linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e)",
              color: "#fff",
            }}
            fullWidth
            disabled={!comment.length}
            variant="contained"
            onClick={handleComment}
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
