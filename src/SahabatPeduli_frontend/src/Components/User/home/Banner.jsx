import React, { useEffect, useState } from 'react'

import '../../../assets/styles/user/home/Banner.css'
import phone from '../../../assets/images/phone.png'
function Banner() {
 

 
  
  return (
    <section className='banner-section'>
      <div className="row">
        <div className="col-lg-7">
          <div className='banner-content'>
            <h5>WHAT IS SAHABAT PEDULI</h5>
            <h1>Get to know <span className='highlight-text-1'>Sahabat</span><span className='highlight-text-2'>Peduli</span></h1>
            <p>SahabatPeduli is an innovative solution based on ICP blockchain technology designed to ensure transparency and accountability in the distribution of social aid funds.</p>
            <button className='read-again '>Read more</button>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="d-flex justify-content-end">

          <img src={phone} className='banner-image' alt="" />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Banner
