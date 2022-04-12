import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import Register from './pages/Register'
import SingleProduct from './pages/SingleProduct'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/productpage' element={<ProductPage />} />
      <Route path='uniqueproduct' element={<SingleProduct />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    
  )
}

export default App
