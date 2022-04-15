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
import Welcome from './welcome'
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Image = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get('roomNo' || 1);
  const roomSearchD = query.get('roomSearchD');
  const [tags, setTags] = useState([]);
  const [book, setBook] = useState('');
  let [pe, setpe] = useState('');
  const [ps, setps] = useState('');
  const [price, setprice] = React.useState([0, 1000]);

  const searchPost = () => {
    dispatch(getRoomBySearch({ book, pe, ps, tags: tags.join(',') }));
    navigate(`/room?status=${book}&ps=${ps}&pe=${pe}&tags=${tags.join(',')}`);
  };
  const allPost = () => {
    dispatch(getRooms(1));
    navigate('/room?roomNo=1');
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
            <Grid item xs={12} sm={9} md={8}>
              <All />
            </Grid>

            <Grid item xs={12} sm={3} md={4}>
              <div className={classes.mainSearch} >
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                  <ChipInput
                    style={{ margin: '10px 0' }}
                    value={tags}
                    onAdd={(chip) => handleAddChip(chip)}
                    onDelete={(chip) => handleDeleteChip(chip)}
                    label="Search Rooms"
                    variant="outlined"
                  />
                  <FormControl sx={{ overflow: 'hidden' }}>
                    <InputLabel id="demo-simple-select-helper-label">Room Status</InputLabel>
                    <Select
                      style={{ color: '#000', margin: '0px 0' }}
                      value={book}
                      variant="outlined"
                      onChange={(e) => setBook(e.target.value)}
                      label="Room Status"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'true'}>Available</MenuItem>
                      <MenuItem value={'false'}>Unavailabe</MenuItem>
                    </Select>
                  </FormControl>
                  <Box sx={{ margin: '10px auto' }}>
                    <div> <Typography id="non-linear-slider" gutterBottom style={{ backgroundColor: "lightblue", padding: '5px 10px', borderRadius: '10px' }} >
                      Rs.{price.at(0)} to Rs.{price.at(1)}
                    </Typography>
                    </div>
                    <div>
                      <Slider
                        value={price}
                        onChange={handlePrice}
                        valueLabelDisplay="auto"
                        min={0}
                        step={100}
                        max={1000}
                        getAriaValueText={valuetext}
                      />
                    </div>
                  </Box>
                  <Button onClick={searchPost} style={{
                    letterSpacing: '2.5px',
                  }} variant="contained" color="primary">Search</Button>
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