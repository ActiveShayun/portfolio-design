'use clients'
import Image from 'next/image';
import React from 'react';
import errPic from '../../public/error.jpg'
import Link from 'next/link';


const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto relative'>
            <div className='w-full flex justify-center border'>
                <Image
                    className='mx-auto w-[1000px] h-[500px  flex justify-center'
                    src={errPic}
                    alt='error pic'
                    width={1000}
                    height={500}
                    priority />
            </div>
            <Link href={'/'} className='absolute top-[50%] text-center text-3xl font-bold'>Home</Link>
        </div>
    );
};

export default ErrorPage;