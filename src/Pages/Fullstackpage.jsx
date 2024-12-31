import React from 'react'

import Header from '../GeneralComponent/Header'
import Footer from '../GeneralComponent/Footer'
import Development from '../Othercomponent/Fullstack/Development'
import DownloadBrochure from '../Othercomponent/Fullstack/DownloadBrochure'
import Placementbenefit from '../Othercomponent/Fullstack/Placementbenefit'
import Bootcambenefits from '../Othercomponent/Fullstack/Bootcambenefits'


const Fullstackpage = () => {
  return (
    <div>
         <div> <Header /> </div>
        <div>
            <div>
                 <Development />
            </div>
            
            <div>
              <Placementbenefit />
            </div>
            <div>
              <Bootcambenefits />
            </div>
            <div>
               <DownloadBrochure />
            </div>
            <div>
              <Footer/>
            </div>
            
        </div>
    </div>
  )
}

export default Fullstackpage