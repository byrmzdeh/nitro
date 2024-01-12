import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import '../sass/basket.scss'

const Basket = () => {
    const { basket, increase, decrease, remove } = useContext(BasketContext)

    return (
        <div className='basket'>

            <table border={1}>
                <tr>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Delete</th>
                </tr>
                {basket.map(item => (
                    <tr>
                        <td><i className={item.icon}></i></td>
                        <td>{item.name}</td>
                        <td>{item.price * item.count}</td>
                        <td>
                            <div className="buttons">
                                <button className='minus' onClick={() => decrease(item)}>-</button>
                                <h2>{item.count}</h2>
                                <button className='plus' onClick={() => increase(item)}>+</button>
                            </div>
                        </td>
                        <td onClick={() => remove(item)}> <button className='remove'>X</button> </td>
                    </tr>
                ))}
            </table>


        </div>
    )
}

export default Basket