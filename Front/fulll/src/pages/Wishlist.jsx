import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'

const Wishlist = () => {
  const {wishlist} = useContext(WishlistContext)
  return (
    <div className='wishlist'>
      <div className="cards">
        {wishlist.map(item=>(
          <div className="card">
            <i className={item.icon}></i>
            <h2>{item.name}</h2>
            <h3>{item.category}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist