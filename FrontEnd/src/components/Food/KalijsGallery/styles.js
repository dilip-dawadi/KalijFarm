import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  spanFood: {
    backgroundColor: 'coral',
    padding: '0.3rem 1rem',
    color: 'white',
    borderRadius: '8px',
    [theme.breakpoints.down('xs')]: {
      padding: '0.2rem 0.6rem',
    },
  },
  gallery: {
    paddingTop: '120px',
  },
  galleryH: {
    letterSpacing: '2px',
    color: 'Gray',
    fontWeight: '600',
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    },
  },
  appBarSearch: {
    borderRadius: 4,
    display: 'flex',
    marginTop: '1rem',
    padding: '1rem 1rem',
    ['@media (max-width:800px)']: {
      padding: theme.spacing(1),
    },
    ['@media (max-width:656px)']: {
      padding: theme.spacing(0.5),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.2),
    },
  },
  mainSearch: {
    padding: '0rem 1.4rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0rem',
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
      padding: '0rem',
      flexDirection: 'row-reverse',
    },
    [theme.breakpoints.down('xs')]: {
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