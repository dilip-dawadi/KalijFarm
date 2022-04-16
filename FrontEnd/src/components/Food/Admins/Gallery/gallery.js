import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, CardMedia, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../Form/styles'
import { createaGallery, deleteaGallery, updateaGallery, getGalleries } from '../../../../redux/actions/galleryAction';
import DeleteIcon from '@material-ui/icons/Delete'
import UpdateIcon from '@material-ui/icons/Update'
import './style.css'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../Form/firebase';
const Form = () => {
    const { gallery } = useSelector(((state) => state.Gallery))
    const [galleryPage, setgalleryPage] = useState({ title: '' });
    const [currentID, setcurrentID] = useState('');
    const galleryUpdate = useSelector((state) => state.Gallery.gallery.filter(G => G._id === currentID)[0]);
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(0);
    const [image, setimage] = useState({ selectedFile: '' });
    const [imageUrl, setimageUrl] = useState(null);

    useEffect(() => {
        if (galleryUpdate) {
            setgalleryPage(galleryUpdate);
        };
        // by putting the name in [ ] in every update the currentid is change 
    }, [currentID, galleryUpdate]);
    useEffect(() => {
        dispatch(getGalleries());
    }, [dispatch]);
    const classes = useStyles();

    const clear = () => {
        setcurrentID(0);
        setgalleryPage({ title: '', selectedFile: '' });
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

    const handleSubmitAbout = async (e) => {
        e.preventDefault();
        if (currentID) {
            dispatch(updateaGallery(currentID, { ...galleryPage, selectedFile: imageUrl }));
        } else {
            dispatch(createaGallery({ ...galleryPage, selectedFile: imageUrl }));
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
                            <Typography variant="h6">{currentID ? `Editing a About` : 'Creating a Abouts'}</Typography>
                            <TextField name="Atitle" variant="outlined" label="Title" fullWidth value={galleryPage.title} onChange={(e) => setgalleryPage({ ...galleryPage, title: e.target.value })} />

                            {progress ?
                                <div style={{ padding: '7px 0', width: '98%', margin: '20px auto', textAlign: 'center' }}>
                                    <Typography variant="body1">{progress}</Typography>
                                </div> :
                                <div style={{ textAlign: "center" }} ><input style={{ padding: '20px 0px', marginLeft: "50px" }} type="file" id='selectedFile' name='selectedFile' onChange={(e) => setimage({ ...image, selectedFile: e.target.files[0] })} />
                                    <Button variant="contained" color="primary" size="large" onClick={upload}>Upload</Button></div>}

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
                                <th>File</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gallery?.slice(0, 2).map((A) => (
                                <tr key={A._id}>
                                    <td>{A.title}</td>
                                    <td><CardMedia className={classes.madia} image={A.selectedFile} title={A.title} /></td>
                                    <td><DeleteIcon onClick={() => dispatch(deleteaGallery(A._id))} /></td>
                                    <td><UpdateIcon fontSize='small' onClick={(e) => {
                                        e.stopPropagation();
                                        setcurrentID(A._id)
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