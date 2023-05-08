import React from 'react'
import {BsFillCartFill} from "react-icons/bs";


function NavBar() {
  return (
    <div className='navBar'>
      <a>Shop</a>
    <div className='cart-items'>
    <BsFillCartFill className ="icon-cart"/>
    <p className='cart-num'>0</p>
    </div>
    </div>
  )
}

export default NavBar
