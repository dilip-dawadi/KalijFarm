import React, { useLayoutEffect } from 'react';
import {Button } from '@material-ui/core/';

import {Link} from 'react-router-dom'
import Header from '../pages/Navbar/Header'
import useStyles from './Component/kalijcss'
import Admin from '../Admins/Admin/Admin'
import About from './userAbout'
import Post from './kalij'

export default function ({handleAddProduct}) {

  useLayoutEffect(() => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'instant',
    });
}, []);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))
  if(user?.result.role) {
    return (
      <Admin />
    )
    }
  return (
    <>
    <Header />
    <About />
    <div className={classes.root}>
      <Post handleAddProduct={handleAddProduct}/>
    </div>

    </>
  );
}