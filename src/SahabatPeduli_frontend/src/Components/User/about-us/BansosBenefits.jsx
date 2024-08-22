import React from 'react'
import '../../../assets/styles/user/about-us/BansosBenefits.css'
import realtime from '../../../assets/images/realtime.png'
import transparansi from '../../../assets/images/transparansi.png'
import access from '../../../assets/images/access.png'

function BansosBenefits() {
  return (
    <section className='bansos-section'>
        <div className='bansos-benefits-heading'>
            <h4>Why SahabatPeduli?</h4>
            <h1>Advantages of <span className='highlight-text-1'>Sahabat</span><span className='highlight-text-2'>Peduli</span></h1>
        </div>
        <div className='bansos-benefits-category'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='bansos-benefits-card-1'>
                <div className='d-flex justify-content-center'>
                  <div className='bansos-benefits-image-1'>
                    <img src={realtime} alt="" />
                  </div>
                </div>
                <h4>Real-Time</h4>
                <p>The public can monitor the movement of social assistance funds in real-time, from the central government to the final recipient, namely the community.</p>
              </div>
            </div>
            
            <div className='col-lg-4'>
              <div className='bansos-benefits-card-2'>
                <div className='d-flex justify-content-center'>
                  <div className='bansos-benefits-image-2'>
                    <img src={transparansi} alt="" />
                  </div>
                </div>
                <h4>Transparency</h4>
                <p>All transactions are recorded transparently on the blockchain and cannot be changed, so the public can monitor the distribution of funds safely.</p>
              </div>
            </div>
            
            <div className='col-lg-4'>
              <div className='bansos-benefits-card-2'>
                <div className='d-flex justify-content-center'>
                  <div className='bansos-benefits-image-3'>
                    <img src={access} alt="" />
                  </div>
                </div>
                <h4>Easy to access</h4>
                <p>SahabatPeduli is easily accessible to all people through any device with a user-friendly interface.</p>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default BansosBenefits
