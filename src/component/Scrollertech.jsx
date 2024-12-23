import React from 'react';
import Cardsmall from './Cardsmall';
import kashish from '../assets/Images/kashish.png';
import google from '../assets/Images/google.png';
import {ArrowLineDown } from "@phosphor-icons/react";
const Scrollertech = () => {
  return (
    <div className="py-[80px] flex flex-col gap-[30px]">
      <div className="flex justify-center lg:gap-[130px]">
        <p className="text-[22px] font-semibold text-center">
          Our Ninjas at top tech companies
        </p>
      </div>

      {/* Scroll container */}
      <div className="scroll-container">
        <div className="scroll-content">
          {/* Repeating Cards */}
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
        </div>
        {/* Duplicate the cards to create the infinite scroll effect */}
        <div className="scroll-content">
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
          <Cardsmall image1={kashish} image2={google} title="CS/IT" />
        </div>
      </div>
      
      <div className='flex gap-[10px] items-center justify-center'>
         <ArrowLineDown size={22} color='red' weight="fill" />
         <p className="text-[18px] text-red-600 font-semibold text-center">
           Download Placement report
        </p>
      </div>
        
    </div>
  );
};

export default Scrollertech;
