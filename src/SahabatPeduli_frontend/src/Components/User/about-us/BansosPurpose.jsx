import React from 'react'
import '../../../assets/styles/user/about-us/BansosPurpose.css'
import purpose from '../../../assets/images/purpose.png'

function BansosPurpose() {
  return (
    <section className='bansos-purpose-section'>
        <div className='bansos-purpose-heading'>
            <h5>WHAT IS THE USE OF SAHABAT PEDULI?</h5>
            <div className="d-flex justify-content-center">
            <h1>Utility of <span className='highlight-text-1'>Sahabat</span><span className='highlight-text-2'>Peduli</span></h1>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <div className='bansos-purpose-content'>
                <p>With “SahabatPeduli”, transparency in the distribution of aid funds can be realized, ensuring that the funds really reach those entitled, while minimizing the risk of misuse. This will support public trust in social assistance programs.</p>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <div className='bansos-purpose-image'>
                <img src={purpose} alt="" />
            </div>
        </div>
        
    </section>
  )
}

export default BansosPurpose
