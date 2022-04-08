import React from 'react'

const BrandItem = ({item}) => {
  return (
    <div className="brand-card">
            <img src={item.img} alt="" className='brand-img' />
            <div className="info-card">
                <div className="title">
                    {item.discount}
                </div>
            </div>
        </div>
  )
}

export default BrandItem