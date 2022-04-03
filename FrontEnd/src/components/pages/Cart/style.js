import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    padding: '5px 10px',
    backgroundColor: '#ED9F64',
    borderRadius: '15px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: "#FE540B",
      color: 'white',
    },
  },
  add: {
    backgroundColor: '#B3B1B1',
    borderRadius: '15px',
    margin: '0 1px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: "#0D76FE",
      color: 'white',
    },
  },
  minus: {
    backgroundColor: '#B3B1B1',
    borderRadius: '15px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: "#FE0D56",
      color: 'white',
    },
  },
  clear: {
    display: 'flex',
    margin: '30px 130px',
    justifyContent: 'space-between',
  }, [theme.breakpoints.down('sm')]: {
    clear: {
      margin: '40px 0px',
      display: 'block',
      textAlign: 'center'
    }
  },

  total: {
    padding: '7px 10px',
    backgroundColor: '#ED9F64',
    borderRadius: '15px',
    margin: '10px 0px',
    fontWeight: '600',
    color: 'white',
    '&:hover': {
      background: "#FE540B",
      color: 'white',
    }
  },
  // cart
  marg: {
    padding: '120px 10px 0px 10px',
  },
  madia: {
    width: '100%',
    height: '220px',
    ObjectFit: 'cover',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    borderRadius: '20px',
    position: 'relative',
  },
  cartTitle: {
    fontWeight: '780',
    padding: '0.5rem',
    fontSize: '15px',
    color: '#A2816C',
    textAlign: 'center'
  },
  spanFood: {
    backgroundColor: 'coral',
    padding: '0.2rem 1rem',
    color: 'white',
    borderRadius: '8px'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#E6DDDD',
    textAlign: 'center'
  },
  Food: {
    color: 'gray',
    fontWeight: '800',
    marginBottom: '20px',
    textAlign: 'center',

  },
}));