import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  btn: {
    textTransform: 'capitalize',
    padding: '0.4rem 0.7rem',
    backgroundImage: 'linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e)',
    letterSpacing: '1px',
    fontSize: '14px',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
  },
  like: {
    display: 'flex',
    width: '100%',
    padding: '5px',
    justifyContent: 'space-between',
    letterSpacing: '1px',
    fontSize: '14px',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    cursor: 'pointer',
  },
  cardActionsI: {
    display: 'grid',
    margin: '10px',
  },
  cardActionsIuser: {
    display: 'grid',
    backgroundColor: '#f0f0f0',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '8px',
    position: 'relative',
    width: '100%',
    height: '100%',
    // media queries
    ['@media (max-width:600px)']: {
      width: '80%',
      height: 'auto',
      margin: '0 auto',
    },
    ['@media (max-width:470px)']: {
      width: '100%',
      height: 'auto',
      margin: '0 auto',
    },
    '&:hover': {
      boxShadow: '0px 3px 7px #4abdac',
    },
  },
  cardsearch: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    borderRadius: '10px',
    position: 'relative',
    width: '40%',
    margin: '60px auto',
    [theme.breakpoints.down('md')]: {
      width: '70%',
      margin: '40px auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      margin: '10px auto',
    },
  },
}));