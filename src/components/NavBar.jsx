import React from 'react'
import {BsFillCartFill} from "react-icons/bs";


function NavBar({cartNum}) {
  return (
    <div className='navBar'>
      <a>Shop</a>
    <div className='cart-items'>
    <BsFillCartFill className ="icon-cart"/>
    <p className='cart-num'>{cartNum}</p>
    </div>
    </div>
  )
}

export default NavBar
