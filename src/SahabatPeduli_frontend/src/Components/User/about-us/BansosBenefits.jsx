import React from 'react'
import '../../../assets/styles/user/about-us/BansosBenefits.css'
import realtime from '../../../assets/images/realtime.png'
import transparansi from '../../../assets/images/transparansi.png'
import access from '../../../assets/images/access.png'

function BansosBenefits() {
  return (
    <section className='bansos-section'>
        <div className='bansos-benefits-heading'>
            <h4>KENAPA SAHABAT PEDULI?</h4>
            <h1>Kelebihan dari <span className='highlight-text-1'>Sahabat</span><span className='highlight-text-2'>Peduli</span></h1>
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
                <p>Masyarakat dapat memantau pergerakan dana bantuan sosial secara real-time. dari pemerintah pusat hingga penerima akhir yaitu masyarakat.</p>
              </div>
            </div>
            
            <div className='col-lg-4'>
              <div className='bansos-benefits-card-2'>
                <div className='d-flex justify-content-center'>
                  <div className='bansos-benefits-image-2'>
                    <img src={transparansi} alt="" />
                  </div>
                </div>
                <h4>Transparansi</h4>
                <p>Semua transaksi dicatat secara transparan di blockchain dan tidak dapat diubah, sehingga publik dapat memantau distribusi dana dengan aman.</p>
              </div>
            </div>
            
            <div className='col-lg-4'>
              <div className='bansos-benefits-card-2'>
                <div className='d-flex justify-content-center'>
                  <div className='bansos-benefits-image-3'>
                    <img src={access} alt="" />
                  </div>
                </div>
                <h4>Mudah Diakses</h4>
                <p>SahabatPeduli mudah diakses oleh semua kalangan melalui perangkat apa pun dengan antarmuka yang ramah pengguna.</p>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default BansosBenefits
