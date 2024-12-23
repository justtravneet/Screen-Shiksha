import React from 'react'

const Importantlink = () => {
  return (
    <div>
        <div className=" w-full bg-red-600 shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
                 <div>
                       <div className='py-[50px] flex flex-col gap-[30px]'>
                        
                             <div>
                                  <p className='text-[20px] text-white font-semibold'>Important Links</p>
                             </div>

                             <div className='flex flex-wrap  items-start gap-[10px]'>
                                <p className='text-[15px] text-white font-semibold'>Job Bootcamp <br /> for professionals</p>
                                <div className='flex flex-wrap items-center gap-[5px] md:gap-[15px]'>
                                     <div><a href="http://"><p className='text-white text-[14px] underline decoration-solid'>Web Development Bootcamp (MERN & Springboot)</p></a></div>
                                     <div className='h-4 w-[1px] bg-white opacity-50'></div>
                                     <div><a href="http://"><p className='text-white text-[14px] underline decoration-solid'>Data Analytics Job Bootcamp</p></a></div>
                                </div>
                             </div>

                             <div></div>
                       </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Importantlink