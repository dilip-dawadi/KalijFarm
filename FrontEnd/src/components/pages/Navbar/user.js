import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function SimpleMenu() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate('/auth');
    setUser(null);
  };
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}
      </Avatar>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Hy,&nbsp;{user?.result.name.slice(0, 6)}</MenuItem>
        <MenuItem className='logout' color="secondary" onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}