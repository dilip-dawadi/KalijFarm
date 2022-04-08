import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ChipInput from 'material-ui-chip-input';
import useStyles from './styles';
import { createKalijing, updateKalij } from '../../../redux/actions/kalijs';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: [], price: '' });
  const [image, setimage] = useState({ selectedFile: '' });
  const [imageUrl, setimageUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [Error, setError] = useState(null);
  const [createMessage, setcreateMessage] = useState(null);
  const [updateMessage, setupdateMessage] = useState(null);
  const kalijU = useSelector((state) => state.Kalijs.Kalijs.filter(kali => kali._id === currentId)[0]);
  const { errorKalij, createMsg, updateMsg } = useSelector((state) => state.Kalijs);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    if (kalijU) {
      setPostData(kalijU);
      setimage(kalijU.selectedFile);
    };
  }, [kalijU]);
  useEffect(() => {
    setcreateMessage(createMsg);
    setupdateMessage(updateMsg);
    setTimeout(() => {
      setcreateMessage(null);
      setupdateMessage(null);
    }, 4000);
  }, [createMsg, updateMsg]);

  useEffect(() => {
    setError(errorKalij);
    setTimeout(() => {
      setError(null);
    }, 4000);
  }, [errorKalij]);
  const user = JSON.parse(localStorage.getItem('profile'))

  const clear = () => {
    setCurrentId(0);
    setcreateMessage(null);
    setupdateMessage(null);
    setError(null);
    setProgress(0);
    setPostData({ title: '', message: '', tags: [], price: '' });
    setimage({ selectedFile: '' });
    setimageUrl(null);
    setProgress(0);
  };

  const upload = () => {
    if (!image.selectedFile) return;
    const sotrageRef = ref(storage, `files/${image.selectedFile.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, image.selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused": // or 'paused'
            setProgress("Upload is paused");
            break;
          case "running": // or 'running'
            setProgress("Upload is " + progress + "% done");
            break;
        }
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimageUrl(downloadURL);
        });
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateKalij(currentId, { ...postData, selectedFile: imageUrl, name: user?.result?.name }
      ));
    } else {
      dispatch(createKalijing({ ...postData, selectedFile: imageUrl, name: user?.result?.name }));
    }
  };
  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...postData, tags: postData.tags?.filter((tag) => tag !== chipToDelete) });
  };
  // ok have to remove form if there is no login user
  return (
    <>
      {(user?.result.bill) ?
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} encType="multipart/form-data" >
            <Typography variant="h6">{currentId ? `Editing a Dishes` : 'Creating a Dishes'}</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
            <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
            <TextField name="price" variant="outlined" label="Price" fullWidth value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })} />
            <div style={{ padding: '7px 0', width: '98%' }}>
              <ChipInput
                name="tags"
                variant="outlined"
                label="Tags"
                fullWidth
                value={postData.tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
              />
            </div>
            {progress ?
              <div style={{ padding: '7px 0', width: '98%', textAlign: 'center' }}>
                <Typography variant="body1">{progress}</Typography>
              </div> :
              <div style={{ textAlign: "center" }} ><input style={{ padding: '20px 0px', marginLeft: "50px" }} type="file" id='selectedFile' name='selectedFile' onChange={(e) => setimage({ ...image, selectedFile: e.target.files[0] })} />
                <Button variant="contained" color="primary" size="large" onClick={upload}>Upload</Button></div>}
            {/* error or createMessage or updateMessage display*/}
            {(Error || createMessage || updateMessage) && <Button color="secondary"
              disabled
              className={Error ? classes.Error : classes.Success} fullWidth>{(Error || createMessage || updateMessage)}</Button>}
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" disabled={!user?.result} fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
        :
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#f5f5f5',
            padding: '30px',
            borderRadius: '10px',
          }}>
          <div>
            <Typography variant="h6" style={{ textAlign: 'center', letterSpacing: '2px', margin: '10px auto' }} >Greeding, Mr.{user?.result.name}</Typography>
          </div>
          <div>
            <Typography variant="body1" style={{ color: "gray", letterSpacing: '2px', textAlign: 'center' }} >Due to a payment issue, your admin panel is temporarily blocked.</Typography>
          </div>
          <div>
            <Typography variant="body1" style={{ color: "gray", letterSpacing: '2px', textAlign: 'center' }}>Ten dollars is the monthly payment, and I hope you can make it to the provider and pay ten dollars, which equals one thousand and two hundred rupees..</Typography>
          </div>
          <Typography variant="body1" style={{ color: "gray", letterSpacing: '2px', textAlign: 'center' }}>You may pay with esewa or any other service, and you can reach me at 9810024561.</Typography>
          <Typography variant="body1" style={{ letterSpacing: '2px', margin: '10px auto' }}>Thank you</Typography>
        </div>
      }
    </>
  );
}

export default Form;