import React from 'react';
import backgroundImage from '../assets/Images/1111mountain-33077 (2).webp'; // Ensure this path is correct
import { Phone, EnvelopeSimple, ArrowUpRight } from "@phosphor-icons/react";

import newCnLogo from '../assets/Images/new-cn-logos-34283 (1).webp';
import ListItem from '../component/Listitem';

const Footer = () => {
    return (
        <div>
            <footer
                className="h-[500px] w-full shadow-lg z-50"
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "#413632" }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className='pl-[100px] py-[20px] flex gap-[40px]'>
                        <div className='flex flex-col gap-[30px]'>
                            <div>
                                <img src={newCnLogo} alt="New CN Logo" width="148" height="26" />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <p className='text-[17px] font-semibold text-white hover:opacity-75'>Contact Us</p>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className='items-center gap-3'>
                                    <Phone color='#BBBCBD' size={30} weight="fill" />
                                    <p className='text-[16px] text-white hover:opacity-75'> 1800-123-3598</p>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className='items-center gap-3'>
                                    <EnvelopeSimple color='#BBBCBD' size={30} weight="fill" />
                                    <p className='text-[16px] text-white hover:opacity-75'>contact@codingninjas.com</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <p className='text-[17px] font-semibold text-white hover:opacity-75'>Our offerings</p>
                                <div>
                                    <img className='w-[145px]' src={newCnLogo} alt="" />
                                </div>
                                <div>
                                    <img className='w-[145px]' src={newCnLogo} alt="" />
                                </div>
                            </div>
                        </div>



                        <div className='flex flex-col gap-[30px]'>


                            <div className="flex flex-col gap-4">
                                <p className="text-[17px] font-semibold text-white hover:opacity-75">
                                    Coding Ninjas
                                </p>
                                <div className='flex flex-col gap-[12px]'>
                                     <ListItem text="Careers" />
                                     <ListItem text="Privacy policy" />
                                     <ListItem text="Terms & conditions" />
                                     <ListItem text="Pricing & refund policy" />
                                     <ListItem text="Bug bounty" />
                                     <ListItem text="Review" />
                                     <ListItem text="Press release" />
                                     
                                </div> 
                            </div>


                            
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;