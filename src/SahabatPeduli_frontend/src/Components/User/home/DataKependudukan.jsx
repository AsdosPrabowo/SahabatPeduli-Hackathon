import React from 'react'

function DataKependudukan() {
  return (
    <div className='d-flex justify-content-center'>
      <section id="data-kependudukan">
        <div className="d-lg-flex">
          <div className="provinsi">
            <h1>38</h1>
            <p>Provinsi</p>
          </div>
          <div className="kota">
            <h1>514</h1>
            <p>Kota/Kabupaten</p>
          </div>
          <div className="kecamatan">
            <h1>7.288</h1>
            <p>Kecamatan</p>
          </div>
          <div className="desa">
            <h1>81 Ribu+</h1>
            <p>Desa</p>
          </div>
        </div>
      </section>
    </div>

  )
}

export default DataKependudukan