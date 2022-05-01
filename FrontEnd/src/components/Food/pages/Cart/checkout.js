import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import emailjs from 'emailjs-com';
import MuiAlert from '@material-ui/lab/Alert';
import Notify from '../../modal/gmailM';
function Alert(props) {
  return <MuiAlert variant='filled' {...props} />;
}
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    padding: '30px',
    textAlign: "center",
  }, [theme.breakpoints.down('xs')]: {
    paper: {
      width: 240,
      padding: '20px',
      fontSize: '12px',

    }
  },
  btn: {
    textTransform: 'capitalize',
    padding: '10px 15px',
    margin: '5px 0px',
    fontWeight: 'bold',
    fontSize: '14px',
    backgroundColor: '#4abdac',
    borderRadius: '14px',
    border: '#4abdac',
    color: 'white',
    '&:hover': {
      backgroundColor: "#008f95",
    },
  },
  btnG: {
    textTransform: 'capitalize',
    border: 'white',
    backgroundColor: '#fff',
  },
}));
function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
export default function App({ cartItems }) {
  const [btnDisable, setbtnDisable] = useState(false);
  const user = JSON.parse(localStorage.getItem('profile'))
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rctg66q', 'template_vvpm5oq', e.target,
      'user_EVrRItIvS1hm4Cm4xH8sg')
      .then((result) => {
        console.log(result.text);
        setbtnDisable(true);
      }, (error) => {
        console.log(error);
      });
  };


  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  {
    cartItems.map((c) => (
      `text: ${c.title}`
    ))
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 style={{ padding: '0px 0px 10px 0px' }} >Hy, {user?.result.name || user} 😊</h2>
      <h4>Total Price: Rs.{totalPrice}</h4>
      <form onSubmit={sendEmail}>
        <input name="subject" type="hidden" defaultValue={user?.result.number || between(1000, 2000000)} />
        <input type="hidden" name="email" defaultValue={user?.result.email || 'Fake User'} />
        {cartItems.map((c) => (
          <input name="message" type="hidden" defaultValue={`Item ${c.title} order ${c.quantity} `} />
        ))}
        <input name="article" type="hidden" defaultValue={`  Rs.${totalPrice}`} />
        <br />
        {!btnDisable && <button type="submit" className={classes.btnG} disabled={btnDisable} ><Notify /></button>}
        <span> </span>

        <br /><br />
      </form>
      <Alert severity="info">Payment Info Will Sent in Your Gmail</Alert>
    </div>
  );

  return (
    <div>
      {!btnDisable ? <button type="button" className={classes.btn} onClick={handleOpen}>
        BUY NOW
      </button> : <button disabled className={classes.btn}>
        Check Gmail
      </button>}
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}