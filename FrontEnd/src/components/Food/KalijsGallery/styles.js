import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  spanFood: {
    backgroundColor: '#4abdac',
    padding: '0.3rem 1rem',
    color: 'white',
    borderRadius: '8px',
    [theme.breakpoints.down('xs')]: {
      padding: '0.25rem 0.6rem',
    },
  },
  gallery: {
    paddingTop: '120px',
  },
  galleryH: {
    letterSpacing: '2px',
    color: 'gray',
    fontWeight: '600',
    fontSize: '1.5rem',
    margin: "0px",
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    },
  },
  appBarSearch: {
    borderRadius: 4,
    display: 'flex',
    marginTop: '1rem',
    padding: theme.spacing(2.2),
  },
  mainSearch: {
    padding: '0rem 4rem',
    [theme.breakpoints.down('lg')]: {
      padding: '0rem 1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '60%',
      margin: '0 auto',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0rem 4rem',
    },
    ['@media (max-width:500px)']: {
      padding: '0rem 2rem',
    },
    ['@media (max-width:400px)']: {
      padding: '0rem 0.5rem',
    },
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: theme.spacing(2.2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.2),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.2),
    },
  },
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  // style of realGallery
  realBox: {
    padding: '1rem 2.25rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.8rem',
    },
  },
  media: {
    width: '100%',
    height: '320px',
    ObjectFit: 'cover',
    borderRadius: '10px',
    ['@media (max-width:750px)']: {
      height: '280px',
    },
    ['@media (max-width:600px)']: {
      height: '320px',
    },
    ['@media (max-width:450px)']: {
      height: '300px',
    },
    ['@media (max-width:380px)']: {
      height: '240px',
    },
  },
  Gpagination: {
    borderRadius: 4,
    margin: '1rem 3rem -4rem 3rem',
    padding: theme.spacing(2.2),
    ['@media (max-width: 730px)']: {
      margin: '1rem 1rem 0rem 1rem',
    },
  },

}));