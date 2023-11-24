import React, {useState} from 'react'
import Headers from "../components/Headers";
import Menu from '../components/menu/Menu'

const IndexPage = ({children}) => {
   const [selectedCategories, setSelectedCategories] = useState('')
   
   console.log('### selectedCategories', selectedCategories)
   return (
      <div className="">
         <Headers setSelectedCategories={setSelectedCategories}/>
         <Menu selectedCategories={selectedCategories}/>
         {children}
      </div>
   )
}
export default IndexPage;