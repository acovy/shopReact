import Categories from "./mainComponents/categories/Categories";
import Smartphones from "./mainComponents/categories/smartphones/Smartphones";
import Motorcycle from "./mainComponents/categories/motorcycle/Motorcycle";
import Homedecoration from "./mainComponents/categories/homedecoration/Homedecoration";
import AllProducts from "./mainComponents/categories/allProducts/AllProducts";

import SingleProduct from "./mainComponents/singleProduct/SingleProduct";

import './Main.scss';

const Main = () => {
    return (
        <main>
            <Categories/>
            <Smartphones/>
            <Motorcycle/>
            <Homedecoration/>
            <AllProducts/>
            <SingleProduct/>
        </main>
    )
}

export default Main;