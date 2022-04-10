import React from 'react'
import '../css/ProductPage.css'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
const ProductPage = () => {
  return (
    <>
        <Navbar />
        <div className="title">
            Dresses
        </div>
        <div className="filter-container">
            <div className="product-filter">
                <div className="fliter-text">
                    Filter Products :
                    <select>
                        <option disabled selected>Color</option>
                        <option>Red</option>
                        <option>Yellow</option>
                        <option>Green</option>
                        <option>Black</option>
                        <option>White</option>
                    </select>
                    <select>
                        <option disabled selected>Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
            </div>
            <div className="product-filter">
                <div className="fliter-text">
                    Sort Products :
                    <select>
                        <option selected>Newest</option>
                        <option>Prize - asc</option>
                        <option>Prize - desc</option>
                        
                    </select>
                </div>
            </div>
        </div>
        <Product />
    </>
  )
}

export default ProductPage