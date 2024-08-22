import React from 'react';
import '../../../assets/styles/government/withdraw-funds/FrontWithdrawFunding.css';
import NavbarGovernment from '../home/NavbarGovernment';

function FrontWithdrawFunding() {
  return (
    <div>
      <NavbarGovernment />
      <section className='front-withdraw-funding-section'>
        <div className='front-withdraw-heading'>
          <p>Withdraw Funds</p>
        </div>
        <div className='row'>
          <div className='sisa-dana-card-1'>
            <p>Remaining Funds</p>
            <h2>Rp. 5,700,000,000</h2>
          </div>
          <div className='sisa-dana-card-2'>
            <p>Funds Already Transferred</p>
            <h2>Rp. 10,000,000,000</h2>
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
              <tr>
                <td>DKI Jakarta</td>
                <td>32/11/2024</td>
                <td>BPNT</td>
                <td>East Jakarta</td>
                <td>Rp. 6.000,000,000,000</td>
              </tr>
              {/* tambah row disini mas */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default FrontWithdrawFunding;
