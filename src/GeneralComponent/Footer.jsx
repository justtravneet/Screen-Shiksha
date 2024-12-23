import React from 'react';
import backgroundImage from '../assets/Images/1111mountain-33077 (2).webp'; // Ensure this path is correct
import { Phone, EnvelopeSimple, ArrowUpRight } from "@phosphor-icons/react";

import newCnLogo from '../assets/Images/new-cn-logos-34283 (1).webp';
import instagram from '../assets/Images/instagram.svg';
import facebook from '../assets/Images/facebook.svg';
import linkedin from '../assets/Images/linkedin.svg';
import twitter from '../assets/Images/twitter.svg';
import youtube from '../assets/Images/youtube.svg';
import ListItem from '../component/Listitem';
import Importantlink from './Importantlink';

const Footer = () => {
    return (
        <div>
            <footer
                className="h-[auto] w-full shadow-lg z-50"
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "#413632" }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-[70px] sm:py-[100px]">
                    <div className='pl-[40px] md:pl-[100px]  flex flex-wrap justify-between gap-[30px]'>
                       
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
                                    <img  src={newCnLogo} width="148" height="26" alt="" />
                                </div>
                                <div>
                                    <img  src={newCnLogo} width="148" height="26" alt="" />
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

                        <div className='flex flex-col gap-[30px]'>
                            <div className="flex flex-col gap-4">
                                <p className="text-[17px] font-semibold text-white hover:opacity-75">
                                   Products
                                </p>
                                <div className='flex flex-col gap-[12px]'>
                                     <ListItem text="Job Bootcamp" />
                                     <ListItem text="Code 360" />
                                </div> 
                            </div>
                        </div>

                        <div className='flex flex-col gap-[30px]'>
                            <div className="flex flex-col gap-4">
                                <p className="text-[17px] font-semibold text-white hover:opacity-75">
                                   Community
                                </p>
                                <div className='flex flex-col gap-[12px]'>
                                     <ListItem text="10X Club" />
                                     <ListItem text="Student Chapters" />
                                     <ListItem text="Hire from us" />
                                </div> 
                            </div>
                        </div>
                     
                       

                    </div>

                    <div className='pl-[40px] md:pl-[100px] mt-[40px]   flex flex-col gap-[30px]'>
                        <div className="w-full h-[1px] bg-gray-500 opacity-50"></div>

                        <div className='flex flex-wrap justify-between items-center gap-[20px]'>
                             <div><p className='text-white text-[14px] opacity-50'>Copyright © Sunrise Mentors Pvt. Ltd.</p></div>
                             <div className='flex gap-[10px] items-center'>
                                 <div><img src={instagram} alt="" /></div>
                                 <div><img src={youtube} alt="" /></div>
                                 <div><img src={facebook} alt="" /></div>
                                 <div><img src={linkedin} alt="" /></div>
                                 <div><img src={twitter} alt="" /></div>
                             </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Importantlink />
                </div>
            </footer>
        </div>
    );
};

export default Footer;