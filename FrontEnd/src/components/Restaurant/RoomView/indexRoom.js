import React, { useState } from 'react';
import { Typography, Grid, Paper, AppBar, TextField, Button, Container, Grow } from '@material-ui/core'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import ChipInput from 'material-ui-chip-input';
import { getRoomBySearch, getRooms } from '../../../redux/actions/roomaction';
import All from './All'
import { PaginateRoom } from '../../Food/kalijFile/Component/pagination/pagination'
import useStyles from './styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Loading from "../../Food/loading/AllRoom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Image = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get('rp' || 1);
  const roomSearchD = query.get('roomSearchD');
  const [tags, setTags] = useState([]);
  const [book, setBook] = useState('');
  let [pe, setpe] = useState('');
  const [ps, setps] = useState('');
  const [price, setprice] = React.useState([100, 2000]);
  const { Rooms, isLoading } = useSelector((state) => state.Room);


  const searchPost = () => {
    dispatch(getRoomBySearch({ book, pe, ps, tags: tags.join(',') }));
    navigate(`/room?status=${book}&ps=${ps}&pe=${pe}&tags=${tags.join(',')}`);
  };
  const allPost = () => {
    dispatch(getRooms(1));
    navigate('/room?rp=1');
  };
  const handlePrice = (event, newValue) => {
    setprice(newValue);
    setps(price.at(0));
    setpe(price.at(1));
  };
  const handleAddChip = (tag) => {
    setTags([...tags, tag]);
  }

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));
  function valuetext(value) {
    return `Rs.${value}`;
  }
  return (
    <div className={classes.gallery}>
      <Typography variant="h4" align="center" className={classes.galleryH}>BOOK <span className={classes.spanFood}> ROOMS</span></Typography>
      <br />
      <Grow in>
        <Container maxWidth="xl">
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            {/* <Grid item>
              <Welcome />
            </Grid> */}
            <Grid item xs={12} md={8}>
              <Grid className={classes.Roomonlycontainer} container alignItems="stretch" spacing={3}>
                {isLoading ? <Loading /> :
                  Rooms?.map((Room) => (
                    <Grid key={Room._id} item xs={12} sm={6} md={6} lg={4}>
                      <All Room={Room} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.mainSearch} >
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                  <ChipInput
                    style={{ margin: '12px 0' }}
                    value={tags}
                    onAdd={(chip) => handleAddChip(chip)}
                    onDelete={(chip) => handleDeleteChip(chip)}
                    label="Search Rooms"
                    variant="outlined"
                  />
                  <FormControl sx={{ overflow: 'hidden', marginTop: '5px' }}>
                    <InputLabel id="demo-simple-select-helper-label">Room Status</InputLabel>
                    <Select
                      style={{ color: '#000', margin: '0px' }}
                      value={book}
                      variant="outlined"
                      onChange={(e) => setBook(e.target.value)}
                      label="Room Status"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'false'}>Available</MenuItem>
                      <MenuItem value={'true'}>Unavailabe</MenuItem>
                    </Select>
                  </FormControl>
                  <Box sx={{ margin: '0px 40px' }}>
                    <Slider
                      value={price}
                      onChange={handlePrice}
                      style={{ color: "gray", borderRadius: '10px', margin: '10px 0' }}
                      valueLabelDisplay="auto"
                      min={100}
                      step={100}
                      max={2000}
                      getAriaValueText={valuetext}
                    />
                  </Box>
                  <Button onClick={searchPost} style={{
                    letterSpacing: '2.5px', backgroundColor: '#4abdac', color: 'white', fontWeight: 'bold', fontSize: '14px',
                  }} variant="contained">Search</Button>
                  {(roomSearchD || tags.length > 0) ? <Button onClick={allPost} style={{
                    marginTop: '3px', letterSpacing: '3px',
                  }} variant="contained" color="secondary">See All</Button> : null}
                </AppBar>
                {(!roomSearchD && !tags.length) && (
                  <Paper className={classes.pagination} elevation={4}>
                    <PaginateRoom page={page} />
                  </Paper>
                )}
              </div>
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </div>
  )
}
export default Image;