import React from 'react'
import { Brandata } from '../data/Categories'
import BrandItem from './BrandItem'
const Brand = () => {
  return (
    <>
        <div className="heading-brand">
            TRENDING BRANDS
            <div className="main-horizontal">
                <hr className="horizontal"/>
                <hr className="horizontal"/>
                <hr className="horizontal"/>

            </div>
        </div>
        <div className="brand-container">
            {
                Brandata.map((item,index)=>{
                    return(
                        <BrandItem item={item}/>
                    )
                })
            }
        </div>
    
    </>
  )
}

export default Brand