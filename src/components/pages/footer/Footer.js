import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
// import { IconButton } from '@material-ui/core';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import { Link as Scroll } from 'react-scroll';
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-10px" }}>
        Rk: Rhino Sport And Kalij Farm
      </h1>
      
          {/* <Scroll>
          <center><IconButton to="place-to-visit" smooth={true} >
              <ExpandLessIcon style={{ color: "green", padding: "5px", backgroundColor: "white", borderRadius: "10px" }}/>
            </IconButton></center>
          </Scroll> */}
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Chitwan</FooterLink>
            <FooterLink href="#">Tadi</FooterLink>
            <FooterLink href="#">Nawalparasi</FooterLink>

          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;