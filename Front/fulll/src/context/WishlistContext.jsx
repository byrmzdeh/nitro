import { createContext, useState } from "react";

export const WishlistContext = createContext()

function WishlistProvider({children}) {
    const [wishlist,setWishlist] = useState([])
    function handleToggle(item) {
        const index = wishlist.findIndex((x) => x._id === item._id)
        if (index===-1) {
            setWishlist([...wishlist , item])
            
        }else{
            setWishlist(wishlist.filter((x)=>x._id!==item._id))
        }   
    }

    function checkWishlist(item) {
        const index = wishlist.findIndex((x) => x._id === item._id)
        if (index!==-1) {
            return true
        }else{
           return false
        }   
    }

    const data= {handleToggle , checkWishlist, wishlist}
    return(
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
    
}
export default WishlistProvider