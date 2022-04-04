// react
import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { verify } from '../../redux/actions/Auth';

const Verify = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { Verify } = useSelector((state) => state.Auth);
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        dispatch(verify(params.id, params.token));
    }, [params]);

    return (
        <div style={{
            paddingTop: '66px',
        }} >
            <Paper style={{
                padding: '20px',
                margin: '20% auto',
                textAlign: 'center',
                width: '50%',
            }}>
                {Verify ? <><h1>{Verify.message}</h1>  <Link to="/auth" style={{
                    textDecoration: 'none',
                    padding: '20px',
                    color: '#fff',
                    marginTop: '20px',
                    background: '#2196f3',
                    display: 'inline-block',
                }} >Login</Link></> : <h1>Invalid Link</h1>}
            </Paper>
        </div>
    );
}
export default Verify;