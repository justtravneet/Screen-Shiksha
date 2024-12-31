import React from 'react';

import Benefits from '../../GeneralComponent/Benefits';
import Beyoundlearning from '../../GeneralComponent/Beyondlearning';
const Bootcambenefits = () => {
    return (
        <div style={{ backgroundColor: "#141414" }} className='w-full h-[auto]'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
                <div>
                    <Benefits /> 
                </div>
                <div>
                    <Beyoundlearning /> 
                </div>
            </div>
        </div>
    );
}

export default Bootcambenefits;