import React, { useEffect } from 'react'
import { Card } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import "./index.scss"
import { Link } from "react-router-dom";
const { Meta } = Card;

const Cards = () => {
    const [products, setProgucts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/`).then((data) => setProgucts(data.data))
    }, [])
    

    const handleSearch = (value) => {
      axios.get(`http://localhost:8080/`).then((data) => {
        let search = data.data.filter((products) => products.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        setProgucts(search)
      })
    }

    const handleSort = () => {
      let sort = products.sort((a, b) => a.price > b.price ? 1:-1 )
      setProgucts([...sort])
    }
    const handleUnSort = () => {
      let sort = products.sort((a, b) => b.price > a.price ? 1:-1 )
      setProgucts([...sort])
    }

  return (
    <div id="cards">
      <button onClick={() => handleUnSort()} className="sortBtn"> High price </button>
      <button onClick={() => handleSort()} className="sortBtn"> Low price </button>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} className="search" placeholder='Search here'/>
    <div className="container">
    <div className='Cards'>
        {products.map((product) => {
          return(
            <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={product.img} />}>
              <Link to={`/details/${product._id}`}>
              <div className="title">
            <Meta title={product.name} description={`$${product.price}`} />
              </div>
              </Link>
          </Card>
            )
        })}
    </div>
    </div>
    </div>
    
  )
}

export default Cards