import React from 'react'
import useStyles from '../kalijFile/Component/kalijcs'
const PageNotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.PageNotFound} style={{ height: '50vh', display: 'grid', gridTemplateColumns: '1fr', justifyContent: 'center', alignItems: 'center', letterSpacing: '4px' }}>
            <div className={classes.Food} style={{ letterSpacing: '1px' }}> 🤔 No Such <span className={classes.spanFood}> Page</span>{' '} Detected 🧐</div>
            {/* </div> */}
        </div >
    )
}

export default PageNotFound;
