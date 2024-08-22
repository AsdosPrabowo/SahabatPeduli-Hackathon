import { useState, } from 'react'
import '../../../assets/styles/user/home/DanaSocial.css';
import DataKependudukan from './DataKependudukan';
function DanaSosial() {
  const [dataBantuanSosial, setDataBantuanSosial] = useState(0);
  return (
    <>
      <section id='dana-sosial'>
        <h4>MINISTRY OF SOCIAL AFFAIRS SOCIAL AID FUND</h4>
        <h1>ICP{dataBantuanSosial}</h1>
        <div className="d-flex justify-content-center">

          <p>The government allocates a social protection budget, including Direct Cash Assistance (BLT), food social aid, the Family Hope Program (PKH), and Non-Cash Food Assistance (BPNT), amounting to ICP 496 trillion in the 2024 State Budget.</p>
        </div>

      </section>
      <DataKependudukan />
    </>

  )
}

export default DanaSosial