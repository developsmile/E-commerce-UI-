import React from 'react'
import { ProductData } from '../data/Categories'
import ProductItem from './ProductItem'
import '../css/Categories.css';

const Product = () => {
  console.log(ProductData);
  return (
    <>
      <div className="product-container">
        {
          ProductData.map((item,index)=>{
            return(
              <ProductItem  item={item}/>
            )
          })
        }
      </div>
    </>
  )
}

export default Product