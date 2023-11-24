import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = ({ selectedCategories }) => {
   const [products, setProducts] = useState([])

   useEffect(() => {
      const getAllProducts = async () => await axios
         .get(`https://dummyjson.com/products/category/${selectedCategories}`)
         .then(({ data }) => setProducts(data.products))
         .catch((error) => console.log('### menu request)', error))

      getAllProducts()
   }, [selectedCategories]);

   console.log('### products', products)

   return (
      <div className="">
         {products.map((product) => (
            <div className="">{product.title}</div>
         ))}
      </div>
   )
}
export default Menu;