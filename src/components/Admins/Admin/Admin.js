import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getKalijs} from '../../../actions/kalijs';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import Header from '../../pages/Navbar/Header'
import HomePage from '../../kalijFile/UserIndex'
import AboutAdmin from './AboutPage'
const Admin = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
    const [currentId, setCurrentId] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getKalijs());      
      }, [currentId, dispatch]);

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