import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, Button } from '@material-ui/core';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import Header from '../pages/Navbar/Header';
import HomePage from '../kalijFile/UserIndex'
import AboutAdmin from './About/AboutPage'
import Gallery from './Gallery/gallery'
import { useLocation } from 'react-router-dom';
import Adminpagination from './pagination/pagination';
import RoomForm from '../../Restaurant/Admin/roomForm/Form'
import RoomPost from '../../Restaurant/Admin/roomPosts/Posts'
import RoomPagination from '../../Restaurant/Admin/roomPagination/pagination'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Admin = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const [currentId, setCurrentId] = useState('');
  const [currentRoomId, setcurrentRoomId] = useState(1);
  const [activeFood, setactiveFood] = useState(false);
  const [activeRoom, setactiveRoom] = useState(false);
  const [activeAbout, setactiveAbout] = useState(false);
  const [activeGallery, setactiveGallery] = useState(false);

  const adminQuery = useQuery();
  const userPage = adminQuery.get('userPage' || 1);
  if (!user?.result.role) {
    return (
      <HomePage />
    )
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ padding: '0px' }}>

        <Grid container spacing={3} >
          {!activeFood ? <Button style={{ margin: ' 40px auto auto auto', textAlign: 'center', color: "white", backgroundColor: 'coral' }} onClick={() => { setactiveAbout(false); setactiveFood(true) }} variant="contained" size="large">Show Food</Button> : <Button style={{ margin: ' 40px auto auto auto', textAlign: 'center' }} onClick={() => setactiveFood(false)} variant="contained" color="secondary" size="large">Hide Food</Button>}
        </Grid>

        <Grow in>
          <Container style={{
            padding: '12px',
          }} >
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}
              style={!activeFood ? { display: 'none' } : { display: '' }} >
              <Grid item xs={12} md={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} md={8} >
                <Posts setCurrentId={setCurrentId} />
                <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
                  <Adminpagination userPage={userPage} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grow>
        {/* end of food */}
        {/* start of room */}
        <Grid container spacing={3}>
          {!activeRoom ? <Button style={{ margin: ' 20px auto', textAlign: 'center', color: "white", backgroundColor: 'coral' }} onClick={() => { setactiveAbout(false); setactiveRoom(true) }} variant="contained" size="large">Show Room</Button> : <Button style={{ margin: ' 20px auto', textAlign: 'center' }} onClick={() => setactiveRoom(false)} variant="contained" color="secondary" size="large">Hide Room</Button>}
        </Grid>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}
              style={!activeRoom ? { display: 'none' } : { display: '' }} >
              <Grid item xs={12} md={4}>
                <RoomForm currentRoomId={currentRoomId} setcurrentRoomId={setcurrentRoomId} />
              </Grid>
              <Grid item xs={12} md={8} >
                <RoomPost setcurrentRoomId={setcurrentRoomId} />
                <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
                  <RoomPagination userPage={userPage} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grow>
        {/* start of image page */}
        <Grid container spacing={3}>
          {!activeGallery ? <Button style={{ margin: ' 20px auto', textAlign: 'center', color: "white", backgroundColor: 'coral' }} onClick={() => { setactiveGallery(true) }} variant="contained" size="large">Show Gallery</Button> : <Button style={{ margin: ' 20px auto', textAlign: 'center' }} onClick={() => setactiveGallery(false)} variant="contained" color="secondary" size="large">Hide Gallery</Button>}
        </Grid>
        <Grid item xs={12} sm={12} style={!activeGallery ? { display: 'none' } : { display: '' }}>
          <Gallery />
        </Grid>

        {/* start of about page */}
        <Grid container spacing={3}>
          {!activeAbout ? <Button style={{ margin: ' 20px auto', textAlign: 'center', color: "white", backgroundColor: 'coral' }} onClick={() => { setactiveAbout(true) }} variant="contained" size="large">Show About</Button> : <Button style={{ margin: ' 20px auto', textAlign: 'center' }} onClick={() => setactiveAbout(false)} variant="contained" color="secondary" size="large">Hide About</Button>}
        </Grid>

        <Grid item xs={12} sm={12} style={!activeAbout ? { display: 'none' } : { display: '' }}>
          <AboutAdmin />
        </Grid>
      </Container>
    </>
  )
};

export default Admin;