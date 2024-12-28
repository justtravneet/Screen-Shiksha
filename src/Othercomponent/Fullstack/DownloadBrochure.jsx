import React from 'react'


import Btn from '../../component/Btn'
import Scrollertech from '../../component/Scrollertech'

const DownloadBrochure = () => {
    return (
        <div>
            <div className='w-[100%] h-[500px]' >
                <div className=" max-w-6xl mx-auto px-3 sm:px-8 lg:px-20">
                    <div className='py-[50px]'>
                        <div className='flex flex-col gap-[30px]'>
                            <p className='text-[19px] sm:text-[25px] md:text-[28px] font-semibold text-center'>Job Bootcamp brochure</p>
                            <div className='flex gap-[20px] justify-center'>
                                <div>
                                    <Btn 
                                        label="Download MERN Brochure"

                                        className="text-black text-[9px] px-2 py-2 sm:text-[13px] sm:px-4 sm:py-4 sm:w-[190px]  md:w-[250px] md:text-[16px] lg:w-[280px] lg:text-[18px] xl:w-[300px] xl:text-[20px] w-[130px] font-semibold"
                                        outline={true}
                                        padding="px-2 py-2"
                                        borderRadius="rounded-md"
                                    />
                                </div>
                                <div>
                                    <Btn 
                                        label="Download MERN Brochure"

                                        className="text-black text-[9px] px-2 py-2 sm:text-[13px] sm:px-4 sm:py-4 sm:w-[190px] md:w-[250px] md:text-[16px] lg:w-[280px] lg:text-[18px] w-[130px] xl:w-[300px] xl:text-[20px] font-semibold"
                                        outline={true}
                                       
                                        borderRadius="rounded-md"
                                    />
                                </div>
                                {/* <div>
                                    <Btn 
                                        label="Download Springboot Brochure"
                                        className="text-black text-[8px]  w-[100px] font-semibold"
                                        outline={true}
                                        padding="px-2 py-4"
                                        borderRadius="rounded-md"
                                    />
                                </div> */}
                            </div>
                        </div>

                        
                    </div>

                    <div>

                      <Scrollertech />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadBrochure