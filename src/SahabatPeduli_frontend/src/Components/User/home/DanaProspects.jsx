import React, { useState } from 'react';
import { SahabatPeduli_backend } from 'declarations/SahabatPeduli_backend'; // Replace with the correct import
import '../../../assets/styles/user/home/DanaProspects.css';

function DanaProspects() {
  const [account1, setAccount1] = useState('');
  const [account2, setAccount2] = useState('');
  const [totalBalance, setTotalBalance] = useState(null);
  const [balance, setBalance] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGetTotalBalance = async (event) => {
    event.preventDefault();
    console.log('Fetching total balance for accounts:', account1, account2);
    try {
      const result = await SahabatPeduli_backend.getTotalBalance(account1, account2);
      console.log('Total balance fetched:', result);
      setTotalBalance(result !== null ? result.toString() : 'Accounts not found');
    } catch (error) {
      console.error('Error fetching total balance:', error);
      setErrorMessage('Failed to fetch total balance');
    }
  };

  const handleGetBalance = async (event) => {
    event.preventDefault();
    console.log('Fetching balance for account:', account1);
    try {
      const result = await SahabatPeduli_backend.getBalance(account1);
      console.log('Balance fetched:', result);
      setBalance(result !== null ? result.toString() : 'Account not found');
    } catch (error) {
      console.error('Error fetching balance:', error);
      setErrorMessage('Failed to fetch balance');
    }
  };

  return (
    <>
      <h4 className="subtitle-prospek">PROSPEK DANA</h4>
      <h1 className="title-prospek">Pantau Prospek Dana Bantuan Sosial</h1>
      <div className="table-prospects">
        <form onSubmit={handleGetTotalBalance}>
          <label>
            Account 1:
            <input
              type="text"
              value={account1}
              onChange={(e) => setAccount1(e.target.value)}
              required
            />
          </label>
          <label>
            Account 2:
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
          <label>
            Account (Check Balance):
            <input
              type="text"
              value={account1}
              onChange={(e) => setAccount1(e.target.value)}
              required
            />
          </label>
          <button type="submit">Get Balance</button>
        </form>
        {balance && (
          <div>
            <h2>Balance:</h2>
            <p>{balance}</p>
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
