import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';

const Title = ({ text, color }) => {
    return (
        <div className={`flex items-center gap-2`}>
            <span >
                <FaArrowDownLong
                    className={` ${color ? 'text-black border border-black' : 'text-white '} w-[44px] h-[44px] rounded-full border-2 p-2 -2`} /></span>
            <button
                className={` ${color ?
                    'text-black border border-black'
                    : 'text-white '} py-2 px-3 rounded-full border-2`}>
                {text}
            </button>
        </div>
    );
};

export default Title;