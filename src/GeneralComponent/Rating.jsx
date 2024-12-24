import React from 'react'

const Rating = () => {
  return (
    <div>
         <div style={{backgroundColor:"#2B303C"}} className='px-2 py-4 rounded-lg w-[100%] md:w-[90%] h-auto flex items-center justify-around '>
                                             <div className='flex flex-col  items-center'>
                                                 <p className='text-[14px] md:text-[17px] font-bold  text-white'>95%</p>
                                                 <p className='text-[11px]  md:text-[13px] text-white'>placement rate</p>
                                             </div>
                                             <div>
                                                 <div style={{backgroundColor:"#394871"}} className='w-[1.5px] h-[40px] bg-white'></div>
                                             </div>
                                             <div className='flex flex-col  items-center'>
                                                 <p className='text-[14px] md:text-[17px] font-bold  text-white'>1200+</p>
                                                 <p className='text-[11px]  md:text-[13px] text-white'>Hiring partners</p>
                                             </div>
                                             <div>
                                                 <div style={{backgroundColor:"#394871"}} className='w-[1.5px] h-[40px] bg-white'></div>
                                             </div>
                                             <div className='flex flex-col  items-center'>
                                                 <p className='text-[14px] md:text-[17px] font-bold  text-white'>128%</p>
                                                 <p className='text-[11px]  md:text-[13px] text-white'>Average hike </p>
                                             </div>
                                             <div>
                                                 <div style={{backgroundColor:"#394871"}} className='w-[1.5px] h-[40px] bg-white'></div>
                                             </div> 
                                             <div className='flex flex-col  items-center'>
                                                 <p className='text-[14px] md:text-[17px] font-bold  text-white'>1.5 l+</p>
                                                 <p className='text-[11px]  md:text-[13px]  text-white'>Learners</p>
                                             </div>
                                        </div>
    </div>
  )
}

export default Rating