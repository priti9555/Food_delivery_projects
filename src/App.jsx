import React, { useState } from 'react'
import Navbar from './component/Navber'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/cart'
import PlaceOrder from './pages/placeorder'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/Loginpopup/Loginpopup'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
