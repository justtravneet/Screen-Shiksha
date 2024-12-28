import React from 'react';

const GeneralCard = ({ imageSrc, imageAlt, title, listItems, extraContent, backgroundColor }) => {
    return (
        <div>
            <div className='flex items-center justify-center gap-[60px]'>
                {/* Circle Icon */}
                <div className='hidden md:flex items-center justify-center bg-white rounded-full w-[70px] h-[70px] shadow-md'>
                    <div>
                        <img src={imageSrc} className='w-[35px]' alt={imageAlt || 'Icon'} />
                    </div>
                </div>

                {/* Card Content */}
                <div className='p-4 bg-white rounded-xl shadow-md'>
                    <div className='flex items-center md:items-start gap-[15px]'>
                        <div>
                            <div>
                                {/* Image for smaller screens */}
                                <img src={imageSrc} className='w-[35px] md:hidden' alt={imageAlt || 'Icon'} />
                                {/* Title for larger screens */}
                                <p className='text-[16px] font-bold hidden md:block'>{title}</p>
                            </div>
                        </div>
                        <div>
                            {/* List Items */}
                            <ul className="list-disc list-inside ml-4 gap-[5px]">
                                <p className='text-[16px] font-bold md:hidden'>{title}</p>
                                {listItems.map((item, index) => (
                                    <li key={index} className="text-gray-500 text-[14px]">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Content with Dynamic Background Color */}
            {extraContent && (
                <div
                    style={{ backgroundColor: backgroundColor || "#FFE9BF" }} // Default background color
                    className="px-1 py-1 w-[70px] text-center mt-[-40px] ml-[-60px] absolute hidden md:block rounded-br-xl rounded-tl-xl"
                >
                    <p className='text-[13px] font-semibold'>{extraContent}</p>
                </div>
            )}
        </div>
    );
};

export default GeneralCard;
