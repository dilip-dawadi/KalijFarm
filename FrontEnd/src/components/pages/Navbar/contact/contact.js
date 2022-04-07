import React, { useRef, useState, useLayoutEffect } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from 'react-reveal';
const AboutPageStyles = styled.div`
  padding: 90px 10px 0px 10px;
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
  }

  .form > input:focus,
  textarea:focus {
    border: 1px solid rgb(0, 0, 196);
  }

  .form > textarea {
    min-height: 80px;
  }

  .form > label {
    padding-bottom: 10px;
    color: black;
    font-size: 17px;
  }

  .form > button {
    padding: 16px;
    letter-spacing: 2px;
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
  const [error, setError] = useState(false);
  const [btnDisable, setbtnDisable] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setError(false);
    }, 3000);
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
          <Paper elevation={4} style={{
            maxWidth: '350px',
            padding: '25px',
            borderRadius: '1%',
            margin: '20px auto',
          }} >
            <h3 style={{ color: "black", textAlign: 'center', letterSpacing: '3px', color: 'gray' }}>CONTACT <span style={{ color: 'white', backgroundColor: 'coral', padding: '5px 10px', borderRadius: '10px' }} >US</span></h3>
            <form autoComplete="off" ref={form} className="form" onSubmit={handleSubmit} >
              <label style={{ margin: '20px 0px 1px 10px' }}>Email</label>
              <input
                placeholder="Email"
                name="email"
                value={cont.email}
                onChange={(e) => setCont({ ...cont, email: e.target.value })}
              />
              <label style={{ margin: '0px 10px' }}>Subject</label>
              <input
                placeholder="Subject"
                name="subject"
                value={cont.subject}
                onChange={(e) => setCont({ ...cont, subject: e.target.value })}
              />
              <label style={{ margin: '0px 10px' }}>Message</label>
              <textarea
                placeholder="Message"
                name="message"
                value={cont.message}
                onChange={(e) => setCont({ ...cont, message: e.target.value })}
              ></textarea>
              {error && <label style={{ margin: '10px', color: 'red', textAlign: 'center' }}>{error}</label>}
              {!btnDisable ? <button type="submit" style={{ background: "coral" }}>
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
