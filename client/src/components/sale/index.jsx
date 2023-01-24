import React from 'react'
import sale from "../../img/parallax-bg.png"
import "./index.scss"

const Sale = () => {
  return (
    <div id='Sala'>
        <img src={sale} alt="" />
        <div className="saletxt">
          <h3 className='upTo'>Up To 50% Off</h3>
          <p className='winterTxt'>Winter Sale</p>
          <p className='salesectiontxt'>Him she'd let them sixth saw light</p>
          <button className='shopBtnNow'> Shop Now </button>
        </div>
    </div>
  )
}

export default Sale