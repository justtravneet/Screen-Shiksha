import React, { useState } from 'react';
import Button from '../component/Button';



const FullstackHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isJobBootcampOpen, setIsJobBootcampOpen] = useState(false);
    const [isIITCertificationsOpen, setIsIITCertificationsOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleJobBootcampMenu = () => {
        setIsJobBootcampOpen(!isJobBootcampOpen);
    };

    const toggleIITCertificationsMenu = () => {
        setIsIITCertificationsOpen(!isIITCertificationsOpen);
    };

    return (
        <header className="fixed top-0 w-full bg-white shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-20">
                        <div>
                            <svg width="148" height="26" viewBox="0 0 148 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_12803_31699)">
                                    <path d="M38.0981 18.0392C35.2244 18.0392 33.0466 15.8585 33.0466 13.0036C33.0466 10.1487 35.2244 7.9856 38.0981 7.9856C40.4894 7.9856 42.3464 9.43943 42.8816 11.6378H40.9183C40.4182 10.5386 39.3478 9.86449 38.0981 9.86449C36.3668 9.86449 35.0635 11.2294 35.0635 13.0027C35.0635 14.776 36.3844 16.1586 38.0981 16.1586C39.3654 16.1586 40.3822 15.4844 40.9007 14.3149H42.8992C42.3815 16.5484 40.4719 18.0383 38.0981 18.0383V18.0392Z" fill="#414141" />
                                    <path d="M49.3075 18.0392C46.345 18.0392 44.1497 15.8937 44.1497 13.0036C44.1497 10.1135 46.345 7.9856 49.3075 7.9856C52.27 7.9856 54.4478 10.1311 54.4478 13.0036C54.4478 15.8761 52.2525 18.0392 49.3075 18.0392ZM49.3075 16.1594C51.1284 16.1594 52.4309 14.8473 52.4309 13.0036C52.4309 11.1599 51.1276 9.86537 49.3075 9.86537C47.4874 9.86537 46.1666 11.1775 46.1666 13.0036C46.1666 14.8297 47.4699 16.1594 49.3075 16.1594Z" fill="#414141" />
                                    <path d="M64.0552 4.79468H66.0361V17.8088H64.5368L64.2688 16.7096C63.4119 17.543 62.2167 18.0393 60.8783 18.0393C57.9509 18.0393 55.8628 15.8762 55.8628 13.0213C55.8628 10.1665 57.9509 7.98572 60.8783 7.98572C62.1095 7.98572 63.1984 8.39318 64.0552 9.10249V4.79468ZM61.0206 16.1596C62.8416 16.1596 64.18 14.7946 64.18 13.0037C64.18 11.2128 62.8416 9.86549 61.0206 9.86549C59.1997 9.86549 57.8797 11.2128 57.8797 13.0037C57.8797 14.7946 59.2182 16.1596 61.0206 16.1596Z" fill="#414141" />
                                    <path d="M68.8289 6.7456V4.70654H70.8633V6.7456H68.8289ZM68.8649 17.791V8.21704H70.8458V17.791H68.8649Z" fill="#414141" />
                                    <path d="M78.7447 8.00415C81.0112 8.00415 82.4217 9.67095 82.4217 12.0286V17.7911H80.4409V12.4369C80.4409 10.6997 79.6736 9.77744 78.228 9.77744C76.7111 9.77744 75.6398 10.9831 75.6398 12.6675V17.7911H73.6589V8.21712H75.0334L75.4263 9.56447C76.1399 8.58938 77.336 8.00415 78.7456 8.00415H78.7447Z" fill="#414141" />
                                    <path d="M92.981 8.217H94.2843V16.5501C94.2843 19.5995 92.4634 21.4616 89.4832 21.4616C87.0023 21.4616 85.2534 20.1847 84.7718 18.0928H86.7351C87.1104 19.1392 88.2529 19.7236 89.4665 19.7236C91.1267 19.7236 92.3579 18.6244 92.3579 16.8159V16.3724C91.5186 17.0993 90.4122 17.5252 89.1625 17.5252C86.4671 17.5252 84.3975 15.451 84.3975 12.7563C84.3975 10.0616 86.468 7.9873 89.1625 7.9873C90.573 7.9873 91.8042 8.55493 92.6787 9.45874L92.9827 8.21788L92.981 8.217ZM89.376 15.6991C91.0897 15.6991 92.3386 14.4583 92.3386 12.7563C92.3386 11.0543 91.1073 9.831 89.376 9.831C87.6447 9.831 86.4126 11.0895 86.4126 12.7563C86.4126 14.4231 87.6623 15.6991 89.376 15.6991Z" fill="#414141" />
                                    <path d="M101.867 8.03931C104.187 8.03931 105.633 9.68851 105.633 12.1174V17.7911H104.758V12.2952C104.758 10.1144 103.616 8.83751 101.67 8.83751C99.7242 8.83751 98.2609 10.4154 98.2609 12.3304V17.7911H97.3865V8.21708H98.0289L98.2073 10.1673C98.9033 8.87271 100.278 8.03931 101.866 8.03931H101.867Z" fill="#414141" />
                                    <path d="M108.695 6.24841V5.02515H109.802V6.24841H108.695ZM108.82 17.7911V8.21706H109.695V17.7911H108.82Z" fill="#414141" />
                                    <path d="M117.536 8.03931C119.856 8.03931 121.302 9.68851 121.302 12.1174V17.7911H120.428V12.2952C120.428 10.1144 119.285 8.83751 117.339 8.83751C115.394 8.83751 113.93 10.4154 113.93 12.3304V17.7911H113.056V8.21708H113.698L113.877 10.1673C114.573 8.87271 115.947 8.03931 117.535 8.03931H117.536Z" fill="#414141" />
                                    <path d="M124.597 6.24841V5.02515H125.686V6.24841H124.597ZM122.062 21.1951V20.3969H122.473C123.883 20.3969 124.704 19.5811 124.704 18.1809V8.21706H125.578V18.2346C125.578 20.0431 124.401 21.1959 122.58 21.1959H122.062V21.1951Z" fill="#414141" />
                                    <path d="M137.359 8.21717H138.073V17.7912H137.342L137.234 15.7169C136.396 17.0994 134.897 17.9865 133.04 17.9865C130.22 17.9865 128.095 15.841 128.095 13.0046C128.095 10.1682 130.22 8.04028 133.04 8.04028C134.896 8.04028 136.395 8.92649 137.234 10.3099L137.359 8.21805V8.21717ZM133.093 17.1531C135.467 17.1531 137.198 15.3974 137.198 13.0046C137.198 10.6118 135.467 8.87368 133.093 8.87368C130.72 8.87368 128.988 10.6646 128.988 13.0046C128.988 15.3446 130.756 17.1531 133.093 17.1531Z" fill="#414141" />
                                    <path d="M144.305 17.9864C142.092 17.9864 140.7 16.8873 140.575 15.0964H141.432C141.556 16.4261 142.663 17.1882 144.323 17.1882C145.983 17.1882 147.125 16.4261 147.125 15.2205C147.125 13.7314 145.679 13.4648 144.18 13.2166C142.52 12.9332 140.753 12.6138 140.753 10.646C140.753 9.08568 142.164 8.03931 144.251 8.03931C146.338 8.03931 147.677 9.10328 147.749 10.8053H146.91C146.839 9.54682 145.857 8.81991 144.233 8.81991C142.609 8.81991 141.609 9.54682 141.609 10.6284C141.609 11.9229 142.912 12.135 144.393 12.3841C146.071 12.6675 147.998 12.9869 147.998 15.1853C147.998 16.8873 146.516 17.9864 144.304 17.9864H144.305Z" fill="#414141" />
                                    <path d="M12.8274 26C19.9117 26 25.6548 20.1797 25.6548 13C25.6548 5.8203 19.9117 0 12.8274 0C5.74301 0 0 5.8203 0 13C0 20.1797 5.74301 26 12.8274 26Z" fill="#414141" />
                                    <path d="M4.65156 13.0407C4.61289 14.3669 4.84315 15.6931 5.26674 16.9788C5.65167 18.071 6.38285 19.0073 7.34605 19.67C8.46216 20.3723 9.74349 20.6451 11.0802 20.6451H19.2797V16.7342H11.067C9.06152 16.7342 8.09833 15.3534 8.09833 13.0486V13.0512C8.09833 10.7464 9.0624 9.37087 11.067 9.37087H19.2788V5.45996H11.0793C9.78304 5.45996 8.46216 5.73277 7.34517 6.43505C6.38285 7.09772 5.65167 8.03321 5.26586 9.12622C4.84227 10.4128 4.61201 11.7382 4.65068 13.0644" fill="url(#paint0_linear_12803_31699)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.63184 12.2407L13.4811 12.9861C13.4811 12.9861 10.6574 15.9589 9.63184 12.2407Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6594 12.2539L14.927 13.038C14.927 13.038 18.1593 15.9791 18.6594 12.2539Z" fill="white" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_12803_31699" x1="4.64717" y1="13.053" x2="19.2788" y2="13.053" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F16222" />
                                        <stop offset="0.26" stop-color="#F37421" />
                                        <stop offset="0.71" stop-color="#F68D1E" />
                                        <stop offset="1" stop-color="#F7981D" />
                                    </linearGradient>
                                    <clipPath id="clip0_12803_31699">
                                        <rect width="148" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="hidden sm:flex sm:space-x-8 hidden lg:block">
                            <ul className="flex space-x-8 hidden lg:block">
                                <li
                                 onMouseEnter={() => setIsJobBootcampOpen(true)}
                                 onMouseLeave={() => setIsJobBootcampOpen(false)}
                                 className=" relative text-black  hover:bg-gray-100 hover:text-gray-400 inline-flex items-center px-2 py-2 rounded-xl border-b-2 border-transparent text-sm font-medium"
                                 >
                                    <a href="#"><p className='text-[18px] text-black'>Job Bootcamp</p></a>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                    {isJobBootcampOpen && (
                                        <ul className="absolute left-0 mt-2 space-y-2 bg-white border rounded-md shadow-lg">
                                            <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 1</a></li>
                                            <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 2</a></li>
                                        </ul>
                                    )}
                                   
                                </li>
                                <li
                                 onMouseEnter={() => setIsIITCertificationsOpen(true)}
                                 onMouseLeave={() => setIsIITCertificationsOpen(false)}
                                 className=" relative text-black  hover:bg-gray-100 hover:text-gray-400 inline-flex items-center px-2 py-2 rounded-xl border-b-2 border-transparent text-sm font-medium"
                                 >
                                    <a href="#"><p className='text-[18px] text-black'>IIT Certifications</p></a>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                    {isIITCertificationsOpen  && (
                                        <ul className="absolute left-0 mt-2 space-y-2 bg-white border rounded-md shadow-lg">
                                            <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 1</a></li>
                                            <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 2</a></li>
                                        </ul>
                                    )}
                                   
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            label="Request Callback"
                            className="bg-green-500 hover:bg-green-600 hidden lg:block"
                        />
                        <Button
                            label="Login"
                            className="bg-green-500  hidden lg:block"
                        />
                        <button
                            className="lg:hidden bg-black flex gap-2 items-center text-white justify-center px-2 py-2 rounded-md"
                            onClick={toggleMenu}
                        >
                            <span className=" text-[13px]"><p className='mt-[0px] '>Courses</p></span>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg p-4">
                    <ul className="space-y-4">
                        <li className="text-[#455379] hover:text-gray-400">
                            <a href="#">Job Bootcamp</a>
                        </li>
                        <li className="text-black-500 hover:text-gray-400">
                            <a href="#">Data Analytics</a>
                        </li>
                    </ul>
                    <div className="mt-4 space-y-2">
                        <Button
                            label="Request Callback"
                            className="bg-green-500 hover:bg-green-600 w-full"
                        />
                        <Button
                            label="Login"
                            className="bg-green-500w-full"
                        />
                    </div>
                </div>
            )}
        </header>
    );
};

export default FullstackHeader;
