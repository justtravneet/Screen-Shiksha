import React from 'react'

import Header from '../GeneralComponent/Header'
import Development from '../Othercomponent/Fullstack/Development'

import Placementbenefit from '../Othercomponent/Fullstack/Placementbenefit'


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
            
        </div>
    </div>
  )
}

export default Fullstackpage