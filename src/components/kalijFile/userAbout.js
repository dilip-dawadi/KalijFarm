import React, { useEffect}from 'react';
import styled from 'styled-components';
import PText from './Component/PText';
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getAbouts } from '../../actions/About';
import {CardMedia} from '@material-ui/core'
import useStyles from '../Admins/Admin/Form/styles'

const AboutSectionStyles = styled.div`

  .container {
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .about__heading {
    font-size: 1.4rem;
    color: gray;
    font-weight: 900;
    margin-left: 2rem;
  }
  .about__heading span{
    background-color: coral;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 8px;
  }
  .aboutSection__left {
    flex: 1.2;
  }
  .aboutSection__right {
    flex:0.8;
  }
  .para {
    margin-top: 2rem;
    margin-left: 4rem;
  }
  .aboutSection__buttons{
    margin-top: 2rem;
    margin-left: 4rem;
  }
    .link {  
    text-decoration:none;
    background-color: coral;
    padding: 0.4rem 1rem;
    color: white;
    border-radius:10px;
  }
  image{
    max-width: 50px;
    }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      text-align: center;
      margin-left: 0rem;
      padding:1rem 0 0 1rem;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
    const About = useSelector(((state) => state.About))
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
      dispatch(getAbouts());   
        // by putting the name in [ ] in every update the currentid is change 
    }, [dispatch]);
  return (
    <AboutSectionStyles>
        {About.map((A) => ( 

      <div className="container" id="place-to-visit" key={A._id}>
        <div className="aboutSection__left">
        <h2 className="about__heading">About <span>{A.Atitle}</span></h2>
          <PText>
          {A.Amessage.split(' ').splice(0, 37).join(' ')}...
          </PText>
          <div className="aboutSection__buttons">
            <NavLink className="link" to="/about">Read Me</NavLink>
          </div>
        </div>
        <div className="aboutSection__right">
        <CardMedia className={classes.madia}  image={A.AselectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={A.Atitle} />
        </div>
      </div>
      ))}
    </AboutSectionStyles>
  );
}