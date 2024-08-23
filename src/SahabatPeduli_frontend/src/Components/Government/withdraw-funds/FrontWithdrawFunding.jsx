import React, { useEffect, useState } from 'react';
import '../../../assets/styles/government/withdraw-funds/FrontWithdrawFunding.css';
import Navbar from '../../User/home/Navbar';
import Footer from '../../User/home/Footer';
import { SahabatPeduli_backend } from 'declarations/SahabatPeduli_backend'; // Replace with the correct import
import { authSubscribe, listDocs } from '@junobuild/core';

function FrontWithdrawFunding() {
  const [remainingFunds, setRemainingFunds] = useState('0');
  const [transferredFunds, setTransferredFunds] = useState('0');
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async (owner) => {
      try {
        // Fetch the user's balance
        const balance = await SahabatPeduli_backend.getBalance(owner);
        setRemainingFunds(balance ? balance.toString() : '0');

        // Fetch transaction history and calculate the total transferred funds
        const docs = await listDocs({ collection: "Provinsi" });
        const history = docs.items || [];

        // Calculate total transferred amount
        const totalTransferred = history.reduce((sum, doc) => {
          return sum + Number(doc.data.totalAmount);
        }, 0);

        // Format the total transferred amount with commas
        const formattedTransferredFunds = totalTransferred.toLocaleString('en-US');

        setTransferredFunds(formattedTransferredFunds);
        setTransactionHistory(history);

      } catch (error) {
        console.error('Failed to fetch data:', error);
        setRemainingFunds('0');
        setTransferredFunds('0');
        setTransactionHistory([]);
      }
    };

    const unsubscribe = authSubscribe((authUser) => {
      if (authUser) {
        setUser(authUser);
        fetchData(authUser.owner);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Navbar />
      <section className='front-withdraw-funding-section'>
        <div className='front-withdraw-heading'>
          <p>Withdraw Funds</p>
        </div>
        <div className='row'>
          <div className='sisa-dana-card-1'>
            <p>Remaining Funds</p>
            <h2>ICP. {remainingFunds}</h2>
          </div>
          <div className='sisa-dana-card-2'>
            <p>Funds Already Transferred</p>
            <h2>ICP. {transferredFunds}</h2>
          </div>
        </div>
        <div className='transaction-history'>
          <h3>Transaction History</h3>
          <table className='transaction-table'>
            <thead>
              <tr>
                <th>Province Name</th>
                <th>Date</th>
                <th>Social Aid Type</th>
                <th>City</th>
                <th>Transaction Funds</th>
              </tr>
            </thead>
            <tbody>
              {transactionHistory.length > 0 ? (
                transactionHistory.map((doc, index) => (
                  <tr key={index}>
                    <td>{doc.data.provinceName}</td>
                    <td>{new Date(doc.data.hiddenDatetime).toLocaleDateString()}</td>
                    <td>{doc.data.fundType}</td>
                    <td>{doc.data.city}</td>
                    <td>{`ICP. ${Number(doc.data.totalAmount).toLocaleString('en-US')}`}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No transaction history available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default FrontWithdrawFunding;
