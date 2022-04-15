import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  btn: {
    textTransform: 'capitalize',
    padding: '6.2px 12px',
    backgroundColor: '#ED9F64',
    borderRadius: '12px',
    letterSpacing: '1px',
    fontSize: '14px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: "#FE540B",
      color: 'white',
    },
  },
  cardActionsI: {
    display: 'grid',
    backgroundColor: '#f0f0f0',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    borderRadius: '20px',
    position: 'relative',
    '&:hover': {
      padding: '0.5x 0.5px'
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