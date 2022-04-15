import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, CardMedia, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from '../Form/styles'
import { createAbout, deleteAbout, updateAbout, getAbouts } from '../../../../redux/actions/About';
import DeleteIcon from '@material-ui/icons/Delete'
import UpdateIcon from '@material-ui/icons/Update'
import './demon.css'
const Form = () => {
  const { abouts } = useSelector(((state) => state.About))
  const [aboutPage, setAboutPage] = useState({ Atitle: '', Amessage: '', AselectedFile: '' });
  const [currentIdAbout, setCurrentIdAbout] = useState('');
  const AboutUpdate = useSelector((state) => state.About.abouts.filter(A => A._id === currentIdAbout)[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (AboutUpdate) {
      setAboutPage(AboutUpdate);
    };
    // by putting the name in [ ] in every update the currentid is change 
  }, [currentIdAbout, AboutUpdate]);
  useEffect(() => {
    dispatch(getAbouts());
  }, [dispatch]);
  const classes = useStyles();

  const clear = () => {
    setCurrentIdAbout(0);
    setAboutPage({ Atitle: '', Amessage: '', AselectedFile: '' });
  };
  const handleSubmitAbout = async (e) => {
    e.preventDefault();
    if (currentIdAbout) {
      dispatch(updateAbout(currentIdAbout, { ...aboutPage }));
    } else {
      dispatch(createAbout({ ...aboutPage }));
    }
    clear();
  };

  // ok have to remove form if there is no login user

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} lg={4}>
          <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmitAbout}>
              <Typography variant="h6">{currentIdAbout ? `Editing a About` : 'Creating a Abouts'}</Typography>
              <TextField name="Atitle" variant="outlined" label="Title" fullWidth value={aboutPage.Atitle} onChange={(e) => setAboutPage({ ...aboutPage, Atitle: e.target.value })} />
              <TextField name="Amessage" variant="outlined" label="Message" fullWidth multiline rows={4} value={aboutPage.Amessage} onChange={(e) => setAboutPage({ ...aboutPage, Amessage: e.target.value })} />
              <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setAboutPage({ ...aboutPage, AselectedFile: base64 })} /></div>

              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

              <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8} style={{ margin: 'auto' }} >
          <table className="contentTable">
            <thead>
              <tr>
                <th>Title</th>
                <th>Message</th>
                <th>File</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {abouts.map((A) => (
                <tr key={A._id}>
                  <td>{A.Atitle}</td>
                  <td>{A.Amessage.split(' ').splice(0, 2).join(' ')}...</td>
                  <td><CardMedia className={classes.madia} image={A.AselectedFile} title={A.title} /></td>
                  <td><DeleteIcon onClick={() => dispatch(deleteAbout(A._id))} /></td>
                  <td><UpdateIcon fontSize='small' onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIdAbout(A._id)
                  }} /></td>
                </tr>
              ))}
              {/* <tr className="activeRow"> */}

            </tbody>
          </table>
        </Grid>
      </Grid>
    </>
  )
};

export default Form;