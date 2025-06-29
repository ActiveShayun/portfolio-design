import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';

const Title = ({text}) => {
    return (
        <div className='flex items-center text-white gap-2'>
            <span >
                <FaArrowDownLong
                    className='w-[44px] h-[44px] rounded-full border-2 p-2' /></span>
            <button className='py-2 px-3 rounded-full border-2'>{text}</button>
        </div>
    );
};

export default Title;