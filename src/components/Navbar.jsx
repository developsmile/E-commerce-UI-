import React from 'react'
import '../css/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="left">
            <h3 className='language'>EN</h3>
            <div className="search-container">
                <input type="text" className='search-input' />
                <SearchIcon />
            </div>
            
        </div>
        <div className="center">
            <Link to="/"><h3>E-Shop</h3></Link>
        </div>
        <div className="right">
            <div className="signin"> <Link to="/login">Sign In</Link> </div>
            <div className="signup"> <Link to="/register">Sign Up</Link> </div>
            <div className="cart">
                <Badge badgeContent={7} color="primary">
                    <Link to="/cart"><ShoppingCartOutlinedIcon color="white" /></Link>
                </Badge>
            </div>
        </div>
    </div>
  )
}

export default Navbar