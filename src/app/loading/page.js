'use clients'
import React from 'react';
import { LuLoader } from "react-icons/lu";
const Loader = () => {
    return (
        <div>
            <div className='text-5xl flex items-center justify-center py-10'>
                <LuLoader className='animate-spin'/>
            </div>
        </div>
    );
};

export default Loader;