import React from 'react'

const clientKalij = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <>
            {user?.result.role ? (
                <> Welcome <br />
                    Admin<span style={{ color: "gray" }}> Sir</span></>
            ) : (
                <> <span style={{ color: "gray" }}>Rhino Spot Resort And</span>  <br />
                    <span style={{ color: "#4abdac" }}>The Game Farm- Kalij Farm.</span></>
            )}


        </>
    )
}

export default clientKalij
