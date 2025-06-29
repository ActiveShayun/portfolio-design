import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { PiInstagramLogo } from 'react-icons/pi';
import GlobalBtn from '../shared/globalBtn/GlobalBtn';
import BannerTitle from '../bannerTitle/BannerTitle';

const Banner = () => {
    return (
        <div className='lg:px-12 lg:py-[135px] py-12 relative lg:mt-0  bg-gradient-to-bl from-sky-100 via-lime-300 to-white opacity-80 
        rounded-lg lg:h-screen w-full'>
            <div>
                <BannerTitle />
            </div>
            {/* bottom section */}
            <div className='mt-8'>
                <div>
                    <div className='-rotate-90  w-[200px] -left-15 absolute  lg:-left-8'>
                        <p className='text-lg font-medium mb-3'>@williamrey</p>
                        <div className='flex  items-center gap-3'>
                            <div className='w-[50px] border-b'></div>
                            <div className='flex  items-center'>
                                <span >
                                    <FaFacebook className='w-[27px]' />
                                </span>
                                <span>
                                    <PiInstagramLogo className='w-[27px]' />
                                </span>
                                <span>
                                    <FaTwitter className='w-[27px]' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-63 ml-20 mt-12'>
                    <div>
                        <p className='mb-6 lg:w-3/5'>Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                        <GlobalBtn text={'Schedule a Call'} />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Banner;