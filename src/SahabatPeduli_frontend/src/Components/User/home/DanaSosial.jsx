import { useState, } from 'react'
import '../../../assets/styles/user/home/DanaSocial.css';
import DataKependudukan from './DataKependudukan';
function DanaSosial() {
  const [dataBantuanSosial, setDataBantuanSosial] = useState(0);
  return (
    <>
      <section id='dana-sosial'>
        <h4>DANA BANTUAN SOSIAL KEMENTRIAL SOSIAL</h4>
        <h1>RP{dataBantuanSosial}</h1>
        <div className="d-flex justify-content-center">

          <p>Pemerintah mengalokasikan anggaran perlindungan sosial atau perlinsos yang mencakup Bantuan Langsung Tunai (BLT), bansos pangan, dan program keluarga harapan (PKH) dan Bantuan Pangan Non Tunai (BPNT), senilai Rp 496 triliun pada APBN 2024.</p>
        </div>

      </section>
      <DataKependudukan />
    </>

  )
}

export default DanaSosial