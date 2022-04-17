import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Paper,
    TextField,
    Button,
    Typography,
} from "@material-ui/core";
import UseStyle from './styles';
import { roomBook } from '../../../../redux/actions/roomaction';


const UpdateBook = () => {
    const classes = UseStyle();
    const dispatch = useDispatch();
    const { RoomBook, errorRoomBook } = useSelector((state) => state.Room);
    const user = JSON.parse(localStorage.getItem('profile'));
    const [roomBookForm, setroomBookForm] = useState({ booked: '', userEmail: '', id: '', sender: user?.result.email });
    const [roomBookError, setroomBookError] = useState(null);
    const [roomBookSuccess, setroomBookSuccess] = useState(null);
    const [roomBookDisable, setroomBookDisable] = useState(false);
    const handleroomBook = (e) => {
        e.preventDefault();
        if (!roomBookForm.userEmail || !roomBookForm.booked || !roomBookForm.id) return setroomBookError('Please fill all fields to continue  ');
        setroomBookDisable(true);
        setTimeout(() => {
            setroomBookDisable(false);
        }, 3000);
        dispatch(roomBook({ ...roomBookForm }));
    }
    const clear = () => {
        setroomBookForm({ booked: '', userEmail: '', id: '', sender: user?.result.email });
    };
    useEffect(() => {
        setroomBookSuccess(RoomBook);
        clear();
        setTimeout(() => {
            setroomBookSuccess(null);
        }, 3000);
    }, [RoomBook]);
    useEffect(() => {
        setroomBookError(errorRoomBook);
        setTimeout(() => {
            setroomBookError(null);
        }, 3000);
    }, [errorRoomBook]);
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleroomBook} >
                <Typography variant="h6">Update Room</Typography>
                <TextField name="id" variant="outlined" label="Room Id" type="ID" required fullWidth value={roomBookForm.id} onChange={(e) => setroomBookForm({ ...roomBookForm, id: e.target.value })} />
                <TextField name="userEmail" variant="outlined" label="User Email" type="userEmail" required fullWidth value={roomBookForm.userEmail} onChange={(e) => setroomBookForm({ ...roomBookForm, userEmail: e.target.value })} />
                <TextField name="Book" variant="outlined" label="Booked" fullWidth value={roomBookForm.booked} onChange={(e) => setroomBookForm({ ...roomBookForm, booked: e.target.value })} />
                {roomBookError && <Button color="secondary"
                    disabled
                    className={classes.Error} fullWidth>{roomBookError?.slice(0, -2)}</Button>}
                {roomBookSuccess && <Button color="secondary"
                    disabled
                    className={classes.Success} fullWidth>{roomBookSuccess?.slice(0, -2)}</Button>}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" disabled={roomBookDisable} style={roomBookDisable ? { disroomBook: 'none' } : null} fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" style={roomBookDisable ? {
                    disroomBook: 'none',
                } : null} size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}
export default UpdateBook;