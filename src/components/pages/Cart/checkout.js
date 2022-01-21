import React, { useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import qrCode from '../../Images/qrCode.jpg'
import emailjs from 'emailjs-com';

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
    width: 300,
    backgroundColor: theme.palette.background.paper,
    padding: 20,
    textAlign: "center",
  },[theme.breakpoints.down('xs')]: {
    paper: {
        width: 240,
        fontSize: '11px'
    }},
    btn: {
        padding: '5px 10px',
        backgroundColor: '#ED9F64',
        border: '#ED9F64',
        // borderRadius: '10px',
        // padding: '10px 10px',
        color: 'white',
        '&:hover': {
            backgroundColor: "#FE540B",
            color: 'white',
         },
    },
    btnG: {
        padding: '5px 10px',
        backgroundColor: '#ED9F64',
        border: '#ED9F64',
        borderRadius: '10px',
        padding: '10px 10px',
        color: 'white',
        '&:hover': {
            backgroundColor: "#FE540B",
            color: 'white',
         },
    },
}));
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  } 
const messageU = () => {
    alert('Check your mail')
}
//   const user = JSON.parse(localStorage.getItem('profile'))
export default function App({cartItems}) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const form = useRef();
      const user = JSON.parse(localStorage.getItem('profile'))
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rctg66q', 'template_vvpm5oq', e.target, 
      'user_EVrRItIvS1hm4Cm4xH8sg')
        .then((result) => {
            console.log(result.text);
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
  {cartItems.map((c) => ( 
    `text: ${c.title}`
    ))}
  const body = (
    <div style={modalStyle} className={classes.paper}>
        <h2>Hy, {user?.result.name || user} 😊</h2>
      <h4>Total Price: ${totalPrice}</h4>
      <form ref={form} onSubmit={sendEmail}>
      <input name="subject" type="hidden"  defaultValue={user?.result.number || between(1000, 2000000)} />
      <input type="email" type="hidden" name="email" defaultValue={user?.result.email || 'Fake'} />
      {cartItems.map((c) => (  
          <input name="message" type="hidden" defaultValue={` ${c.title} and ${c.quantity} `} />
      ))}
      <br />
      <input type="submit" className={classes.btnG} value="Esewa Pay" onClick={messageU} />
      <br /><br />
    </form>
    <p> Click Esewa Pay To Procced Your Order</p>
    <p> Check Your Mail 🙂</p>
      {/* <img src={qrCode} alt='qr' width='230'   /> */}
    </div>
  );

  return (
    <div>
      <button type="button" className={classes.btn} onClick={handleOpen}>
        CheckOut
      </button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}