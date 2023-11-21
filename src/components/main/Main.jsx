import Categories from "./mainComponents/categories/Categories";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Main.scss';

const Main = () => {
    return (
        <Router>
            <Categories/>
        </Router>
    )
}

export default Main;