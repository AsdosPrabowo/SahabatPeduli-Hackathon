import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarGovernment from '../home/NavbarGovernment';
import bg from '../../../assets/images/create-transaction-background.png';
import '../../../assets/styles/government/withdraw-funds/SuccessfullyTransaction.css';
import SuccessfullyAnimation from '../../../assets/animations/successfully-animation.json';
import Lottie from 'lottie-react';

function SuccessfullyTransaction() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/tracker');
    }, 3000); // Redirect after 3 seconds

    // Cleanup timer if the component is unmounted before the time is up
    return () => clearTimeout(timer);
  }, [navigate]);

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
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessfullyTransaction;
