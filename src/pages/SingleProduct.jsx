import React from 'react'
import '../css/ProductPage.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '@mui/material'
const SingleProduct = () => {
  return (
    <>
        <Navbar />
        <div className="single-product-container">
            <div className="product-img">
                <img src="Images/slide1.png" alt="" />
            </div>
            <div className="info-container">
                <div className="product-title">
                    Ipsum dolor
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolor commodi quam quis porro architecto nobis, odit laboriosam 
                    distinctio doloribus enim repellendus 
                    expedita rem dolorum sint cumque culpa laborum deserunt ex.
                </div>
                <div className="product-prize">
                    $ 60
                </div>
                <div className="product-color">
                    <p>Color : </p> 
                    <div style={{backgroundColor:"red"}}></div>
                    <div style={{backgroundColor:"yellow"}}></div>
                    <div style={{backgroundColor:"blue"}}></div>
                    <div style={{backgroundColor:"green"}}></div>
                </div>

                <div className="product-size">
                    <p>Size : </p> 
                    <div>XS</div>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>

                <div className="product-amount">
                    <div className="product-number">
                        <div>-</div>
                        <div className='no-item'>6</div>
                        <div>+</div>
                        <Button variant="contained">Add Cart</Button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default SingleProduct