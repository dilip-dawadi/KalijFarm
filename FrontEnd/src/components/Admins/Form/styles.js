import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  media: {
    width: '100%',
    height: '220px',
    ObjectFit: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  Error: {
    color: 'white',
    fontSize: '12px',
    fontStyle: 'bold',
    letterSpacing: '1px',
    padding: '15px 20px',
    margin: '2px 0',
    backgroundColor: '#f21818',
    // hover
    '&:hover': {
      backgroundColor: '#f21818',
    },
    '&:disabled': {
      backgroundColor: '#f21818',
      color: '#fff',
    },
  },
  Success: {
    color: 'white',
    fontSize: '12px',
    fontStyle: 'bold',
    letterSpacing: '1px',
    padding: '15px 20px',
    margin: '2px 0',
    backgroundColor: '#28a745',
    // hover
    '&:hover': {
      backgroundColor: '#28a745',
    },
    '&:disabled': {
      backgroundColor: '#28a745',
      color: '#fff',
    },
  },
  buttonSubmit: {
    margin: '10px 0 5px 0',
  },
  // about table
  App: {
    display: 'flex',
    alignItems: 'center',
  },

  table: {
    padding: '16px 16px',
    border: '2px solid forestgreen',
    width: 'auto',
    height: 'auto',
  },

  th: {
    borderBottom: '1px solid black',
    padding: '16px 16px',
  },

  td: {
    borderBottom: '1px solid black',
    textAlign: 'center',
    padding: '16px 16px',
  },
  // About message photo
  madia: {
    height: 0,
    paddingTop: '70.25%',
    width: '80%',
    margin: '0 auto',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    backgroundBlendMode: 'darken',
  },

  // About Amedia in display to user
  Amadia: {
    paddingTop: '70.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
    marginTop: '80px',

  },
  [theme.breakpoints.down('sm')]: {
    Amadia: {
      marginTop: '0px',
      maxWidth: '500px',
      // height: '20px',
      margin: 'auto'
    }
  }
}));