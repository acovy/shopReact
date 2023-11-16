const getSingleProduct = () => {
    return fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(console.log);    
}

export default getSingleProduct;