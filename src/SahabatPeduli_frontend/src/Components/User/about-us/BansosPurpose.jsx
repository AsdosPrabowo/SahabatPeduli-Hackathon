import React from 'react'
import '../../../assets/styles/user/about-us/BansosPurpose.css'
import purpose from '../../../assets/images/purpose.png'

function BansosPurpose() {
  return (
    <section className='bansos-purpose-section'>
        <div className='bansos-purpose-heading'>
            <h5>APA KEGUNAAN SAHABAT PEDULI</h5>
            <div className="d-flex justify-content-center">
            <h1>Kegunaan <span className='highlight-text-1'>Sahabat</span><span className='highlight-text-2'>Peduli</span></h1>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <div className='bansos-purpose-content'>
                <p>Dengan “SahabatPeduli”, transparansi penyaluran dana bantuan dapat terwujud sehingga memastikan bahwa dana tersebut benar-benar sampai kepada yang berhak, sekaligus meminimalkan risiko penyalahgunaan. Hal ini akan mendukung kepercayaan publik terhadap program bantuan sosial.</p>
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
