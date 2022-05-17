import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { useNavigate } from "react-router-dom";
const Footer = () => {
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
            <Heading style={{ cursor: 'pointer', letterSpacing: '2px' }} >Pages</Heading>
            <FooterLink href="http://localhost:3000/food">Food</FooterLink>
            <FooterLink href="http://localhost:3000/room">Room</FooterLink>
            <FooterLink href="http://localhost:3000/auth">Auth</FooterLink>
          </Column>
          <Column>
            <Heading style={{ cursor: 'pointer', letterSpacing: '2px' }}>Contact Us</Heading>
            <FooterLink href="mailto:zanzerdawadi123@gmail.com" target="_blank">Email</FooterLink>
            <FooterLink href="tel:+9845716181" target="_blank">Phone</FooterLink>
            <FooterLink href="https://www.google.com/maps/dir//rhino+sopt+and+kalij/@27.66701,84.2295654,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39945720e22fd3f7:0xc82ffbb6af21bcc0!2m2!1d84.230399!2d27.6658771" target="_blank">Google Map</FooterLink>
          </Column>
          <Column>
            <Heading style={{ cursor: 'pointer', letterSpacing: '2px' }}>Social Media</Heading>
            <FooterLink href="https://m.facebook.com/RhinoSpotResort/?tsid=0.20294373473678684&source=result" target="_blank">
              <span>
                Facebook
              </span>
            </FooterLink>
            <FooterLink href="https://api.whatsapp.com/send?phone=+9779845716181" target="_blank">
              <span>
                WhatsApp
              </span>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/rhino_spot_resort_n_kalij_farm/" target="_blank">
              <span>
                Instagram
              </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;