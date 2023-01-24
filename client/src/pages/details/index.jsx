import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import "./index.scss"
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {Helmet} from 'react-helmet'

const Detail = () => {
    const [detail, setDetail] = useState([])
    const {_id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/${_id}`).then((data) => setDetail(data.data))
    }, [])

    const handleDelete = () => {
     axios.delete(`http://localhost:8080/${_id}`).then((data) => {
      axios.get(`http://localhost:8080/${_id}`).then((data) => setDetail(data.data))
      navigate("/")
     })
    }
    
  return (
    <div className='container'>
      <Helmet>
      <title>Detail</title>
      <meta name="description" content="Your description" />
     </Helmet>

      <button onClick={() => navigate(-1)} className="goBackHome"> Back </button>
      <div className="ditails">
        <img src={detail.img} alt="" />
        <div className="details-info">
        <h1>{detail.name}</h1>
        <p>{detail.price}</p>
        <button onClick={() => handleDelete(detail)} className="deleteBtn"> Delete </button>
        </div>
      </div>
    </div>
  )
}

export default Detail