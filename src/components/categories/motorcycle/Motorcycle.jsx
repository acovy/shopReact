import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IndexPage from '../../../app/index';

const Motorcycle = () => {
   const [motorcycleList, setMotorcycleList] = useState([]);

   const getAllMotorcycle = async () => {
      try {
         const response = await axios.get('https://dummyjson.com/products/category/motorcycle');
         return response.data.products;
      } catch (error) {
         console.error('Error:', error);
         throw error;
      }
   }

   useEffect(() => {
      const fetchMotorcycle = async () => {
         try {
            const motorcycle = await getAllMotorcycle();
            setMotorcycleList(motorcycle);
         } catch (error) {
            console.error('Error getting products:', error);
         }
      };
      fetchMotorcycle();
   }, []);

   return (
      <IndexPage>
         <div className=''>
            <h2>Motorcycle</h2>
            <ul>
               {motorcycleList.map((motorcycle, index) => (
                  <li key={index}>
                     <Link to={`/product/${motorcycle.id}`}>{motorcycle.title}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </IndexPage>
   )
}

export default Motorcycle;
