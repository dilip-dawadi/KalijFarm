/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { getRooms } from "../../../../redux/actions/roomaction";
import useStyles from "./styles";

const Adminpaginate = ({ userPage }) => {
  const { adminNumberOfPages } = useSelector((state) => state?.Room);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (userPage) dispatch(getRooms(userPage));
  }, [dispatch, userPage]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      className={classes.pagination}
      count={adminNumberOfPages}
      page={Number(userPage)}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/room?roomNo=${item.page}`}
        />
      )}
    />
  );
};

export default Adminpaginate;
