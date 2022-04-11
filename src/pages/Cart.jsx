import React from 'react'
import '../css/Cart.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '@mui/material'
import { Favorite } from '@mui/icons-material'
import { Data } from '../data/Categories'
import CloseIcon from '@mui/icons-material/Close';
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart-title">
        My Shopping Cart
      </div>
      <div className="cart-container">
          <div className="cart-header">
            <Button variant="outlined" className='cart-button'>continue shopping</Button>
            <Button variant="contained" className='checkout-button'>checkout Now</Button>
          </div>
          <div className="cart-box-desc">
            <div className="item-boxes">
              {
                Data.map((item,index)=>{
                  return(
                    <>
                    <div className="cart-item-box">
                      <img src="Images/slide1.png" alt="" />
                      <div className="desc">
                      <h4>Item  Name</h4>
                      <p style={{fontSize:12,marginTop:3}}> Product Id : 151175444</p>
                      <p style={{fontSize:25,marginTop:10}}><b>$ 3.54</b></p>
                      <p style={{fontSize:12 ,marginTop:10}}>Size : M</p>
                      <span><Favorite style={{fontSize:15 ,marginTop:10}} /></span> <span style={{fontSize:12}}> Save</span>  <u style={{fontSize:12}}>Edit</u>
                      </div>
                      <CloseIcon className='remove-icon' />
                    </div>
                    </>
                  )
                })
              }
            </div>
            
              
              <div className="cart-checkout-box">
                <h3>ORDER SUMMARY</h3>
                <ul>
                  <li>Shopping cart </li>
                  <li> $ 50 </li>
                </ul>
                <ul>
                  <li>Discount </li>
                  <li> - $ 5 </li>
                </ul>
                <ul style={{fontFamily:"bold"}}>
                  <li>Estimated total </li>
                  <li> $ 45 </li>
                </ul>
                

              </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart