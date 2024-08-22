import React from 'react'
import '../../../assets/styles/government/withdraw-funds/CreateTransactionGovernment.css'
import bg from '../../../assets/images/create-transaction-background.png'

function CreateTransactionGovernment() {
  return (
    <section className='create-transaction-government-section'>
      <div className='create-transaction-government-title'>
        <div className="d-flex justify-content-center">
        <p>Create Transaction</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className='create-transaction-background'>
            <img src={bg} alt="" />
            <div className="transaction-form">
              <div className="d-flex justify-content-center">
              <h5>Social Assistance Fund Transactions</h5>
              </div>
              <div className='form-group-1'>
                <label>Province Name</label>
                <select className='form-control'>
                  <option>Select Province Name</option>
                </select>
              </div>
              <div className='form-group-2'>
                <label>Types of Social Assistance</label>
                <select className='form-control'>
                  <option>Select Types of Social Assistance</option>
                </select>
              </div>
              <div className='form-group-3'>
                <label>Total Amount</label>
                <input type='text' className='form-control'   />
              </div>
              <button className=' btn-block mt-5'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateTransactionGovernment
