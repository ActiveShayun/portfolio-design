import React from 'react';
import Form from './Form';
import GlobalBtn from '../shared/globalBtn/GlobalBtn';
import Title from '../shared/subtitle/Title';

const Contact = () => {
    return (
        <div className='lg:py-16 px-4 lg:px-12 py-8  grid lg:grid-cols-5 grid-cols-1 justify-between bg-gradient-to-bl from-[#caff0f] to-white'>
            <div className='col-span-3'>
                <div>
                    <Title color={true} text={'Contact'} />
                </div>
                <div>
                    <h2 className='mb-2 text-5xl lg:text-6xl font-bold'>
                        Interested in
                        <br className='hidden lg:block' />
                        <span className='my-4 inline-block'>
                            <span className='bg-black inline-block text-white px-2 rounded-xl'>
                                work
                            </span>
                            together?
                        </span>
                    </h2>
                    <p className='lg:w-4/5 mb-5'>We start every new client interaction with an in-depth discovery call where
                        we get to know each other</p>
                    <GlobalBtn text={'Schedule a Call'} />
                </div>
            </div>

            {/* form section */}
            <div className='w-full col-span-2'>
                <Form />
            </div>
        </div >

    );
};

export default Contact;