import Categories from "./mainComponents/categories/Categories";
import Smartphones from "./mainComponents/categories/smartphones/Smartphones";
import Motorcycle from "./mainComponents/categories/motorcycle/Motorcycle";
import Homedecoration from "./mainComponents/categories/homedecoration/Homedecoration";

import './Main.scss';

const Main = () => {
    return (
        <main>
            <Categories/>
            <Smartphones/>
            <Motorcycle/>
            <Homedecoration/>
        </main>
    )
}

export default Main;