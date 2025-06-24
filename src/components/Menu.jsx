
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import {
  Button,
  Paper,
  Typography,
  Divider,
  Box,
  ClickAwayListener,
} from '@mui/material';
import {  useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Menu = () => {

  const [username, setUsername] = useState("DEMOUSER");
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  const Logout = () => {
    removeCookie("token");
     localStorage.removeItem("username");
    navigate("/login");
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

   const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    Logout();
    setOpen(false);
  };



  return (
    <div className="menu-container">
      <img src="/media/logo.png" style={{ width: "50px" }} />
      <div className="menus ">
        <ul className="mt-4">
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }}>
              <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{ textDecoration: "none" }}>
              <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" style={{ textDecoration: "none" }}>
              <p>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" style={{ textDecoration: "none" }}>
              <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">{username[0]}</div>
         
     <span>
       <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Button onClick={handleToggle} sx={{ color: 'black', textTransform: 'none' }}>
        <p className="username mt-3"> {username && (
            <span style={{ margin: 0 }}>
              <strong>{username}</strong>
            </span>
          )}</p>
      </Button>

      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            elevation={4}
            sx={{
              position: 'absolute',
              right: 0,
              mt: 1,
              width: 250,
              zIndex: 10,
              p: 1,
            }}
          >
            <Box px={2} py={1}>
              <Typography fontWeight="bold">{username}</Typography>
              <Typography variant="body2" color="text.secondary">
                {username}@zerodha.com
              </Typography>
            </Box>
          
           
              <Box
              onClick={handleClose}
              sx={{
                px: 2,
                py: 1,
                cursor: 'pointer',
                color: '#0d6efd;',
                '&:hover': { backgroundColor: '#ffecec' },
              }}
            >
              <Link to={"/login"} style={{textDecoration:"none"}}>Login</Link>
            </Box>
            <Box
              onClick={handleClose}
              sx={{
                px: 2,
                py: 1,
                cursor: 'pointer',
                color: 'red',
                '&:hover': { backgroundColor: '#ffecec' },
              }}
            >
           <span >Logout</span>
            </Box>
            
           
          </Paper>
        </ClickAwayListener>
      )}
    </Box>
     </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
