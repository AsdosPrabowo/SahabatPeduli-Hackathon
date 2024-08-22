import React from 'react'
import '../../../assets/styles/user/home/DanaProspects.css'

function DanaProspects() {
  return (
    <section className='prospek-dana-section'>
        <div className='prospek-dana-heading'>
            <h5>FUNDING PROSPECTS</h5>
            <h1>Monitor Social Aid Fund Prospects</h1>
        </div>
        <div className='bansos-category'>
            <div className='row'>
                <div className='bansos-card-1'>
                    <h2>Provincial Social Aid Prospects</h2>
                </div>
                <div className='bansos-card-2'>
                    <h2>City/District Social Aid Prospects</h2>
                </div>
                <div className='bansos-card-3'>
                    <h2>Subdistrict Social Aid Prospects</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DanaProspects
