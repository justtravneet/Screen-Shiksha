import React from 'react';
import Webinarform from '../../component/Webinarform';
import tagImage from '../../assets/Images/Tag-.webp';
import hand from '../../assets/Images/hand.webp';
import first from '../../assets/Images/first.svg';
import second from '../../assets/Images/second.svg';
import third from '../../assets/Images/third.svg';
import four from '../../assets/Images/four.svg';
import InfoCard from '../../GeneralComponent/Infocard';
import Rating from '../../GeneralComponent/Rating';
const Development = () => {
    return (
        <div style={{ backgroundColor: "#18191B" }} className='w-[100%] h-[auto]'>
            <div className="max-w-6xl mx-auto px-3 sm:px-8 lg:px-20">
                <div className='flex flex-col md:flex-row justify-between pt-[80px] md:pt-[140px] py-[40px]'>
                    <div className='left w-[100%] md:w-[50%] h-[auto]'>
                        <div className='py-[50px]'>
                            <div className='flex flex-col gap-8'>
                                <img className='w-[130px]' src={tagImage} alt="Tag" />
                                <div className='flex flex-col gap-5'>
                                    <p className='text-white pr-[40px] text-[34px] font-semibold'>Full Stack Web Development Job Bootcamp</p>
                                    <p className='text-gray-300 pr-[40px] text-[17px] font-regular'>Choose MERN stack or Spring Boot and acquire expertise through practical application and real-world projects.</p>
                                </div>

                                <div className='w-[100%] flex flex-wrap gap-2'>
                                    <div>
                                        <InfoCard
                                            imageSrc={first}
                                            text="Placement assistance"
                                            backgroundColor="#2F2F31"
                                            textColor="#899797"
                                            className="custom-class" // Optional additional styles
                                        />
                                    </div>
                                    <div>
                                        <InfoCard
                                            imageSrc={second}
                                            text="AI-infused curriculum"
                                            backgroundColor="#2F2F31"
                                            textColor="#899797"
                                            className="custom-class" // Optional additional styles
                                        />
                                    </div>
                                    <div>
                                        <InfoCard
                                            imageSrc={third}
                                            text="1:1 mentorships"
                                            backgroundColor="#2F2F31"
                                            textColor="#899797"
                                            className="custom-class" // Optional additional styles
                                        />
                                    </div>
                                    <div>
                                        <InfoCard
                                            imageSrc={four}
                                            text="Faculty from MAANG"
                                            backgroundColor="#2F2F31"
                                            textColor="#899797"
                                            className="custom-class" // Optional additional styles
                                        />
                                    </div>
                                </div>

                               
                               <div>
                                       <Rating />
                               </div>

                                <div className='flex gap-2 items-center'> 
                                      <p style={{color:"#96BBBB"}} className='text-[13px] sm:text-[16px] lg:text-[18px]'>Know in-depth details in our free webinar</p>
                                      <img src={hand} className='w-[35px] sm:w-[40px] lg:w-[42px]' alt="" />
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
