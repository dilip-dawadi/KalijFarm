import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
}));