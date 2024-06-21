import React, { useState } from 'react';
import AlertModel from '../AlertModel'; // Ensure the correct import path
import './products.css';

const Products = () => {
  const [showAlert, setShowAlert] = useState(false);

  const onAlertView = () => {
    setShowAlert(true);
  }

  const onCloseAlert = () => {
    setShowAlert(false);
  }

  return (
    <div className='products-section'>
      <div className='line'>
        <hr />
        <h1>Our Products</h1>
        <hr />
      </div>
      <div className='product-responsive-container'>
        <div className='product-container'>
          <img src="https://res.cloudinary.com/dijwul6ub/image/upload/v1718965653/b47561aa2ad560235e2702e286a6d4b7_frg5ss.jpg" alt="product" />
          <div className='product-details-container'>
            <h1>Raju Rassinbomb</h1>
            <button onClick={onAlertView}>QUICK VIEW</button>
          </div>
        </div>
        <div className='product-container'>
          <img src="https://res.cloudinary.com/dijwul6ub/image/upload/v1718965653/b47561aa2ad560235e2702e286a6d4b7_frg5ss.jpg" alt="product" />
          <div className='product-details-container'>
            <h1>Ladiyon ki Rani Chani</h1>
            <button onClick={onAlertView}>QUICK VIEW</button>
          </div>
        </div>
      </div>
      <hr className='bottom-line' />
      {showAlert && <AlertModel onClose={onCloseAlert} />}
    </div>
  );
}

export default Products;
