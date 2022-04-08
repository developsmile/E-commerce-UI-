import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react'
import '../css/Categories.css';
const ProductItem = ({item}) => {
  console.log(item);
  return (
    <>
      <div className="product-item-card"> 
            <img src={item.img} alt="" className='product-img' />
            <div className="product-info">
              <div className="icon">
                <ShoppingCartOutlinedIcon color="white" />
              </div>
              <div className="icon">
                <FavoriteBorderOutlinedIcon />
              </div>
            </div>
            <div className="prize">
                $ 300.00
            </div>
        </div>
    </>
  )
}

export default ProductItem