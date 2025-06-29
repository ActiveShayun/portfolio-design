import React from 'react';
import { FaPhone } from 'react-icons/fa6';

const GlobalBtn = ({ text }) => {
    return (

        <div className='w-[300px] lg:w-full'>
            <button className='flex justify-between items-center gap-4  border rounded-full pr-2 py-2 cursor-pointer'>
                <span className='border rounded-full p-2 font-normal'>
                    <FaPhone />
                </span>
                <span>{text}</span>
            </button>
        </div>

    );
};

export default GlobalBtn;