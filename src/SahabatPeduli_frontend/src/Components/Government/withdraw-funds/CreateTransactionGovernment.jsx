import React, { useState } from 'react';
import { SahabatPeduli_backend } from 'declarations/SahabatPeduli_backend'; // Ganti dengan import yang benar
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!province || !fundType || !totalAmount || totalAmount <= 0) {
      setErrorMessage('Please fill all fields correctly.');
      return;
    }

    const senderAccount = '5uvni-p3bjy-w3mjd-mjj7h-4r5ur-aosy2-ylben-ox5sj-tweba-qtmeo-qae';
    const receiverAccount = 'zud56-g4eif-5jfu4-5zpon-ffvkk-h354s-4qdjt-h4kjg-icmju-6hrzl-rae';
    const amountNat = BigInt(totalAmount); // Ensure the amount is a BigInt

    try {
      // Step 1: Check sender's balance
      const senderBalance = await SahabatPeduli_backend.getBalance(senderAccount);

      if (senderBalance && BigInt(senderBalance) >= amountNat) {
        // Step 2: Trigger the balance transfer
        const response = await SahabatPeduli_backend.sendBalance(senderAccount, receiverAccount, amountNat);

        if (response) {
          setTransferMessage('Transfer successful!');

          // Generate a unique key
          const uniqueKey = nanoid();

          // Create document data
          const documentData = {
            provinceName: province,
            fundType: fundType,
            totalAmount: totalAmount,
            hiddenDatetime: new Date().toISOString(), // Hidden datetime
          };

          // Step 3: Set the document in the "Provinsi" collection
          await setDoc({
            collection: 'Provinsi',
            doc: {
              key: uniqueKey,
              data: documentData,
            },
          });

          alert('Transaction successfully created and document added!');
          // Reset form fields
          setProvince('');
          setFundType('');
          setTotalAmount('');
          setTransferMessage('');
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
                <div className='form-group-1'>
                  <label htmlFor="province">Province Name</label>
                  <select
                    id="province"
                    className='form-control'
                    name="province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  >
                    <option value="">Select Province</option>
                    <option value="aceh">Aceh</option>
                    <option value="bali">Bali</option>
                  </select>
                </div>
                <div className='form-group-2'>
                  <label htmlFor="fundType">Funds Type</label>
                  <select
                    id="fundType"
                    className='form-control'
                    name="fundType"
                    value={fundType}
                    onChange={(e) => setFundType(e.target.value)}
                  >
                    <option value="">Select Funds Type</option>
                    <option value="blt">BLT</option>
                    <option value="pkh">PKH</option>
                    <option value="bpnt">BPNT</option>
                    <option value="pangan">Pangan</option>
                  </select>
                </div>
                <div className='form-group-3'>
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
