import React, { useRef, useState, useLayoutEffect } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from 'react-reveal';
const AboutPageStyles = styled.div`
  padding: 100px 10px 0px 10px;
  .form {
    display: grid;
  } 
  .form > input,
  textarea {
    justify-content: center;
    padding: 12px;
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137);
    margin-bottom: 20px;
    border: 1px solid #f5f5f5;
    font-size: 16px;
    max-width: 400px;
  }

  .form > input:focus,
  textarea:focus {
    border: 1px solid rgb(0, 0, 196);
  }

  .form > textarea {
    max-width: 400px;
    min-height: 50px;
  }

  .form > label {
    padding-bottom: 10px;
    color: gray;
    font-weight: bold;
  }

  .form > button {
    padding: 18px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    margin-top: 10px;
  }

  .form > button:hover {
    background-color: rgb(0, 0, 196);
  }
`;
const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'instant',
    });
  }, []);
  const form = useRef();
  const initial = { email: "", subject: "", message: "" };
  const [cont, setCont] = useState(initial);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_fm83fp4",
        "template_8ud3rdu",
        cont,
        "user_EVrRItIvS1hm4Cm4xH8sg"
      ).then(
        (result) => {
          console.log(result.text);
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
          <Paper elevation={6} style={{
            maxWidth: '350px',
            padding: '25px',
            borderRadius: '1%',
            margin: '20px auto',
          }} >
            <h2 style={{ color: "gray", textAlign: 'center' }}>CONTACT US 🙏</h2>
            <form autoComplete="off" ref={form} className="form" onSubmit={handleSubmit} >
              <label style={{ margin: '30px 20px 0px 20px' }}>Email</label>
              <input
                placeholder="Email"
                name="email"
                value={cont.email}
                onChange={(e) => setCont({ ...cont, email: e.target.value })}
              />
              <label style={{ margin: '0px 20px' }}>Subject</label>
              <input
                placeholder="Subject"
                name="subject"
                value={cont.subject}
                onChange={(e) => setCont({ ...cont, subject: e.target.value })}
              />
              <label style={{ margin: '0px 20px' }}>Message</label>
              <textarea
                placeholder="Message"
                name="message"
                value={cont.message}
                onChange={(e) => setCont({ ...cont, message: e.target.value })}
              ></textarea>
              <button type="submit" style={{ background: "coral" }}>
                Submit
              </button>
            </form>
          </Paper>
        </div>
      </AboutPageStyles>
    </Zoom>
  );
};

export default Contact;
