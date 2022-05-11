import React, { useRef, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Zoom } from 'react-reveal';
const AboutPageStyles = styled.div`
  padding: 95px 10px 40px 10px;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } 
  .form > input {
    width: 100%;
    padding: 12px;
    border-radius: 3px;
    margin: 7px 10px 20px 10px;
    border: 0.5px solid gray;
    font-size: 16px;
  }
  .form > input:nth-child(3) {
    min-height: 80px;
  }

  .form > button {
    width: 100%;
    padding: 14px;
    letter-spacing: 2px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    margin-top: 5px;
  }

  .form > button:hover {
    background-color: rgb(0, 0, 196);
  }
`;
const Contact = () => {
  const form = useRef();
  const user = JSON.parse(localStorage.getItem("profile"));
  const initial = { email: "", subject: "", message: "" };
  const [cont, setCont] = useState(initial);
  const [error, setError] = useState(false);
  const [btnDisable, setbtnDisable] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setError(false);
    }, 3000);
    if (!user) return setError('Please login to send message');
    if (cont.email === "" || cont.subject === "" || cont.message === "") return setError('Please fill all the fields');
    emailjs
      .send(
        "service_fm83fp4",
        "template_8ud3rdu",
        cont,
        "user_EVrRItIvS1hm4Cm4xH8sg"
      ).then(
        (result) => {
          console.log(result.text);
          setbtnDisable(true);
        },
        (error) => {
          console.log(error);
        }
      );
    setCont(initial);
  };
  return (
    <Zoom>
      <AboutPageStyles>
        <div className="contact" >
          <Paper elevation={3} style={{
            maxWidth: '350px',
            padding: '25px',
            borderRadius: '1%',
            margin: '20px auto',
          }} >
            <Avatar style={{
              margin: '1rem auto',
              backgroundColor: '#4abdac',
              margin: '10px auto',
            }}>
              <ContactMailIcon />
            </Avatar>
            <h3 style={{ color: "black", textAlign: 'center', letterSpacing: '3px', color: 'black', fontWeight: '300', fontSize: '22px', margin: '25px 0px 25px 0px' }}>CONTACT US</h3>

            <form autoComplete="off" ref={form} className="form" onSubmit={handleSubmit} >
              <input
                placeholder="Email"
                name="email"
                value={cont.email}
                onChange={(e) => setCont({ ...cont, email: e.target.value })}
              />
              <input
                placeholder="Subject"
                name="subject"
                value={cont.subject}
                onChange={(e) => setCont({ ...cont, subject: e.target.value })}
              />
              <input
                placeholder="Message"
                name="message"
                value={cont.message}
                onChange={(e) => setCont({ ...cont, message: e.target.value })}
              ></input>
              {error && <label style={{ margin: '10px', color: 'red', textAlign: 'center' }}>{error}</label>}
              {!btnDisable ? <button type="submit" style={{ background: "#4abdac" }}>
                Submit
              </button> : <button disabled style={{ background: "#28a745" }}>
                Thank You
              </button>}
            </form>
          </Paper>
        </div>
      </AboutPageStyles>
    </Zoom>
  );
};

export default Contact;
