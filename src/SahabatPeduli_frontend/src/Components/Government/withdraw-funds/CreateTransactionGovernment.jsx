import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { SahabatPeduli_backend } from 'declarations/SahabatPeduli_backend'; // Replace with the correct import
import { setDoc } from "@junobuild/core";
import { nanoid } from 'nanoid';
import '../../../assets/styles/government/withdraw-funds/CreateTransactionGovernment.css';
import bg from '../../../assets/images/create-transaction-background.png';

function CreateTransactionGovernment() {
  const [province, setProvince] = useState('');
  const [fundType, setFundType] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [transferMessage, setTransferMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const senderAccount = '5uvni-p3bjy-w3mjd-mjj7h-4r5ur-aosy2-ylben-ox5sj-tweba-qtmeo-qae';
    const receiverAccount = 'zud56-g4eif-5jfu4-5zpon-ffvkk-h354s-4qdjt-h4kjg-icmju-6hrzl-rae';
    const amountNat = BigInt(totalAmount);

    try {
      const senderBalance = await SahabatPeduli_backend.getBalance(senderAccount);

      if (senderBalance && BigInt(senderBalance) >= amountNat) {
        const response = await SahabatPeduli_backend.sendBalance(senderAccount, receiverAccount, amountNat);

        if (response) {
          setTransferMessage('Transfer successful!');

          const uniqueKey = nanoid();

          const documentData = {
            provinceName: province,
            fundType: fundType,
            totalAmount: totalAmount,
            hiddenDatetime: new Date().toISOString(),
          };

          await setDoc({
            collection: 'Provinsi',
            doc: {
              key: uniqueKey,
              data: documentData,
            },
          });

          alert('Transaction successfully created and document added!');
          navigate('/success-withdraws'); // Redirect to success-withdraws
        } else {
          setTransferMessage('Transfer failed.');
        }
      } else {
        setErrorMessage('Insufficient funds in the sender\'s account.');
      }
    } catch (error) {
      console.error('Error during the process:', error);
      setErrorMessage('Failed to complete the transaction.');
    }
  };

  return (
    <section className='create-transaction-government-section'>
      <div className='create-transaction-government-title'>
        <div className="d-flex justify-content-center">
          <p>Create Transaction</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className='create-transaction-background'>
            <img src={bg} alt="Background" />
            <div className="transaction-form">
              <div className="d-flex justify-content-center">
                <h5>Fund Transaction</h5>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='form-group-1 mt-5'>
                  <label htmlFor="province">Province Name</label>
                  <select
                    id="province"
                    className='form-control'
                    name="province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  >
                    <option value="">Select Province</option>
                    <option value="Aceh">Aceh</option>
                    <option value="Bali">Bali</option>
                    <option value="Banten">Banten</option>
                    <option value="Bengkulu">Bengkulu</option>
                    <option value="Gorontalo">Gorontalo</option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Jambi">Jambi</option>
                    <option value="Jabar">Jawa Barat</option>
                    <option value="Jateng">Jawa Tengah</option>
                    <option value="Jatim">Jawa Timur</option>
                    <option value="Kalbar">Kalimantan Barat</option>
                    <option value="Kaltim">Kalimantan Timur</option>
                    <option value="Kalteng">Kalimantan Tengah</option>
                    <option value="Kaltara">Kalimantan Utara</option>
                    <option value="Kalut">Kalimantan Selatan</option>
                    <option value="KepBangka">Kep. Bangka Belitung</option>
                    <option value="Kepriau">Kep. Riau</option>
                    <option value="Lampung">Lampung</option>
                    <option value="Maluku">Maluku</option>
                    <option value="Malukut">Maluku Utara</option>
                    <option value="NTT">Nusa Tenggara Timur</option>
                    <option value="NTB">Nusa Tenggara Barat</option>
                    <option value="Papbar">Papua Barat</option>
                    <option value="Papsel">Papua Selatan</option>
                    <option value="Pappem">Papua Pegunungan</option>
                    <option value="Papu">Papua</option>
                    <option value="Riau">Riau</option>
                    <option value="Sulbar">Sulawesi Barat</option>
                    <option value="Sulses">Sulawesi Selatan</option>
                    <option value="Sulteng">Sulawesi Tengah</option>
                    <option value="Sultra">Sulawesi Tenggara</option>
                    <option value="Sulut">Sulawesi Utara</option>
                    <option value="Sumbar">Sumatera Barat</option>
                    <option value="Sumsel">Sumatera Selatan</option>
                    <option value="Sumut">Sumatera Utara</option>
                    <option value="Yogya">Yogyakarta</option>
                  </select>
                </div>
                <div className='form-group-2 mt-5'>
                  <label htmlFor="fundType">Funds Type</label>
                  <select
                    id="fundType"
                    className='form-control'
                    name="fundType"
                    value={fundType}
                    onChange={(e) => setFundType(e.target.value)}
                  >
                    <option value="">Select Funds Type</option>
                    <option value="BLT">BLT</option>
                    <option value="PKH">PKH</option>
                    <option value="BPNT">BPNT</option>
                    <option value="PANGAN">Pangan</option>
                  </select>
                </div>
                <div className='form-group-3 mt-5'>
                  <label htmlFor="totalAmount">Total Amount</label>
                  <input
                    id="totalAmount"
                    type='number'
                    className='form-control'
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                    min="0"
                    step="any"
                  />
                </div>
                <button type='submit' className='btn-block mt-5'>Send</button>
              </form>
              {transferMessage && <p>{transferMessage}</p>}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTransactionGovernment;
