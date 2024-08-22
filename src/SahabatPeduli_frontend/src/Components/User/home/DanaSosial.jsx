import React, { useState, useEffect } from 'react';
import { listDocs } from "@junobuild/core"; // Ensure correct import path
import '../../../assets/styles/user/home/DanaSocial.css';
import DataKependudukan from './DataKependudukan';

function DanaSosial() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchProvincesData = async () => {
      try {
        const docs = await listDocs({
          collection: "Provinsi"
        });
        const provincesData = docs.items || [];
        const total = provincesData.reduce((sum, item) => {
          const amount = parseFloat(item.data.totalAmount) || 0; // Convert to number
          return sum + amount;
        }, 0);
        setTotalAmount(total);
      } catch (error) {
        console.error('Error fetching provinces:', error);
        setErrorMessage('Failed to fetch province data');
      }
    };

    fetchProvincesData();
  }, []);

  return (
    <>
      <section id='dana-sosial'>
        <h4>MINISTRY OF SOCIAL AFFAIRS SOCIAL AID FUND</h4>
        <h1>ICP {new Intl.NumberFormat('id-ID').format(totalAmount)}</h1>
        <div className="d-flex justify-content-center">
          <p>The government allocates a social protection budget, including Direct Cash Assistance (BLT), food social aid, the Family Hope Program (PKH), and Non-Cash Food Assistance (BPNT), amounting to ICP {new Intl.NumberFormat('id-ID').format(totalAmount)} in the 2024 State Budget.</p>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </section>
      <DataKependudukan />
    </>
  );
}

export default DanaSosial;
