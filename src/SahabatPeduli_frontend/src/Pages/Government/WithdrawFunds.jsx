import React from 'react'
import CreateTransactionGovernment from '../../Components/Government/withdraw-funds/CreateTransactionGovernment'
import Navbar from '../../Components/User/home/Navbar'
import Footer from '../../Components/User/home/Footer'

function WithdrawFunds() {
  return (
    <div>
      <Navbar/>
      <CreateTransactionGovernment/>
      {/* <Footer/> */}
    </div>
  )
}

export default WithdrawFunds
