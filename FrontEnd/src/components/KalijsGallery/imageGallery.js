import React, {useState, useLayoutEffect } from 'react';
import {Typography, Grid, Paper, AppBar, TextField, Button, Container, Grow} from '@material-ui/core'
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import ChipInput from 'material-ui-chip-input';
import {getKal, getKalBySearch } from '../../redux/actions/kalijs';
import All from './All'
import Pagination from '../kalijFile/Component/pagination/pagination'
import useStyles from './styles';
function useQuery() {
  return new URLSearchParams(useLocation().search);}

const Image = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get('page' || 1);
  const searchKals = query.get('searchKals');
      useLayoutEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'instant',
        });
    }, []);


    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    
  
    const searchPost = () => {
      if (search.trim() || tags) {
        dispatch(getKalBySearch({ search, tags: tags.join(',') }));
        
        navigate(`/kalijs/all/search?searchKals=${search || 'none'}&tags=${tags.join(',')}`);
      } else {
        navigate('/kalijs/all');
      }
    };
    const allPost = () => {
      dispatch(getKal(1));
      navigate('/kalijs/all?page=1');
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
            <Typography variant="h4" align="center" className={classes.galleryH}>Food <span className={classes.spanFood}>Gallery</span></Typography> 
            <br />
            <br />
    <Grow in>
    <Container maxWidth="xl">
    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
    <Grid item xs={12} sm={9} md={8}>
    <All />
    </Grid>
    <Grid item xs={12} sm={3} md={4}>
      <div className={classes.mainSearch} >
      <AppBar className={classes.appBarSearch} position="static" color="inherit">
      <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Foods" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
             { search || tags.length > 0 ? <Button onClick={allPost} style={{
                  marginTop: '3px',
                }} variant="contained" color="secondary">See All</Button> : null} 
              </AppBar>
            {(!searchKals && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
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