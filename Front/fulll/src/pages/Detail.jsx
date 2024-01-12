import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()
    const [detail,setDetail] = useState([])
    fetch("http://localhost:7000/")
    .then((res)=>res.json())
    .then((api)=>{
        const itemDetail = api.find((x)=>x._id===id)
        setDetail(itemDetail)
    })
  return (
    <div className='detail'>
        <i className={detail.icon}></i>
        <div>
            <h2>{detail.name}</h2>
            <h3>{detail.price}</h3>
            <h3>{detail.category}</h3>
        </div>
    </div>
  )
}

export default Detail