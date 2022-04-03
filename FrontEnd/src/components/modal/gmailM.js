import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(10),
    },
  },
  btn: {
    backgroundColor: '#ED9F64',
    padding: '8px 12px',
    border: '0px solid white',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: "#FE540B",
      color: 'white',
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={handleClick} className={classes.btn}>
        Esewa Pay
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="success">
          Done, Check Your Mail
        </Alert>
      </Snackbar>
    </div>
  );
}