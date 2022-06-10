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


//styles
import "./navbar.css"
import { Badge } from '@mui/material';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';

export default function Navbar() {
  const [{basket, user}, dispatch] = useStateValue();
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
    <Box className='box'  sx={{ flexGrow: 1 }}>
      <AppBar className='app-bar' color='inherit' position="fixed">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              // color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} width="100px" className='logo' />
            </IconButton>
          </Link>
          
          <Typography className='helloGuest' variant="h6"  color="textPrimary" sx={{ flexGrow: 1 }}>
           Hello {user ? user.email : "Guest"}
          </Typography>
          <Link to="/signin">
            <Button className='boton' variant='outlined' onClick={handleAuth}><strong>{user ? "Sign Out" : "Sign In"}</strong>
            </Button>
          </Link>
          
          <Link to="checkout-page">
            <IconButton aria-label="show cart items" color='inherit' >
              <Badge badgeContent={basket?.length} color="secondary">
                <AddShoppingCartIcon fontSize='large' color="primary" />
              </Badge>
            </IconButton>
          </Link>
          


        </Toolbar>
      </AppBar>
    </Box>
  );
}
