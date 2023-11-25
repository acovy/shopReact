import React, {useState} from 'react'
import Headers from "../components/Headers";
import Menu from '../components/menu/Menu'
import './index.scss';

const IndexPage = ({children}) => {
   const [selectedCategories, setSelectedCategories] = useState('')
   
   console.log('### selectedCategories', selectedCategories)
   return (
      <div className="container">
         <Headers setSelectedCategories={setSelectedCategories}/>
         <Menu selectedCategories={selectedCategories}/>
         {children}
      </div>
   )
}
export default IndexPage;