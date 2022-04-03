import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
    maxHeight: "600px",
    "@media (max-width: 420px)": {
      maxWidth: "250px",
      maxHeight: "250px",
    }
  },
  btn: {
    backgroundColor: '#ED9F64',
    padding: '8px 15px',
    marginTop: '10px',
    border: '0px solid white',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: "#FE540B",
      color: 'white',
    },
  },
  paper: {
    backgroundColor: 'lightGray',
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
    margin: "10px",
  },
  inner: {
    padding: theme.spacing(1, 1, 1),
  }
}));
export default function ModalMessage({ openM, setOpenM }) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate()
  const classes = useStyles();
  const navig = () => {
    {
      (!user?.result?.name) ? (
        navigate('/auth')
      ) : (
      navigate('/cart')
    )
    }
  }
  const handleClose = () => {
    setOpenM(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openM}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openM}>
        {(!user?.result?.name) ? (
          <div className={classes.paper} >
            <h2 id="transition-modal-title" className={classes.inner} >LOGIN TO CONTINUE</h2>
            <p id="transition-modal-description" className={classes.inner}>Dear User, Thank You For Visiting Our Store.</p>
            <button type="button" className={classes.btn} onClick={navig} >
              LOGIN
            </button>
          </div>
        ) : (
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.inner}>Your Cart Added</h2>
            <p id="transition-modal-description" className={classes.inner}> Mr.{user.result.name.slice(0, 12)} <br /><br /> Thank You For Loving Our Product.</p>
            <button type="button" className={classes.btn} onClick={navig}>
              View Cart
            </button>
          </div>
        )}
      </Fade>
    </Modal>
  );
}
