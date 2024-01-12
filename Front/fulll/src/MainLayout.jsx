import React from 'react'
import BasketProvider from './context/BasketContext'
import WishlistProvider from './context/WishlistContext'

const MainLayout = ({children}) => {
  return (
    <BasketProvider>
       <WishlistProvider>
       {children}
       </WishlistProvider>
    </BasketProvider>
  )
}

export default MainLayout