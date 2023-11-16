import axios from 'axios';

const getAllProducts = async () => {
    try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
    } catch (error) {
    console.error('Error:', error);
    throw error; 
    }
}

export default getAllProducts;
