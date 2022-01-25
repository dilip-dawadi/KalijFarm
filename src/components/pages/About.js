import React, { useEffect,useLayoutEffect }from 'react';
import styled from 'styled-components';
import PText from '../kalijFile/Component/PText';
import {CardMedia} from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'
import useStyles from '../Admins/Admin/Form/styles'
import { getAbouts } from '../../actions/About';

const AboutPageStyles = styled.div`
padding: 2rem 0 2rem 0;
margin-top: 5rem;
.top-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
}
.left {
  flex: 2.5;
}
.right {
  flex: 1.5;
}

.about__heading {
  font-weight: 800;
  font-size: 1.3rem;
  margin: 20px 10px 30px 50px;
  color: gray;
}
.about__heading span{
  background-color: coral;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
}
.about__info {
  max-width: 500px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
  .para {
    max-width: 100%;
  }
}
@media only screen and (max-width: 1000px) {
  .right {
    img {
      border: 1px solid gray;
      max-width: 350px;
      border-radius: 20px;
    }
  }
}
@media only screen and (max-width: 375px) {
  .right {
    img {
      border: 1px solid gray;
      max-width: 250px;
      border-radius: 20px;
    }
  }
}
@media only screen and (max-width: 768px) {
  padding: 2rem 0;
  .top-section {
    flex-direction: column;
    gap: 5rem;
  }
  .about__heading {
    font-size: 1.2rem;
    margin: 0 auto;
  }
  .about__info__heading {
    font-size: 3rem;
  }
  
}
`;

export default function About() {
  const About = useSelector(((state) => state.About))
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
      <AboutPageStyles >
            {About.map((A) => ( 
        <div className="container" key={A._id}>
          <div className="top-section">
            <div className="left">
              <h2 className="about__heading">About <span>{A.Atitle}</span></h2>
              <div className="about__info">
                <PText>
                {A.Amessage}
                  
                </PText>
              </div>
            </div>
            <div className="right">
            <CardMedia className={classes.Amedia}  image={A.AselectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={A.Atitle} />
            </div>
            </div>    
        </div>
            ))}
      </AboutPageStyles>
    </>
  );
}