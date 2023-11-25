import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IndexPage from '../../../app/index'

const Smartphones = () => {
   const [smartphonesList, setSmartphonesList] = useState([]);

   useEffect(() => {
      const getAllSmartphones = async () => await axios
         .get('https://dummyjson.com/products/category/smartphones')
         .then(({ data }) => setSmartphonesList(data.products))
         .catch((error) => console.log(error))

      getAllSmartphones()
   }, []);

   console.log('### smartphonesList', smartphonesList)

   return (
      <IndexPage>
         <div className=''>
            <h2>Smartphones</h2>
            <ul>
               {smartphonesList.map((smartphone, index) => (
                  <li key={index}>
                     <Link to={`/product/${smartphone.id}`}>{smartphone.title}</Link>
                  </li>
               ))}

            </ul>
         </div>
      </IndexPage>
   )
}

export default Smartphones;
