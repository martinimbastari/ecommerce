import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/e-commerce-logo.png"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


//styles
import "./navbar.css"
import { Badge } from '@mui/material';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';

export default function Navbar() {
  const [{basket, user}, dispatch] = useStateValue();
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const handleAuth = () => {
    if(user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      navigate("/")
    }
  }


  return (
    <Box  m={20} sx={{ flexGrow: 1 }}>
      <AppBar className='app-bar' color='inherit' position="fixed">
        <Toolbar className='tool-bar'>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              // color="inherit"
              aria-label="menu"
              sx={{ mr:2 }}
            >
              <img src={logo} width="100px" className='logo' />
            </IconButton>
          </Link>
          
          <Typography className='helloGuest' variant="h6"  color="textPrimary" sx={{ flexGrow: 1 }}>
           Hello {user ? user.email : "Guest"}
          </Typography>
          <Link className='loginBoton' to="/signin">
            <Button className='boton' variant='outlined' onClick={handleAuth}><strong>{user ? "Sign Out" : "Sign In"}</strong>
            </Button>
          </Link>
          
          <Link className='cartBoton' to="checkout-page">
            <IconButton aria-label="show cart items" color='inherit' >
              <Badge badgeContent={basket?.length} color="secondary">
                <AddShoppingCartIcon fontSize='large' color="primary" />
              </Badge>
            </IconButton>
          </Link>

          <div className='app__navbar-smallscreen'>
          <IconButton edge="center" onClick={() => setToggleMenu(true)}>
            <MenuIcon id='menuIcon' fontSize='large' />
          </IconButton>
          {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay'>

            <CloseIcon className='closeIcon' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
            <Typography className='helloGuestSmallscreen' variant="h6"  mb="20px"  sx={{ flexGrow: 1 }}>
           Hello {user ? user.email : "Guest"}
          </Typography>
            <Link className='cartBotonSmallscreen' to="checkout-page">
            <IconButton   aria-label="show cart items" color='inherit' >
              <Badge badgeContent={basket?.length} color="secondary">
                <AddShoppingCartIcon  fontSize='large' color="primary" />
              </Badge>
            </IconButton>
          </Link>
          <Link className='loginBotonSmallscreen' to="/signin">
            <Button className='boton'  variant='outlined'  onClick={handleAuth}><strong>{user ? "Sign Out" : "Sign In"}</strong>
            </Button>
          </Link>
            </ul>
            

            </div>
            
          
        
          )}
          </div>
          


        </Toolbar>
      </AppBar>
    </Box>
  );
}
