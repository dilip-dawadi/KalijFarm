import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    padding: '0.5rem 1rem',
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
    letterSpacing: '2px',
    color: 'gray',
    fontWeight: '800',
    textAlign: 'center',
  },
  spanFood: {
    letterSpacing: '2px',
    backgroundImage: 'linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e)',
    padding: '0.2rem 1rem',
    color: 'white',
    borderRadius: '8px'
  },
  media: {
    width: '100%',
    height: '250px',
    ObjectFit: 'contain',
    ObjectPosition: 'center',
    borderRadius: '0px 0px 4px 4px',
    ['@media (max-width:350px)']: {
      height: '220px',
    },
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
    marginTop: '20px',
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
    padding: '5px 17px 15px 17px',
  },
  title: {
    color: 'gray',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '16px 15px 4px 15px',
  },
  cartTitle: {
    padding: '5px 17px 15px 17px',
    fontSize: '15px',
    color: '#A2816C'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    textAlign: 'center'
  },
  cardActionsI: {
    display: 'grid',
    margin: '10px',
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

