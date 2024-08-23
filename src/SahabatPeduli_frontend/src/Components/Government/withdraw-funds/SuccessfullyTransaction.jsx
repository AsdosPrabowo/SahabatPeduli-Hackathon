import React from 'react';
import NavbarGovernment from '../home/NavbarGovernment';
import bg from '../../../assets/images/create-transaction-background.png';
import '../../../assets/styles/government/withdraw-funds/SuccessfullyTransaction.css';
import SuccessfullyAnimation from '../../../assets/animations/successfully-animation.json';
import Lottie from 'lottie-react';

function SuccessfullyTransaction() {
  return (
    <div>
        <NavbarGovernment/>
        <section className='successfully-transaction-section'>
            <div className='d-flex justify-content-center'>
                <div className='successfully-transaction-header'>
                    <p>Create Transaction</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='successfully-transaction-background'>
                    <img src={bg} alt="Background" />
                    <div className="transaction-form">
                        <div className="d-flex justify-content-center">
                            <h5>Social Aid Fund Transaction</h5>
                        </div>
                        <div className='successfully-transaction-body'>
                            <div className='checkmark-lottie'>
                                <Lottie animationData={SuccessfullyAnimation} loop={true} style={{ height: 250, width: 500 }} />
                            </div>
                            <p>Transaction Successful!</p>
                            <div className='d-flex justify-content-center'>
                                <div className='successfully-desc'>
                                <p>The social aid fund disbursement has been successfully completed.</p>
                            </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button className='download-btn'>
                                <i className="fa-solid fa-arrow-up-from-bracket" style={{ marginRight: '8px' }}></i>
                                Download Transaction Receipt
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default SuccessfullyTransaction;
