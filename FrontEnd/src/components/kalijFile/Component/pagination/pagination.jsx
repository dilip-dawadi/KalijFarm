/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

import { getKal } from "../../../../redux/actions/kalijs";
import useStyles from "./styles";

export const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.Kalijs);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getKal(page));
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      className={classes.pagination}
      count={numberOfPages}
      page={Number(page)}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/kalijs/all?page=${item.page}`}
        />
      )}
    />
  );
};

export const PaginateGallery = ({ page }) => {
  console.log(page, "no");
  const { numberOfPages } = useSelector((state) => state.Kalijs);
  const dispatch = useDispatch();

  const classes = useStyles();
  console.log(page, "page");
  useEffect(() => {
    dispatch(getKal(page));
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      className={classes.pagination}
      count={numberOfPages}
      page={Number(page)}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/kalijs/all?page=${item.page}`}
        />
      )}
    />
  );
};
