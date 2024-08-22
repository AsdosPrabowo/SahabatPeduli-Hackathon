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
                  <h5>Current Issues</h5>
                  <h1>Problems in the Distribution of Social Aid Funds.</h1>
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
                        <h3>Lack of Transparency.</h3>
                        <p>The distribution of social aid funds is not transparent, and important information is often not published.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-lg-flex">
                      <div className='icon-container-2'>
                        <img src={markas} className='mr-3' alt="" />
                      </div>
                      <div className='problems-poin-2'>
                        <h3>The Rise of Corruption Cases</h3>
                        <p>Social aid corruption cases reduce public trust & highlight weak oversight.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-lg-flex">
                      <div className='icon-container-3'>
                        <img src={disdan} className='mr-3' alt="" />
                      </div>
                      <div className='problems-poin-3'>
                        <h3>Uneven distribution of funds</h3>
                        <p>Social aid is often unfairly distributed, leading to inequitable reception</p>
                      </div>
                    </div>
                  </div>
                
                  
                  <div className="col-lg-6">
                    <div className="d-lg-flex">
                      <div className='icon-container-4'>
                        <img src={minak} className='mr-3' alt="" />
                      </div>
                      <div className='problems-poin-4'>
                        <h3>Lack of accountability</h3>
                        <p>The public faces difficulties in monitoring or reporting fund misuse, resulting in ineffective oversight.</p>
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
