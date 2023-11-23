import React from 'react';
import Main from './components';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AllProducts from './components/all-products/AllProducts';
import Homedecoration from './components/categories/homedecoration/Homedecoration';
import Motorcycle from './components/categories/motorcycle/Motorcycle';
import Smartphones from './components/categories/smartphones/Smartphones';
import SingleProduct from './components/container/SingleProduct';

import './App';

const App = () => {
   return (
      <div className='App'>
         <BrowserRouter>
            <Routes >
               <Route path="/" element={<Main />} />
               <Route path="/product/:id" element={<SingleProduct />} />
               <Route path="/all" element={<AllProducts />} />
               <Route path="/smartphones" element={<Smartphones />} />
               <Route path="/motorcycle" element={<Motorcycle />} />
               <Route path="/home-decoration" element={<Homedecoration />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;

