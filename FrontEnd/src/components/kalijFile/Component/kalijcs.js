import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
    padding: '1rem 1.25rem',
  },
  // pagenotfound
  PageNotFound: {
    marginTop: '240px',
  },
  // cart
  marg: {
    marginTop: '150px',
  },
  // gallery
  Food: {
    color: 'gray',
    fontWeight: '800',
    textAlign: 'center',
  },
 spanFood: {
  backgroundColor: 'coral',
  padding: '0.2rem 1rem',
  color: 'white',
  borderRadius: '8px'
  },
  media: {
    width:'100%', 
    height:'240px',
      ObjectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: '200px',
    }
  },

  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    borderRadius: '20px',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 15px',
  },
  title: {
    padding: '0px 16px',
  },
  cartTitle: {
    margin: '0x 20px',
    fontWeight: '780',
    fontSize: '15px',
    backgroundColor: '#E6DDDD',
    color: '#A2816C'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#E6DDDD',
    textAlign: 'center'
  },
  cardActionsI: {
    display: 'grid',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

