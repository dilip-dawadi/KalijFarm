import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  spanFood: {
    backgroundColor: 'coral',
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
    color: 'Gray',
    fontWeight: '700',
    [theme.breakpoints.down('xs')]: {
      fontSize: '38px'
    },
  },
  appBarSearch: {
    borderRadius: 4,
    display: 'flex',
    marginTop: '1rem',
    padding: '1rem 1rem',
    [theme.breakpoints.down('sm')]: {
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
}));