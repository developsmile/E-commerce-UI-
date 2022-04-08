import React from 'react'
import '../css/Categories.css';
import CategorieItem from './CategorieItem';
import {Data} from '../data/Categories';
const Categories = () => {
  return (
    <>
        <div className="heading-categories">
            SHOP BY CATEGORIES
        </div>
        <div className="categories-container">
        {
            Data.map((item,index)=>{
                return(
                    <CategorieItem  item={item}/>
                )
            })
        }
        </div>
        
    </>
  )
}

export default Categories