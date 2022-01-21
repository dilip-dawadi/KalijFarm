import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // pagenotfound
  PageNotFound: {
    marginTop: '240px',
    marginBottom: '100px'
  },
  // cart
  marg: {
    marginTop: '210px',
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
 },},
 minus: {
  backgroundColor: '#B3B1B1',
  borderRadius: '15px',
  color: 'white',
  fontWeight: 'bold',
'&:hover': {
  background: "#FE0D56",
  color: 'white',
},},
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
    margin: '0 0 50px 0 ',
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
    borderRadius: '15px',
    height: '100%',
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
    margin: '15px',
  },
  title: {
    padding: '5px 16px',
  },
  cartTitle: {
    padding: '8px 20px',
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
  clear: {
    display: 'flex',
    margin: '30px 130px',
    justifyContent: 'space-between',
  },[theme.breakpoints.down('sm')]: {
    clear: {
      margin: '40px 0px',
      display: 'block',
      textAlign: 'center'
    }},

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
 }},
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  button: {
    marginTop: '30px',
  },
  btn: {
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
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

