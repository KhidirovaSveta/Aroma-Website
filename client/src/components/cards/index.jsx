import React, { useEffect } from 'react'
import { Card } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import "./index.scss"
import { Link } from "react-router-dom";
const { Meta } = Card;

const Cards = ({wishlist, setWishlist}) => {
    const [products, setProgucts] = useState([])
    const [toggle, setToggle] = useState(true)
    useEffect(() => {
        axios.get(`http://localhost:8080/`).then((data) => setProgucts(data.data))
    }, [])
    

    const handleSearch = (value) => {
      axios.get(`http://localhost:8080/`).then((data) => {
        let search = data.data.filter((products) => products.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        setProgucts(search)
      })
    }

    // const handleSort = () => {
    //   let sort = products.sort((a, b) => a.price > b.price ? 1:-1 )
    //   setProgucts([...sort])
    // }
    // const handleUnSort = () => {
    //   let sort = products.sort((a, b) => b.price > a.price ? 1:-1 )
    //   setProgucts([...sort])
    // }

     const handleDelete = (_id) => {
      axios.delete(`http://localhost:8080/${_id}`).then((data) => axios.get(`http://localhost:8080/`).then((data) => setProgucts(data.data))
      )
     }
     
    const handleSort = () => {
      setToggle(!toggle) 
      if(toggle){
        let searchByPrice = products.sort((a, b) => a.price - b.price)
        setProgucts([...searchByPrice])
      }else{
        axios.get(`http://localhost:8080/`).then((data) => setProgucts(data.data))
      }
    }

    const handleAddWishlist = (el) => {
      if(!wishlist.find((w) => w._id === el._id)) {
        setWishlist([...wishlist, el])
      } else{
        axios.get(`http://localhost:8080/`).then((data) => setProgucts(data.data))
      }
    }

  return (
    <div id="cards">
      <button onClick={() => handleSort()} className="sortBtn"> High price </button>
      {/* <button onClick={() => handleSort()} className="sortBtn"> Low price </button> */}
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
              <button onClick={() => handleDelete(product._id)} className="trash"><i className="fa-solid fa-trash"></i></button>
              <button onClick={() => handleAddWishlist(product)} className="wishBtn"> {wishlist.find((wish) => wish._id === product._id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</button>
          </Card>
            )
        })}
    </div>
    </div>
    </div>
    
  )
}

export default Cards