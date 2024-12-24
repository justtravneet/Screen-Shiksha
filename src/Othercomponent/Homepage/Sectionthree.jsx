import React, { useState, useEffect } from 'react';
import Transformtext from '../../component/Transformtext';

const Sectionthree = () => {
    const [lineHeight, setLineHeight] = useState(0); // Track the height of the first line as it grows
    const [secondLineHeight, setSecondLineHeight] = useState(0); // Track the height of the second line as it grows

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // Calculate the line height based on scroll position
            const newLineHeight = Math.min(scrollTop / 3, 400); // Max height of the first line is 400px
            setLineHeight(newLineHeight); // Update the first line height

            const newSecondLineHeight = Math.min(scrollTop / 4, 300); // Max height of the second line is 300px
            setSecondLineHeight(newSecondLineHeight); // Update the second line height
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full h-[1000px] pb-[120px]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex flex-col items-center py-[50px]">
                    {/* First Section */}
                    <div className="text-center font-bold">
                        <p className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[60px]">
                            8 years of
                        </p>
                        <p className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[60px]">
                            shaping <br />
                            tech careers
                        </p>
                    </div>

                    {/* First SVG Vertical Line between sections */}
                    <svg
                        width="5"
                        height="400" // Set a max height for the line
                        viewBox="0 0 5 400"
                        xmlns="http://www.w3.org/2000/svg"
                        className="my-0"
                    >
                        <line
                            x1="2.5" // Start in the middle horizontally
                            y1="0"
                            x2="2.5" // Keep it in the same horizontal position
                            y2={lineHeight} // The height of the first line will be dynamically updated
                            stroke="green"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="400" // Set the dash length to the maximum height
                            strokeDashoffset={400 - lineHeight} // Create the drawing effect
                            style={{
                                transition: 'stroke-dashoffset 0.2s ease-out',
                            }}
                        />
                    </svg>

                   <div>
                     <Transformtext />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Sectionthree;
