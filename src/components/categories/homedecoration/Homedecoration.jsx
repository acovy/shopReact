import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IndexPage from '../../../app';

const Homedecoration = () => {
   const [homedecorationList, setHomedecorationList] = useState([]);

   const getAllHomedecoration = async () => {
      try {
         const response = await axios.get('https://dummyjson.com/products/category/home-decoration');
         return response.data.products;
      } catch (error) {
         console.error('Error:', error);
         throw error;
      }
   }

   useEffect(() => {
      const fetchHomedecoration = async () => {
         try {
            const homedecoration = await getAllHomedecoration();
            setHomedecorationList(homedecoration);
         } catch (error) {
            console.error('Error getting products:', error);
         }
      };
      fetchHomedecoration();
   }, []);

   return (
      <IndexPage>
         <div>
            <h2>Home-decoration</h2>
            <ul>
               {homedecorationList.map((homedecoration, index) => (
                  <li key={index}>
                     <Link to={`/product/${homedecoration.id}`}>{homedecoration.title}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </IndexPage>

   )
}

export default Homedecoration;
