import React from 'react'
import {BsFillCartFill} from "react-icons/bs";
import { Link } from 'react-router-dom';


function NavBar({cartNum}) {
  return (
    <div className='navBar'>
      <Link to='/'>Shop</Link>
    <Link to='/cart' className='cart-items'>
    <BsFillCartFill className ="icon-cart"/>
    <p className='cart-num'>{cartNum}</p>
    </Link>
    </div>
  )
}

export default NavBar
