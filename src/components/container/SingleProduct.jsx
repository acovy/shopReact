import React from 'react';
import IndexPage from '../../app';

const SingleProduct = ({}) => {
   return (
      <IndexPage>
         <div className='single-product'>
            <div className='product-image'>
               <img src='https://via.placeholder.com/150' alt='Product' />
            </div>
            <div className='product-details'>
               <h2>Product Title</h2>
               <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               <p>Price: $99.99</p>
            </div>
         </div>
      </IndexPage>
   );
}

export default SingleProduct;
