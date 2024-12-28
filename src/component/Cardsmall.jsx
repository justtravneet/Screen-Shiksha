import React from 'react';

const Cardsmall = ({ image1, image2, title }) => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-[180px]  md:w-[220px] h-[auto] sm bg-white rounded-lg p-2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex  items-center justify-around">
            <img className="w-[60px]" src={image1} alt="Image 1" />
            <div className='flex flex-col'>
             <img className="w-[100px] mt-[-20px]" src={image2} alt="Image 2" />
             <p className="mt-[-20px] text-sm text-center font-medium">{title}</p>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cardsmall;
