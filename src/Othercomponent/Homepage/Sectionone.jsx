import React from 'react';
import Button from '../../component/Button';

const Sectionone = () => {
  return (
    <div className='bg-black w-[100%] h-[auto] pb-[120px]'>

      <div className="max-w-6xl mx-auto px-[30px] sm:px-[50px] md:px-[70px] lg:px-[100px] xl:px-[150px]">

        <div className='pt-[130px] flex flex-col gap-[30px]'>
          <p className='text-white text-center text-[18px] sm:text-[22px] md:text-[25px] md:text-[28px]'>Restricted by opportunities?</p>
          <p className=' font-bold text-white text-center text-[35px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[55px]'>Get the tech career you deserve. Faster.</p>
          <p style={{ color: "d3b6b6" }} className='text-white text-center text-[14px] sm:text-[16px] md:text-[19px] md:text-[22px]'>Well organised coding courses that get you there faster with confidence</p>
          
          <div className="flex justify-center mt-[20px]">
          <Button
            label={
              <span className="flex items-center justify-center text-[17px] sm:text-[22px] font-semibold ">
                Explore Offering
                <span className="ml-2 text-white text-lg">&#x25BC;</span> {/* Double down arrow */}
              </span>
            }
            className="bg-orange-400 hover:bg-orange-300 w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] py-[10px] sm:py-[12px] flex items-center justify-center"
          />
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default Sectionone;
