import React, { useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SlidesData from '../data/Slide';
import { Button } from '@mui/material';
import '../css/Slider.css';


const Slider = ()=>{
  const [current,setCurrent] = useState(0);
  const len = SlidesData.length;
  const nextSlide = ()=>{
    setCurrent(current ===len-1 ? 0 : current+1);
  }
  const prevSlide = ()=>{
    setCurrent(current <=0 ? len-1: current-1);
  }
  console.log(current);
  if(!Array.isArray(SlidesData) || len<=0){
    return null;
  }
  console.log(len);
  return(
    <>
      <div className="slide-container">
        {
          SlidesData.map((item,index)=>{
            return(
          <div key={index} className= 'slide-page slide'>
            {
                current === index &&<>
                <div className="left-arrow arrow" onClick={prevSlide}><ChevronLeftIcon /></div>
                <div className="slide-img">
                  <img src={item.src} alt="Images/slide1.png" />
                </div>
                <div className="slide-info">
                  <div className="info-title">{item.title}</div>
                  <div className="info-desc">DON'T COMPROMISE ON STYLE ! GET FLAT 30% OFF FOR NEW ARRIVALS</div>
                  <div className="info-button">
                    <Button variant="outlined">SHOW NOW</Button>
                  </div>
                </div>
                <div className="right-arrow arrow" onClick={nextSlide}><ChevronRightIcon /></div>
                </>
            }
            
            
          </div>
            )
          })
        }
      </div>
    </>
  )
}
export default Slider;