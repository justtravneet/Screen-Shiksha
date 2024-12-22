import React from 'react'
import FullstackHeader from '../GeneralComponent/FullstackHeader'
import Sectionone from '../Othercomponent/Homepage/Sectionone'



const Home = () => {
  return (
    <div> 
        <div>
           <FullstackHeader />
        </div>

        <div>
              <Sectionone />
        </div>
         
    </div>
  )
}

export default Home