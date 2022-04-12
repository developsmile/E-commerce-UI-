import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react'
import '../css/Categories.css';
import { Link } from 'react-router-dom';
const ProductItem = ({item}) => {
  console.log(item);
  return (
    <>
      <div className="product-item-card"> 
            <Link to="/uniqueproduct"><img src={item.img} alt="" className='product-img' /></Link>
            <div className="product-info">
              <div className="icon">
                <ShoppingCartOutlinedIcon color="white" />
              </div>
              <div className="icon">
                <FavoriteBorderOutlinedIcon />
              </div>
            </div>
            <div className="prize">
                {item.prize}
            </div>
        </div>
    </>
  )
}

export default ProductItem