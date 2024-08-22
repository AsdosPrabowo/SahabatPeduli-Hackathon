import React from 'react'
import '../../../assets/styles/user/home/BansosProblems.css'
import disdan from '../../../assets/images/disdan.png'
import kurtra from '../../../assets/images/kurtra.png'
import markas from '../../../assets/images/markas.png'
import minak from '../../../assets/images/minak.png'
import '../../../assets/images/disdan.png'
import '../../../assets/images/kurtra.png'
import '../../../assets/images/markas.png'
import '../../../assets/images/minak.png'

function BansosProblems() {
  return (
    <section className='pantau-bansos'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='bansos-problems-content'>
                  <h5>PERMASALAHAN SAAT INI</h5>
                  <h1>Masalah dalam Penyaluran Dana Bantuan Sosial</h1>
                </div>
              </div>
              <div className='col-lg-8 col-md-6'>
                <div className="row">
                <div className="col-lg-6">
                    <div className="d-lg-flex">
                      <div className='icon-container-1'>
                        <img src={kurtra} className='mr-3' alt="" />
                      </div>
                      <div className='problems-poin-1'>
                        <h3>Kurangnya Transparansi</h3>
                        <p>Penyaluran dana bantuan sosial tidak terbuka, dan informasi penting sering tidak dipublikasikan.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-lg-flex">
                      <div className='icon-container-2'>
                        <img src={markas} className='mr-3' alt="" />
                      </div>
                      <div className='problems-poin-2'>
                        <h3>Maraknya Kasus Korupsi</h3>
                        <p>Kasus korupsi dana bantuan sosial mengurangi kepercayaan masyarakat & menunjukkan lemahnya pengawasan.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-lg-flex">
                      <div className='icon-container-3'>
                        <img src={disdan} className='mr-3' alt="" />
                      </div>
                      <div className='problems-poin-3'>
                        <h3>Distribusi Dana tidak Merata</h3>
                        <p>Bantuan sosial sering tidak didistribusikan secara adil, menyebabkan ketimpangan penerimaan.</p>
                      </div>
                    </div>
                  </div>
                
                  
                  <div className="col-lg-6">
                    <div className="d-lg-flex">
                      <div className='icon-container-4'>
                        <img src={minak} className='mr-3' alt="" />
                      </div>
                      <div className='problems-poin-4'>
                        <h3>Minimnya Akuntabilitas</h3>
                        <p>Masyarakat sulit memantau atau melaporkan penyelewengan dana, sehingga pengawasan kurang efektif.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
  )
}

export default BansosProblems
