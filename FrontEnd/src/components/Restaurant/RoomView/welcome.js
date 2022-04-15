// create react app
import React from 'react';
import { Typography } from '@material-ui/core';


const Welcome = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <></>
        // <div
        //     style={{
        //         display: 'flex',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         flexDirection: 'row',
        //         backgroundColor: '#f5f5f5',
        //         padding: '50px',
        //         margin: '10px auto',
        //         borderRadius: '10px',
        //     }}>
        //     <div>
        //         <Typography variant="h6" style={{ color: "gray", textAlign: 'center', letterSpacing: '2px', margin: '20px auto', fontWeight: 'bold' }} >Greeding, Mr.{user?.result.name || '..'}</Typography>
        //     </div>
        //     <div>
        //         <Typography variant="body1" style={{ color: "gray", letterSpacing: '2px', textAlign: 'center', padding: '15px' }} >Search </Typography>
        //     </div>
        //     <div>
        //         <Typography variant="body1" style={{ color: "gray", letterSpacing: '2px', textAlign: 'center', padding: '15px' }}>Ten dollars is the monthly payment, and I hope you can make it to the provider and pay ten dollars.</Typography>
        //     </div>
        //     <Typography variant="body1" style={{ color: "gray", letterSpacing: '2px', textAlign: 'center', padding: '15px' }}>You can pay me with any online services, and you can reach me at 9810024561.</Typography>
        //     <Typography variant="body1" style={{
        //         letterSpacing: '2px', margin: '10px auto', padding: '15px', color: "gray",
        //         fontWeight: 'bold'
        //     }}>Thank you</Typography>
        // </div>
    )
};

export default Welcome;
