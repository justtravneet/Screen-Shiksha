import React from 'react'
import first from '../assets/Images/first.svg';
const Beyoundlearning = () => {
    return (
        <div>
            <div className='py-[50px]'>
                <div className='flex flex-col gap-[40px]'>
                    <p className='text-center text-[25px] text-white'>Benefits beyond learning</p>
                    <div className='flex flex-col gap-[30px]'>

                        <div className="flex gap-[20px] sm:gap-[0px] justify-around">

                            <div style={{ display:"flex",alignItems:"center",justifyContent:"center", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }} className="flex flex-col gap-[10px] py-[40px] w-[30%] md:w-[30%] shadow-[0_0_20px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4  rounded-2xl shadow-md">
                                <img src={first} width="30" alt="" />
                                <p className='text-white text-[12px] text-center md:text-[19px] font-semibold'>Projects & hackathons</p>
                            </div>

                            <div style={{ display:"flex",alignItems:"center",justifyContent:"center", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }}className=" flex flex-col gap-[10px] w-[30%] md:w-[30%] shadow-[0_0_30px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4 rounded-2xl shadow-md">
                                <img src={first} width="30" alt="" />
                                <p className='text-white text-[12px] text-center md:text-[19px] font-semibold'>Fastest doubt support</p>
                                
                            </div>
                            <div style={{ display:"flex",alignItems:"center",justifyContent:"center", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }} className=" flex flex-col gap-[10px] w-[30%] md:w-[30%] shadow-[0_0_30px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4  rounded-2xl shadow-md">
                                <img src={first} width="30" alt="" />
                                <p className='text-white text-[12px] text-center md:text-[19px] font-semibold'>Self-paced classes</p>
                               
                            </div>
                        </div>


                        <div className="flex gap-[20px] sm:gap-[0px] flex-wrap justify-around">

                            <div style={{display:"flex",alignItems:"center",justifyContent:"center", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }} className="py-[40px] justify-center flex flex-col gap-[10px] w-full md:w-[47%] shadow-[0_0_30px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4 rounded-2xl shadow-md">
                                <img className='' src={first} width="30" alt="" />
                                <p className='text-white text-[19px] text-center font-semibold'>Fastest doubt support</p>
                            </div>



                            <div style={{display:"flex",alignItems:"center",justifyContent:"center", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", backgroundColor: "#1F1F1F", borderTop: "1px solid rgba(255, 255, 255, 0.5)", borderLeft: "1px solid rgba(255, 255, 255, 0.5)", }} className="py-[40px] justify-center flex flex-col gap-[10px] w-full md:w-[47%] shadow-[0_0_30px_5px_rgba(255,255,255,0.5) bg-gray-400 p-4 rounded-2xl shadow-md">
                                <img className='' src={first} width="30" alt="" />
                                <p className='text-white text-[19px] text-center font-semibold'>Fastest doubt support</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beyoundlearning