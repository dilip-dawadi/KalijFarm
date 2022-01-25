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
}));