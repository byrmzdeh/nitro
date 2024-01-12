import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/add'}>Add</NavLink></li>
            <li><NavLink to={'/basket'}>Basket</NavLink></li>
            <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
        </ul>
    </div>
  )
}

export default Header