import React from 'react';
import Webinarform from '../../component/Webinarform';
import tagImage from '../../assets/Images/Tag-.webp';
import first from '../../assets/Images/first.svg';
import second from '../../assets/Images/second.svg';
import third from '../../assets/Images/third.svg';
import four from '../../assets/Images/four.svg';
const Development = () => {
    return (
        <div style={{backgroundColor:"#18191B"}} className='w-[100%] h-[auto]'>
            <div className="max-w-6xl mx-auto px-10 sm:px-8 lg:px-20">
                <div className='flex flex-col md:flex-row justify-between pt-[80px] md:pt-[140px] py-[40px]'>
                    <div className='left w-[100%] md:w-[50%] h-[auto]'>
                        <div className='py-[50px]'>
                            <div className='flex flex-col gap-6'>
                                <img className='w-[130px]' src={tagImage} alt="Tag" />
                                <div className='flex flex-col gap-5'>
                                    <p className='text-white pr-[40px] text-[34px] font-semibold'>Full Stack Web Development Job Bootcamp</p>
                                    <p className='text-gray-300 pr-[40px] text-[17px] font-regular'>Choose MERN stack or Spring Boot and acquire expertise through practical application and real-world projects.</p>
                                </div>

                                <div className='w-[100%] flex flex-wrap gap-2'>
                                    <div className='bg-gray-800 w-[auto] rounded-xl gap-2 flex items-center px-[5px]'>
                                        <img src={first} alt="" />
                                        <p className='text-[12px] font-semibold'>Placement assistance</p>
                                    </div>
                                    <div className='bg-gray-800 w-[auto] rounded-xl gap-2 flex items-center px-[5px]'>
                                        <img src={second} alt="" />
                                        <p className='text-[12px] font-semibold'>AI-infused curriculum</p>
                                    </div>
                                    <div className='bg-gray-800 w-[auto] rounded-xl gap-2 flex items-center px-[5px]'>
                                        <img src={third} alt="" />
                                        <p className='text-[12px] font-semibold'>1:1 mentorship</p>
                                    </div>
                                    <div className='bg-gray-800 w-[auto] rounded-xl gap-2 flex items-center px-[5px]'>
                                        <img src={four} alt="" />
                                        <p className='text-[12px] font-semibold'>Faculty from MAANG</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='right w-[100%] md:w-[45%] h-[auto]'>
                        <Webinarform />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Development;
