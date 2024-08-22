import React from 'react'
import '../../../assets/styles/user/home/DanaProspects.css'

function DanaProspects() {
  return (
    <section className='prospek-dana-section'>
        <div className='prospek-dana-heading'>
            <h5>PROSPEK DANA</h5>
            <h1>Pantau Prospek Dana Bantuan Sosial</h1>
        </div>
        <div className='bansos-category'>
            <div className='row'>
                <div className='bansos-card-1'>
                    <h2>Prospek Bansos Provinsi</h2>
                </div>
                <div className='bansos-card-2'>
                    <h2>Prospek Bansos Kota/Kabupaten</h2>
                </div>
                <div className='bansos-card-3'>
                    <h2>Prospek Bansos Kecamatan</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DanaProspects
