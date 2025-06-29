import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import DemoBtn from './demobtn/DemoBtn';

const About = () => {
    return (
        <div className='rounded-lg relative'>
            <div>
                <div className='lg:pt-36 py-12 lg:px-12 px-4'>
                    <div >
                        <div className='flex gap-2 items-center justify-end text-black'>
                            <span >
                                <FaArrowDownLong
                                    className='w-[44px] h-[44px] rounded-full border-2 p-2' /></span>
                            <button className='py-2 px-4 w-[120px] rounded-full border-2'> About</button>
                        </div>
                        {/* title */}
                        <div>
                            <h3 className='lg:text-7xl text-black text-5xl font-bold lg:text-center text-left mt-8'>
                                I’ve been
                                <span className='bg-black text-white rounded-xl lg:ml-2 px-2 inline-block pb-2 my-2 lg:my-0 lg:mb-4'>
                                    Developing</span> <br className='hidden lg:block ' />
                                Websites since
                                <span className='bg-black text-white rounded-xl ml-2 px-2 inline-block pb-2 mt-2'>
                                    2013</span></h3>
                        </div>
                    </div>
                    <div>
                        <p className='lg:text-center text-left lg:w-3/6 mx-auto mt-4'>
                            We start every new client interaction with an in-depth discovery call where
                            we get to know each other and recommend the best course of
                            action</p>
                    </div>
                </div>
            </div>
            {/* rotate button section */}
            <div className='px-4 lg:px-0'>
                <div className='grid grid-cols-1 lg:grid-cols-11 lg:mt-16 '>
                    {/* PREVIOUSLY WORKED ON */}
                    <div className='col-span-3 mb-4 lg:pl-10'>
                        <h5 className='text-2xl font-bold text-left'>
                            PREVIOUSLY <br /> WORKED ON</h5>
                    </div>
                    <div className='col-span-8'>
                        <div className='flex lg:justify-between justify-items-start gap-5 lg:gap-0 items-center'>
                            <div className='lg:rotate-15 bg-black rounded-full text-white lg:ml-14'>
                                <DemoBtn text={'awwwards.'} />
                            </div>
                            <div className='flex justify-between flex-wrap items-center gap-4 lg:gap-0'>
                                <div>
                                    <DemoBtn text={'Facebook'} />
                                </div>
                                <div className='lg:rotate-10'>
                                    <DemoBtn text={'Css Design Awards'} />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center flex-wrap gap-6 mt-4'>
                            <DemoBtn text={'Css Winner'} />
                            <div className='lg:-rotate-6'>
                                <DemoBtn text={'/thoughtworks'} />
                            </div>
                            <DemoBtn text={'AUTODESK'} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Crub Divider */}
            {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-[calc(100%+130px)] h-[100px]"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
                        fill="#ffffff"
                    ></path>
                </svg>
            </div> */}
        </div>


    );
};

export default About;