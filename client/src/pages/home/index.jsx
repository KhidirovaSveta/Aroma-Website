import React from 'react'
import Cards from '../../components/cards'
import Carousel from '../../components/carousel'
import Sale from '../../components/sale'
import banner from "../../img/hero-banner.webp"
import Blog1 from "../../img/blog1.png.webp"
import Blog2 from "../../img/blog2.png.webp"
import Blog3 from "../../img/blog3.png.webp"
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet'

import "./index.scss"
const Home = () => {
  return (
    <div id='Home'>
      <Helmet>
      <title>Home</title>
      <meta name="description" content="Your description" />
     </Helmet>
        <div className="container">
            <div className="home">
                <div className="purple-section">
                  <div className="purple"></div>
                  <img src={banner} alt="" className='imgbanner'/> 
                 <div className="hometxt">
                  <span className='shop'>Shop is fun</span>
                  <h1 className='headermaintxt'>BROWSE OUR <br/> PREMIUM PRODUCT</h1>
                  <p className='descHead'>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. 
                    Their male dry. 
                    They are great appear whose land fly grass.</p>
                    <button className='browseNowBtn'> Browse Now</button>
                 </div>
                  </div>


                <div className="second-section">
                  <p className='popular'>Popular Item in the market</p>
                  <h2 className='trendHeader'>Trending Product</h2>
               <Cards/>
               </div>


            </div>
        </div>
               <div className="section-third">
                <Sale/>
               </div>

               <div className="container">

                <div className="carouse-section">
                  <p className='popular'>Popular Item in the market</p>
                  <h2 className='bestSelHead'>Best Sellers</h2>
                  <Carousel/>
                </div>

                <div className="latestNews-section">
                  <p>Popular Item in the market</p>
                  <h2 className='Latest'>Latest News</h2>


                <div className="cards">
                  <div className="card">
                    <img src={Blog1} alt="" />
                    <div className="title">
                      <p>By admin</p>
                      <p>2 Commint</p>
                    </div>
                    <h2 className='lastTitle'>The Richland Center Shooping News and weekly shooper</h2>
                    <p className='parag'>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                    <Link> Read More <i className="fa-solid fa-arrow-right"></i> </Link>
                  </div>

                  <div className="card">
                    <img src={Blog2} alt="" />
                    <div className="title">
                      <p>By admin</p>
                      <p>2 Commint</p>
                    </div>
                    <h2 className='lastTitle'>The Shopping News also offers top-quality printing services</h2>
                    <p className='parag'>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                    <Link> Read More <i className="fa-solid fa-arrow-right"></i> </Link>
                  </div>


                  <div className="card">
                    <img src={Blog3} alt="" />
                    <div className="title">
                      <p>By admin</p>
                      <p>2 Commint</p>
                    </div>
                    <h2 className='lastTitle'>Professional design staff and efficient equipment you’ll find we offer</h2>
                    <p className='parag'>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                    <Link> Read More <i className="fa-solid fa-arrow-right"></i> </Link>
                  </div>
                  </div>

                </div>
               </div>
    </div>
  )
}

export default Home