import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigation = useNavigate();
  return (
    <Box>
      <h1 style={{
        color: "white",
        textAlign: "center",
        padding: '20px 10px',
        margin: '10px 0px',
        letterSpacing: '3px',

      }}>
        Rk: Rhino Sport And Kalij Farm
      </h1>
      <Container style={{ marginTop: "20px" }} >
        <Row>
          <Column>
            <Heading style={{ cursor: 'pointer', letterSpacing: '2px' }} >About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading style={{ cursor: 'pointer', letterSpacing: '2px' }}>Contact Us</Heading>
            <FooterLink href="#">Chitwan</FooterLink>
            <FooterLink href="#">Tadi</FooterLink>
            <FooterLink href="#">Nawalparasi</FooterLink>
          </Column>
          <Column>
            <Heading style={{ cursor: 'pointer', letterSpacing: '2px' }}>Social Media</Heading>
            <FooterLink href="https://m.facebook.com/RhinoSpotResort/?tsid=0.20294373473678684&source=result">
              <span>
                Facebook
              </span>
            </FooterLink>
            <FooterLink href="#">
              <span>
                Instagram
              </span>
            </FooterLink>
            <FooterLink href="#">
              <span>
                Twitter
              </span>
            </FooterLink>
            <FooterLink href="#">
              <span>
                Youtube
              </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;