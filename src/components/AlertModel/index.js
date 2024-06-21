import React from 'react';
import './AlertModel.css'; // Ensure you have styling for your modal

const AlertModel = ({ onClose }) => {
  return (
    <div className='alert-modal'>
      <div className='modal-content'>
        
        <div className='modal-body'>
          <img src="https://res.cloudinary.com/dijwul6ub/image/upload/v1718965653/b47561aa2ad560235e2702e286a6d4b7_frg5ss.jpg" alt="product" />
          <div className='image-gallery'>
            <img src="https://res.cloudinary.com/dijwul6ub/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1718965653/b47561aa2ad560235e2702e286a6d4b7_frg5ss.jpg" alt="" />
            <img src="https://res.cloudinary.com/dijwul6ub/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1718965653/b47561aa2ad560235e2702e286a6d4b7_frg5ss.jpg" alt="" />
            <img src="https://res.cloudinary.com/dijwul6ub/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1718965653/b47561aa2ad560235e2702e286a6d4b7_frg5ss.jpg" alt="" />
          </div>
         </div>

          <div className='product-details'>
            <h1>Raju Rassibomb.</h1>
            <span className='close' onClick={onClose}>&times;</span>
            <h2>MRP:</h2>
            <h1>Raju's Dream/-</h1>
            <hr />
            <div className='description'>
              <h1>Product Description:</h1>
              <p>This product packs an extra punch, thanks to the literal blood, sweat and tears of a young boy.</p>
            </div>
            <hr />
            <div className='contents'>
              <h1>Product Contents</h1>
              <p>10 hand-hurting pieces of rassi bombs</p>
              <p>Jilled with great pain</p>
              <p>Raju’s hopes</p>
            </div>
            <hr />
            <div className='shipping-time'>
              <h1>Shipping Time:</h1>
              <p>Before Raju understands that his dreams do not matter.</p>
            </div>
            <button className='choose-now-button'>Choose Now</button>
          </div>
        </div>
      </div>

  );
}

export default AlertModel;
