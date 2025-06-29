import React from 'react';

const DemoBtn = ({ text }) => {
    return (
        <div data-aos="zoom-out">
            <button className='lg:w-[276px] border rounded-full lx:px-10 px-4 py-2 cursor-pointer'>
                {text}
            </button>
        </div >
    );
};

export default DemoBtn;