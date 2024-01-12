import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../sass/home.scss'
import { BasketContext } from '../context/BasketContext'
import { WishlistContext } from '../context/WishlistContext'

const Home = () => {

    const [data, setData] = useState([])
    const [input, setInput] = useState('')
    const { addBasket } = useContext(BasketContext)
    const { handleToggle, checkWishlist } = useContext(WishlistContext)
    const [sort, setSort] = useState(null)


    useEffect(() => {
        fetch("http://localhost:7000/")
            .then((res) => res.json())
            .then((api) => setData(api))

    }, [])

    function handleInput(e) {
        setInput(e.target.value)

    }

    function lower(data) {
        if (typeof data === 'string') {
            return data.toLowerCase()
        }
        return data

    }
    return (
        <div className='home'>

            <div className="three">
                <h1>Our Services</h1>
                <input type="text" value={input} onChange={()=>handleInput()} placeholder='Search Name' />
                <button onClick={() => setSort({ property: 'price', asc: true })}>Azalan</button>
                <button onClick={() => setSort({ property: 'price', asc: false })}>Artan</button>
                <button onClick={() => setSort(null)}>Default</button>

                <div className="cards">
                    {data
                        // .filter((item) => item.name.includes(input))
                        .sort((a, b) => {
                            if (sort && sort.asc === true) {
                                return lower(a[sort.property] > lower(b[sort.property])) ? 1 : lower(b[sort.property] > lower(a[sort.property]) ? -1 : 0)

                            } else if (sort && sort.asc === false) {
                                return lower(a[sort.property] < lower(b[sort.property])) ? 1 : lower(b[sort.property] < lower(a[sort.property]) ? -1 : 0)

                            } else {
                                return 0
                            }
                        })

                        .map((item) => (
                            <div className="card" key={item._id}>
                                <div className='heart' onClick={() => handleToggle(item)}><i className={`${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}></i></div>
                                <Link to={`${item._id}`}> <div className='eye'><i className="fa-solid fa-eye"></i></div></Link>
                                <i className={`icon ${item.icon}`}></i>
                                <h3>{item.name}</h3>
                                <p>{item.category}</p>
                                <h4>{item.price}</h4>
                                <Link to={`/${item._id}`}>Learn More ...</Link>
                                <button onClick={() => addBasket(item)}>Add To Cart</button>


                            </div>
                        ))}
                </div>

            </div>

        </div>
    )
}

export default Home