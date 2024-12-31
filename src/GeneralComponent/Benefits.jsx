import React from 'react'
import first from '../assets/Images/first.svg';
const Benefits = () => {
    return (
        <div>
            <div className='py-[50px]'>
                <div className='flex flex-col gap-[40px]'>
                    <p className='text-center text-[25px] text-white'>Job Bootcamp Benefits</p>
                    <div className='flex flex-col gap-[30px]'>
                        <div className="flex gap-[20px] sm:gap-[0px] flex-wrap justify-around">

                            <div style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }} className="flex flex-col gap-[10px] w-full md:w-[60%] shadow-[0_0_20px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4  rounded-2xl shadow-md">
                                <img src={first} width="30" alt="" />
                                <p className='text-white text-[19px] font-semibold'>1:1 expert session</p>
                                <p style={{ color: "#939393" }} className='text-white'>Connects theoretical understanding with practical implementation through their insights</p>
                            </div>

                            <div style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }} className=" flex flex-col gap-[10px] w-full md:w-[30%] shadow-[0_0_30px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4  rounded-2xl shadow-md">
                                <img src={first} width="30" alt="" />
                                <p className='text-white text-[19px] font-semibold'>Expert faculty from MAANG</p>
                                <p style={{ color: "#939393" }} className='text-white'>Top-tier education enriched by practical knowledge and innovation</p>
                            </div>
                        </div>
                        <div className="flex gap-[20px] sm:gap-[0px] flex-wrap justify-around">

                            <div style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }} className="flex flex-col gap-[10px] w-full md:w-[30%] shadow-[0_0_20px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4  rounded-2xl shadow-md">
                                <img src={first} width="30" alt="" />
                                <p className='text-white text-[19px] font-semibold'>Projects & hackathons</p>
                                <p style={{ color: "#939393" }} className='text-white'>Hands-on learning to spark creative problem-solving</p>
                            </div>

                            <div style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }} className=" flex flex-col gap-[10px] w-full md:w-[30%] shadow-[0_0_30px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4 rounded-2xl shadow-md">
                                <img src={first} width="30" alt="" />
                                <p className='text-white text-[19px] font-semibold'>Fastest doubt support</p>
                                <p style={{ color: "#939393" }} className='text-white'>Personalised assistance for a clear understanding of concepts</p>
                            </div>
                            <div style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }} className=" flex flex-col gap-[10px] w-full md:w-[30%] shadow-[0_0_30px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4  rounded-2xl shadow-md">
                                <img src={first} width="30" alt="" />
                                <p className='text-white text-[19px] font-semibold'>Self-paced classes</p>
                                <p style={{ color: "#939393" }} className='text-white'>Learn at your pace with practice and instant feedback</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Benefits