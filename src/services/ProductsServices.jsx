import axios from 'axios';

// const baseAuth = async () => {
//     try {
//         const response = await axios.post('https://dummyjson.com/auth/login', {
//         username: 'kminchelle',
//         password: '0lelplR',
//         // expiresInMins: 60, // optional
//         });

//         console.log(response.data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

const getAllProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.map(_transformAllProducts);

}
// const getSingleProduct = async () => {
//     const response = await axios.get('https://dummyjson.com/products/1');
//     return _transformProduct(response.data);
// }

// const getSearchProducts = async () => {
//     const response = await axios.get('https://dummyjson.com/products/search?q=phone');
//     return response.data;
// }

// const _transformProduct = (product) => {
//     return {
//         id: product.id,
//         title: product.title,
//     }
// }
const _transformAllProducts = (products) => {
    return {
        id: products.id,
        title: products.title,
        description: products.description,
        price: products.price,
        discountPercentage: products.discountPercentage,
        rating: products.rating,
        stock: products.stock,
        brand: products.brand,
        category: products.category,
        thumbnail: products.thumbnail,
        images: products.images,
    }
}
console.log(_transformAllProducts)

export default getAllProducts;