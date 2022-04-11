import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
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
    letterSpacing: '2px',
    color: 'gray',
    fontWeight: '800',
    textAlign: 'center',
  },
  spanFood: {
    letterSpacing: '2px',
    backgroundColor: 'coral',
    padding: '0.2rem 1rem',
    color: 'white',
    borderRadius: '8px'
  },
  media: {
    width: '100%',
    height: '220px',
    ObjectFit: 'fill',
    ObjectPosition: 'center',
    borderRadius: '0px 0px 4px 4px',
    ['@media (max-width:650px)']: {
      height: '180px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '270px',
    },
    ['@media (max-width:420px)']: {
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
    backgroundColor: '#f5f5f5',
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

