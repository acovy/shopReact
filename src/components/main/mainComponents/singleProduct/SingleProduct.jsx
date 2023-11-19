import React from 'react';

const SingleProduct = () => {
    return (
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
    );
}

export default SingleProduct;
