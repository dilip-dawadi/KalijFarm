import React from 'react'

const clientKalij = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <> 
        {user?.result.role ? (
         <> Welcome <br />
          Admin<span style={{color: "#5AFF3D"}}> Sir</span></>
        ) : (
            <> Rhino Spot Resort And  <br />
            <span style={{color: "#5AFF3D"}}>The Game Farm- Kalij Farm.</span></>
        )}
            
          
        </>
    )
}

export default clientKalij
