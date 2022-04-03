import React, { useState} from 'react';
import { Container, Grow, Grid, Paper} from '@material-ui/core';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import Header from '../pages/Navbar/Header';
import HomePage from '../kalijFile/UserIndex'
import AboutAdmin from './AboutPage'
import {useLocation} from 'react-router-dom';
import Adminpagination from './Posts/Post/pagination/pagination'
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Admin = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
    const [currentId, setCurrentId] = useState('');
    const adminQuery = useQuery();
    const adminPage = adminQuery.get('adminPage' || 1);
      if(!user?.result.role) {
        return (
          <HomePage />
        )
        }
      return (
        <>
        <Header />
        <Container maxWidth="lg">
          <Grow in>
            <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={12}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Posts setCurrentId={setCurrentId} />
                  <Paper elevation={6} style={{ padding : '20px', margin : '20px' }}>
                      <Adminpagination adminPage={adminPage} />
                  </Paper>
                </Grid>
                </Grid>
                
            </Container>
          </Grow>
          <Grid item xs={12} sm={12}>
                    <AboutAdmin />
                </Grid>
        </Container>
        </>
      )
    };
    
    export default Admin;