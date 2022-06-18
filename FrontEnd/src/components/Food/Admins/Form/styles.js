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
    backgroundColor: 'transparent',
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
    paddingTop: '70%',
    width: '70%',
    margin: '0 auto',
    objectFit: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingTop: '100%',
    },
  },

  // About Amedia in display to user
  Amadia: {
    height: 0,
    paddingTop: '90%',
    width: '80%',
    margin: 'auto',
    objectFit: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      paddingTop: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingTop: '100%',
    },
  },
}));