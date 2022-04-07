import React, { useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import PText from '../kalijFile/Component/PText';
import { CardMedia } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from '../Admins/Form/styles'
import { getAbouts } from '../../redux/actions/About';
import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from 'react-reveal';

const AboutPageStyles = styled.div`
padding: 5.5rem 1rem 0rem 1rem;
.top-section {
  display: flex;
  text-align: justify;
  justify-content: flex-start;
  gap: 1rem;
  
}
.left {
  flex: 3.5;
}
.right {
  flex: 2.5;
  padding: 0px 2px;
}

.about__heading {
  font-weight: bold;
  font-size: 1.3rem;
  margin: 30px 10px 30px 50px;
  color: gray;
  letter-spacing: 2.5px;
}
.about__heading span{
  background-color: coral;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
}
.about__info {
  max-width: 600px;
  margin: 0 auto;
}
  @media only screen and (max-width: 400) {
  .about__heading {
    font-size: 1.2rem;
    
  }
}

@media only screen and (max-width: 960px) {
  padding: 3.2rem 0;
  .top-section {
    flex-direction: column;
    gap: 3rem;
  }
  .about__heading {
    font-size: 1.2rem;
    text-align: center;
  }
  .about__info__heading {
    font-size: 3rem;
  }
  
}
`;

export default function About() {
  const { abouts } = useSelector(((state) => state.About))
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAbouts());
    // by putting the name in [ ] in every update the currentid is change 
  }, [dispatch]);
  useLayoutEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <>
      <Zoom >
        <AboutPageStyles >
          {abouts.map((A) => (
            <div className="container" key={A._id}>
              <Paper elevation={3} style={{
                padding: '1rem 0rem', margin: '2rem 1rem',
              }} >
                <div className="top-section">
                  <Fade left>
                    <div className="left">
                      <h2 className="about__heading">About <span>{A.Atitle}</span></h2>
                      <div className="about__info">
                        <PText>
                          {A.Amessage}

                        </PText>
                      </div>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="right">
                      <CardMedia className={classes.Amadia} image={A.AselectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={A.Atitle} />
                    </div>
                  </Fade>
                </div>
              </Paper>
            </div>
          ))}
        </AboutPageStyles>
      </Zoom>
    </>
  );
}