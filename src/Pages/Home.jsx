import React from 'react'
import FullstackHeader from '../GeneralComponent/FullstackHeader'
import Sectionone from '../Othercomponent/Homepage/Sectionone'
import Sectiontwo from '../Othercomponent/Homepage/Sectiontwo'
import Sectionthree from '../Othercomponent/Homepage/Sectionthree'
import Footer from '../GeneralComponent/Footer'



const Home = () => {
  return (
    <div> 
        <div>
           <FullstackHeader />
        </div>

        <div>
              <Sectionone />
              <Sectiontwo />
              <Sectionthree />
        </div>
         
         <div>
              
              <Footer />
         </div>
    </div>
  )
}

export default Home