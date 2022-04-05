
import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core'
import { Fade } from 'react-reveal';
import { useTheme } from '@mui/material/styles';
import LoadingPlaceHolder from './loading';

export default function LoadingAbout() {
    const theme = useTheme();
    return (
        <div className="container" id="place-to-visit" style={{ margin: '50px' }} >
            <Fade left>
                <div className="aboutSection__left">
                    <Paper elevation={3}
                        style={{
                            margin: '0 auto',
                            maxwidth: '50%',
                            borderRadius: '12px',
                            [theme.breakpoints.down('sm')]: {
                                padding: '10rem',
                            }
                        }}
                    >
                        <LoadingPlaceHolder extraStyles={{
                            height: 0,
                            paddingTop: '50%',
                            margin: 'auto',
                        }} />
                    </Paper>
                </div>
            </Fade>
        </div>
    );
}