import React, { useLayoutEffect } from 'react'
import useStyles from '../kalijFile/Component/kalijcss'
const PageNotFound = () => {
    const classes = useStyles();
    useLayoutEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'instant',
        });
    }, []);
    return (
        <div className={classes.PageNotFound}>
           <div className={classes.Food}>🤔 No Such <span className={classes.spanFood}> Page</span> Detected 🧐</div> 
        </div>
    )
}

export default PageNotFound;
