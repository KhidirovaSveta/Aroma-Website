import React from 'react'
import "./index.scss"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id='Footer'>
        <p className='Copyright'>Copyright ⓒ  2023 All rights reserved | This template is made with  by <Link hrefLang="https://colorlib.com/">Colorlib</Link> </p>
    </div>
  )
}

export default Footer