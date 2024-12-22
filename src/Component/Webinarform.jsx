import React from 'react';
import { ArrowRight } from 'phosphor-react'; // Import the icon
import Button from './Button';
import Input from './Input';

const Webinarform = () => {
    return (
        <div>
            <div className='bg-white p-4 rounded-2xl'>
                <form action="">
                    <div className='p-4 flex flex-col gap-4'>
                        <p>
                            <span className='text-[22px] font-semibold'>Book a </span>
                            <span className='text-[22px] font-semibold bg-gradient-to-r from-blue-400 via-yellow-400 via-green-400 to-pink-400 bg-clip-text text-transparent'>free live webinar </span>
                            <span className='text-gray-400'>to know more</span>
                        </p>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor=""><p className='text-[14px]'>Name <span className='text-gray-400'>*</span></p></label>
                            <Input />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor=""><p className='text-[14px]'>Email <span className='text-gray-400'>*</span></p></label>
                            <Input />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor=""><p className='text-[14px]'>Phone Number <span className='text-gray-400'>*</span></p></label>
                            <Input />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='text-[14px]'>Experience <span className='text-gray-400'>*</span></p>
                            <div className='flex flex-col gap-2'>
                                <label className='flex items-center gap-4 cursor-pointer'>
                                    <input type="radio" name="topic" value="topic1" className='form-radio text-balck' style={{ transform: 'scale(1.3)' }} />
                                    <span className='text-gray-700 text-[15px]'>Working professional - Technical roles</span>
                                </label>
                                <label className='flex items-center gap-4 cursor-pointer'>
                                    <input type="radio" name="topic" value="topic2" className='form-radio text-blue-500' style={{ transform: 'scale(1.3)' }} />
                                    <span className='text-gray-700 text-[15px]'>Working professional - Non technical</span>
                                </label>
                                <label className='flex items-center gap-4 cursor-pointer'>
                                    <input type="radio" name="topic" value="topic3" className='form-radio text-blue-500' style={{ transform: 'scale(1.3)' }} />
                                    <span className='text-gray-700 text-[15px]'>College student - Final year</span>
                                </label>
                                <label className='flex items-center gap-4 cursor-pointer'>
                                    <input type="radio" name="topic" value="topic3" className='form-radio text-blue-500' style={{ transform: 'scale(1.3)' }} />
                                    <span className='text-gray-700 text-[15px]'>College student - 1st to pre-final year</span>
                                </label>
                                <label className='flex items-center gap-4 cursor-pointer'>
                                    <input type="radio" name="topic" value="topic3" className='form-radio text-blue-500' style={{ transform: 'scale(1.3)' }} />
                                    <span className='text-gray-700 text-[15px]'>Others</span>
                                </label>
                            </div>

                            <div>
                                <Button
                                    className='w-[100%] bg-green-500 flex items-center justify-center gap-2 flex items-center justify-center'
                                    label={
                                        <>
                                            Continue booking webinar
                                            <ArrowRight size={20} weight="bold" />
                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Webinarform;
