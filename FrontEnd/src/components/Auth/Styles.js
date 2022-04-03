import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    padding: '5rem 1rem',
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  Error: {
    color: 'red',
    fontSize: '12px',
    fontStyle: 'bold',
    letterSpacing: '1px',
    padding: '12px 0px 0px 0px',
    // backgroundColor: '#f21818',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  formData: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  label: {
    color: "black"
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));