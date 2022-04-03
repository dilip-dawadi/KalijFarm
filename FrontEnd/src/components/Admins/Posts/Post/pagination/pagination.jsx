/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import { getKalijs } from '../../../../../redux/actions/kalijs';
import useStyles from './styles';

const Adminpaginate = ({ adminPage }) => {
  const { adminNumberOfPages } = useSelector((state) => state.Kalijs);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
      if(adminPage) dispatch(getKalijs(adminPage)); 
  }, [dispatch, adminPage]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      className= {classes.pagination}
      count={adminNumberOfPages}
      page={Number(adminPage)}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/kalijs?adminPage=${item.page}`} />
      )}
    />
  );
};

export default Adminpaginate;