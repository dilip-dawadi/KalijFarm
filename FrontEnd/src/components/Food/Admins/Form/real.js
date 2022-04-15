// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import { useDispatch, useSelector } from 'react-redux';
// import ChipInput from 'material-ui-chip-input';
// import useStyles from './styles';
// import { createKalijing, updateKalij } from '../../../../actions/kalijs';

// const Form = ({ currentId, setCurrentId }) => {
//   const [postData, setPostData] = useState({ title: '', message: '', tags: [], price: '' });
//   const [image, setimage] = useState({ selectedFile: '' });

//   const kalijU = useSelector((state) => state.Kalijs.Kalijs.filter(kali => kali._id === currentId)[0]);
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   useEffect(() => {
//     if (kalijU) {
//       setPostData(kalijU);
//       setimage(kalijU.selectedFile);
//     };
//   }, [kalijU]);

//   const user = JSON.parse(localStorage.getItem('profile'))

//   const clear = () => {
//     setCurrentId(0);
//     setPostData({ title: '', message: '', tags: [], price: '' });
//     setimage({ selectedFile: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     var data = new FormData();
//     data.append('selectedFile',image.selectedFile);
//     data.append('title', postData.title);
//     data.append('message', postData.message);
//     var arr = postData.tags;
//     for (var i = 0; i < arr.length; i++) {
//     data.append('tags', arr[i]);
//     }
//     data.append('price', postData.price);
//     data.append('name', user?.result?.name);
//     if (currentId) {
//       dispatch(updateKalij(currentId,data));
//       clear();
//     } else {
//     dispatch(createKalijing(data));
//       clear();
//     }
//   };
//   const handleAddChip = (tag) => {
//     setPostData({ ...postData, tags: [...postData.tags, tag] });
//   };

//   const handleDeleteChip = (chipToDelete) => {
//     setPostData({ ...postData, tags: postData.tags?.filter((tag ) => tag !== chipToDelete) });
//   };
//   // ok have to remove form if there is no login user
//   return (
//     <Paper className={classes.paper}>
//       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} encType="multipart/form-data" >
//         <Typography variant="h6">{currentId ? `Editing a Dishes` : 'Creating a Dishes'}</Typography>
//         <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
//         <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
//         <TextField name="price" variant="outlined" label="Price" fullWidth value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })} />
//         <div style={{ padding: '7px 0', width: '98%' }}>
//           <ChipInput
//             name="tags"
//             variant="outlined"
//             label="Tags"
//             fullWidth
//             value={postData.tags}
//             onAdd={(chip) => handleAddChip(chip)}
//             onDelete={(chip) => handleDeleteChip(chip)}
//           />
//         </div>
//         <input style={{ padding: '20px 0'}} type="file" id='selectedFile' name='selectedFile' onChange={(e) => setimage({ ...image, selectedFile: e.target.files[0] })} />
//         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" disabled={!user?.result} fullWidth>Submit</Button>
//         <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
//       </form>
//     </Paper>
//   );
// };

// export default Form;