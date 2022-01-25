import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
  gallery: {
    marginTop: '150px',
  },
  galleryH: {
    margin: '0 0 50px 0',
    color: 'Gray',
    fontWeight: '700',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    // borderRadius: '30px'
  },
  madia: {
    height: 0,
    marginTop: '20px',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '30px'
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
    '&:hover': {
      padding: '0.5x 0.5px'
    },
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
    margin: '15px',
  },
  title: {
    padding: '5px 16px',
  },
  cartTitle: {
    padding: '8x 20px',
    fontWeight: '780',
    fontSize: '15px',
    backgroundColor: '#E6DDDD',
    margin: '0px 0px',
    color: '#A2816C'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#E6DDDD',
    textAlign: 'center'
    
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

