import React, { useState } from 'react';
import { Typography, Grid, Paper, AppBar, TextField, Button, Container, Grow } from '@material-ui/core'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import ChipInput from 'material-ui-chip-input';
import { getKal, getKalBySearch } from '../../../redux/actions/kalijs';
import All from './All'
import { Paginate } from '../kalijFile/Component/pagination/pagination'
import useStyles from './styles';
import Loading from "../loading/AllKalijs";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Image = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get('page' || 1);
  const searchKals = query.get('searchKals');
  const { Kal, isLoading } = useSelector((state) => state.Kalijs);

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getKalBySearch({ search, tags: tags.join(',') }));

      navigate(`/food/search?searchKals=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/food');
    }
  };
  const allPost = () => {
    dispatch(getKal(1));
    navigate('/food?page=1');
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  const handleAddChip = (tag) => {
    setTags([...tags, tag]);
  }

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <div className={classes.gallery}>
      <Typography variant="h4" align="center" className={classes.galleryH}>ORDER <span className={classes.spanFood}>FOODS</span></Typography>
      <br />
      <br />
      <Grow in>
        <Container maxWidth="xl">
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} md={8}>
              <Grid className={classes.Foodonlycontainer} container alignItems="stretch" spacing={3}>
                {isLoading ? <Loading /> :
                  Kal?.map((kalij) => (
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <All key={kalij._id} kalij={kalij} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={classes.mainSearch} >
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                  <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Food" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                  <ChipInput
                    style={{ margin: '10px 0' }}
                    value={tags}
                    onAdd={(chip) => handleAddChip(chip)}
                    onDelete={(chip) => handleDeleteChip(chip)}
                    label="Search By Tags"
                    variant="outlined"
                  />
                  <Button onClick={searchPost} style={{
                    letterSpacing: '2.5px', backgroundImage: 'linear-gradient(to top, #51d6cb, #43ccc0, #34c2b4, #22b8a9, #03ae9e)', color: '#fff', fontWeight: 'bold', fontSize: '14px', padding: '8px', borderRadius: '5px',
                  }} variant="contained">Search</Button>
                  {(searchKals || tags.length > 0) ? <Button onClick={allPost} style={{
                    marginTop: '3px', letterSpacing: '3px',
                  }} variant="contained" color="secondary">See All</Button> : null}
                </AppBar>
                {(!searchKals && !tags.length) && (
                  <Paper className={classes.pagination} elevation={4}>
                    <Paginate page={page} />
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