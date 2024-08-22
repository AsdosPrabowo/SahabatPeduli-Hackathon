import React, { useState, useEffect } from 'react';
import { SahabatPeduli_backend } from 'declarations/SahabatPeduli_backend'; // Replace with the correct import
import '../../../assets/styles/user/home/DanaSocial.css';
import DataKependudukan from './DataKependudukan';

function DanaSosial() {
  const [dataBantuanSosial, setDataBantuanSosial] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchDataBantuanSosial = async () => {
      try {
        const account1 = '5uvni-p3bjy-w3mjd-mjj7h-4r5ur-aosy2-ylben-ox5sj-tweba-qtmeo-qae'; // Replace with actual principal text
        const account2 = 'bivmj-vwtg2-pvebr-5tcog-2ftzs-jlszj-yokbs-zjoll-qqmnu-4dwq2-sqe'; // Replace with actual principal text
        const result = await SahabatPeduli_backend.getTotalBalance(account1, account2);
        setDataBantuanSosial(result !== null ? result.toString() : 'Accounts not found');
      } catch (error) {
        console.error('Error fetching total social aid fund:', error);
        setErrorMessage('Failed to fetch total social aid fund');
      }
    };

    fetchDataBantuanSosial();
  }, []);

  return (
    <>
      <section id='dana-sosial'>
        <h4>MINISTRY OF SOCIAL AFFAIRS SOCIAL AID FUND</h4>
        <h1>ICP {dataBantuanSosial}</h1>
        <div className="d-flex justify-content-center">
          <p>The government allocates a social protection budget, including Direct Cash Assistance (BLT), food social aid, the Family Hope Program (PKH), and Non-Cash Food Assistance (BPNT), amounting to ICP {dataBantuanSosial}  in the 2024 State Budget.</p>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </section>
      <DataKependudukan />
    </>
  );
}

export default DanaSosial;
