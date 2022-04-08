import React from 'react'
import '../css/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
            <h3>E-Shop</h3>
        </div>
        <div className="right">
            <div className="signin"> <a href="/">Sign In</a> </div>
            <div className="signup"> <a href="/">Sign Up</a> </div>
            <div className="cart">
                <Badge badgeContent={7} color="primary">
                    <ShoppingCartOutlinedIcon color="white" />
                </Badge>
            </div>
        </div>
    </div>
  )
}

export default Navbar