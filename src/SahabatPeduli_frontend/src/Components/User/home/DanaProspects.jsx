import React, { useState } from 'react';
import { SahabatPeduli_backend } from 'declarations/SahabatPeduli_backend'; // Replace with the correct import
import '../../../assets/styles/user/home/DanaProspects.css';

function DanaProspects() {
  const [account2, setAccount2] = useState('');
  const [amount, setAmount] = useState('');
  const [totalBalance, setTotalBalance] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transferMessage, setTransferMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleGetTotalBalance = async (event) => {
    event.preventDefault();
    console.log('Fetching total balance for current user and account:', account2);
    try {
      const result = await SahabatPeduli_backend.getTotalBalance(account2);
      console.log('Total balance fetched:', result);
      setTotalBalance(result !== null ? result.toString() : 'Accounts not found');
    } catch (error) {
      console.error('Error fetching total balance:', error);
      setErrorMessage('Failed to fetch total balance');
    }
  };

  const handleGetBalance = async (event) => {
    event.preventDefault();
    console.log('Fetching balance for the current user');
    try {
      const result = await SahabatPeduli_backend.getBalance();
      console.log('Balance fetched:', result);
      setBalance(result !== null ? result.toString() : 'Account not found');
    } catch (error) {
      console.error('Error fetching balance:', error);
      setErrorMessage('Failed to fetch balance');
    }
  };

  const handleSendBalance = async (event) => {
    event.preventDefault();
    console.log('Sending balance to', account2, 'amount:', amount);
    try {
      const amountNat = BigInt(amount); // Ensure the amount is a BigInt
      const response = await SahabatPeduli_backend.sendBalance(account2, amountNat);
      console.log('Transfer result:', response);
      setTransferMessage(response !== null ? response : 'Transfer failed.');
    } catch (error) {
      console.error('Error sending balance:', error);
      setErrorMessage('Failed to send balance');
    }
  };

  return (
    <>
      <h4 className="subtitle-prospek">PROSPEK DANA</h4>
      <h1 className="title-prospek">Pantau Prospek Dana Bantuan Sosial</h1>
      <div className="table-prospects">
        <form onSubmit={handleGetTotalBalance}>
          <label>
            Other Account (for Total Balance):
            <input
              type="text"
              value={account2}
              onChange={(e) => setAccount2(e.target.value)}
              required
            />
          </label>
          <button type="submit">Get Total Balance</button>
        </form>
        {totalBalance && (
          <div>
            <h2>Total Balance:</h2>
            <p>{totalBalance}</p>
          </div>
        )}

        <form onSubmit={handleGetBalance}>
          <button type="submit">Get My Balance</button>
        </form>
        {balance && (
          <div>
            <h2>Balance:</h2>
            <p>{balance}</p>
          </div>
        )}

        <form onSubmit={handleSendBalance}>
          <label>
            To Account:
            <input
              type="text"
              value={account2}
              onChange={(e) => setAccount2(e.target.value)}
              required
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
          <button type="submit">Send Balance</button>
        </form>
        {transferMessage && (
          <div>
            <h2>Transfer Status:</h2>
            <p>{transferMessage}</p>
          </div>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <table className="table table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Name Provincy</th>
              <th>Date</th>
              <th>Social Assistance</th>
              <th>From</th>
              <th>Transaction</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default DanaProspects;
