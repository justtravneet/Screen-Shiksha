import React from 'react';
import visa from '../assets/Images/visa.webp';
import paypal from '../assets/Images/paypal.webp';
import upi from '../assets/Images/upi.webp';
import nocostemi from '../assets/Images/nocostemi.webp';
import safe from '../assets/Images/100-32278.webp';
import razorpay from '../assets/Images/razorpay.webp';

const Importantlink = () => {
    return (
        <div>
            <div className="w-full bg-red-600 shadow-lg z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="py-[50px] md:py-[80px] flex flex-col gap-[60px]">
                        <div className="flex flex-col gap-[30px]">
                            <div>
                                <p className="text-[20px] text-white font-semibold">Important Links</p>
                            </div>

                            <div className="flex flex-wrap items-start gap-[10px]">
                                <p className="text-[15px] text-white font-semibold">
                                    Job Bootcamp <br /> for professionals
                                </p>
                                <div className="flex flex-wrap items-center gap-[5px] md:gap-[15px]">
                                    <div>
                                        <a href="http://">
                                            <p className="text-white opacity-75 text-[14px] underline decoration-solid">
                                                Web Development Bootcamp (MERN & Springboot)
                                            </p>
                                        </a>
                                    </div>
                                    <div className="h-4 w-[1px] bg-white opacity-75"></div>
                                    <div>
                                        <a href="http://">
                                            <p className="text-white text-[14px] underline decoration-solid opacity-75">
                                                Data Analytics Job Bootcamp
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between flex-wrap gap-[10px]">
                                <div className="flex flex-col md:flex-row items-start gap-[10px] md:gap-[30px]">
                                    <p className="text-[15px] text-white font-semibold">
                                        We accept payments <br /> using:
                                    </p>
                                    <div className="flex flex-wrap gap-[8px]">
                                        <img src={visa} className="rounded-md" width="60" height="20" alt="" />
                                        <img src={paypal} className="rounded-md" width="60" height="20" alt="" />
                                        <img src={upi} className="rounded-md" width="60" height="20" alt="" />
                                        <img src={nocostemi} className="rounded-md" width="100" height="20" alt="" />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-[10px] md:gap-[30px]">
                                    <div className="flex flex-wrap gap-[8px]">
                                        <img src={safe} className="rounded-md" width="220" height="20" alt="" />
                                        <img src={razorpay} className="rounded-md" width="60" height="20" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <p className="screen-shiksha text-[35px] sm:text-[55px] md:text-[75px] lg:text-[95px] xl:text-[105px] font-bold opacity-75 text-center">
                                Screen Shiksha
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Importantlink;
