import { Routes, Route } from 'react-router-dom';
import AllProducts from '../main/mainComponents/categories/allProducts/AllProducts';
import Homedecoration from '../main/mainComponents/categories/homedecoration/Homedecoration';
import Motorcycle from '../main/mainComponents/categories/motorcycle/Motorcycle';
import Smartphones from '../main/mainComponents/categories/smartphones/Smartphones';

const Navigation = () => {

return (
        <div className="routes">
            <Routes>
                <Route path="/all" element={<AllProducts/>}/>
                <Route path="/smartphones" element={<Smartphones/>}/>
                <Route path="/motorcycle" element={<Motorcycle/>}/>
                <Route path="/home-decoration" element={<Homedecoration/>}/>
            </Routes>
        </div>
    )
}

export default Navigation;
