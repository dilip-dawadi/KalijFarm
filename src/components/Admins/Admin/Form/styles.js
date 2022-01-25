import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
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
  buttonSubmit: {
    marginBottom: 10,
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
    paddingTop: '70.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
    backgroundBlendMode: 'darken',
  },
  // About Amedia in display to user
  Amedia: {
    marginTop: '40px',
    borderRadius: '20px',
    paddingTop: '48.25%',
  height: '50px',
  width:'450px',  
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},[theme.breakpoints.down('sm')]: {
  Amedia: {
    marginTop: '0px',
    height: 0,
  width:'350px',
  }},
  [theme.breakpoints.down('xs')]: {
    Amedia: {
      marginTop: '-50px',
      height: 0,
    width:'250px',
    }}
}));