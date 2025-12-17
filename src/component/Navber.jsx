import React,{ useContext, useState} from 'react'
import './Navber.css'
import {assets} from '../assets/frontend_assets/assets.js'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext.jsx'

const Navbar = ({setShowLogin}) => { 

    const [menu, setMenu] = useState("menu");

    const {getTotalCartAmount} =useContext(StoreContext);

  return (
    <div className="navbar">
        <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="nav-menu">
            <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
            <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
            </ul>
            <div className="nav-right">
                <img src={assets.search_icon} alt="" />
                <div className="nav-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
              </div>
              <button id="btn" onClick={()=>setShowLogin(true)}>sing in</button>
            </div>
          </div>
  )
}

export default Navbar
