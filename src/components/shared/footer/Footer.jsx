'use client'
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer data-aos="zoom-in"
         className='max-w-7xl mx-auto  lg:h-[760px] bg-black py-10 lg:py-[90px] px-4 lg:px-16 rounded-lg'>
            <div className='h-full grid grid-cols-1 lg:grid-cols-7'>
                <div className='flex flex-col justify-between h-full col-span-3'>
                    <h3 className='text-4xl text-[#94bf31] font-bold uppercase'>devlop.me</h3>

                </div>
                {/* menu section */}
                <div className='col-span-4'>
                    <h4 className='text-6xl font-bold text-white mb-32'>As You Can</h4>
                    <div data-aos="zoom-in" className='lg:flex text-white justify-between w-full'>
                        <div className='mb-4'>
                            <div><h5 className='text-gray-400 lg:mb-4 mb-1 text-lg'>Say hello</h5></div>
                            <div className='flex flex-col gap-1 mb-4'>
                                <Link href={'/'} >HELLO@DEVLOP.ME.COM</Link>
                                <Link href={'/'} >MAHBUBUL@ME.COM</Link>
                            </div>
                        </div>
                        <div>
                            <div><h5 className='text-gray-400 lg:mb-4 mb-1 text-lg'>Menu</h5></div>
                            <div className='flex flex-col gap-1 mb-4'>
                                <Link href={'/'}>HOME</Link>
                                <Link href={'/'} >ABOUT</Link >
                                <Link href={'/'} >BLOG</Link >
                            </div>
                        </div>
                        <div>
                            <div><h5 className='text-gray-400 lg:mb-4 mb-1 text-lg'>Social</h5></div>
                            <div className='flex flex-col gap-1'>
                                <Link href={'/'} >TWITTER</Link>
                                <Link href={'/'} >INSTAGRAM</Link>
                                <Link href={'/'} >FACEBOOK</Link>
                                <Link href={'/'} >BEHANCE</Link>
                                <Link href={'/'} >DRIBBBLE</Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in"
                        className='text-white mt-4 text-lg mb-4'>
                        <h6 className='text-gray-300 lg:mb-4 mb-1'>Call</h6>
                        <p>+784549 4981 00</p>
                        <p>+8845 0100 211</p>
                    </div>
                </div>
            </div>
            {/* copy right section */}
            <div className='flex justify-between items-center text-gray-400'>
                <p className='text-3xl font-bold text-white'>BESNIK</p>
                <p>© devlop.me 2022</p>
                <p>PRIVACY - TERMS</p>
            </div>
        </footer>
    );
};

export default Footer;