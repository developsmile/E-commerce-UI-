import React from 'react'
import Navbar from '../components/Navbar'
import '../css/Home.css'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Brand from '../components/Brand'
import Product from '../components/Product'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
        <Navbar />
        <Slider />
        <Brand />
        <Categories />
        <Product />
        <Footer />
        
    </>
  )
}

export default Home