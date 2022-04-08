import { Button } from '@mui/material';
import React from 'react'
import '../css/Categories.css';
const CategorieItem = ({item}) => {
  return (
    <>
        <div className="item-card">
            <img src={item.img} alt="Images/slide1.png" />
            <div className="info-card">
                <div className="title">
                    {item.title}
                </div>
                <Button variant="outlined" className='crad-button'>SHOP NOW</Button>
            </div>
        </div>
    </>
  )
}

export default CategorieItem