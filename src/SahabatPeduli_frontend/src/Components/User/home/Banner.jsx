import React, { useEffect, useState } from 'react'

import '../../../assets/styles/user/home/Banner.css'
import phone from '../../../assets/images/phone.png'
function Banner() {
 

 
  
  return (
    <section className='banner-section'>
      <div className="row">
        <div className="col-lg-7">
          <div className='banner-content'>
            <h5>APA ITU SAHABAT PEDULI?</h5>
            <h1>Kenalan dengan <span className='highlight-text-1'>Sahabat</span><span className='highlight-text-2'>Peduli</span></h1>
            <p>SahabatPeduli adalah website untuk mendata bantuan sosial yang diberikan oleh Kementrian Sosial Republik Indonesia. Blabalbalbalblablab</p>
            <button className='read-again '>Baca lagi</button>
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
