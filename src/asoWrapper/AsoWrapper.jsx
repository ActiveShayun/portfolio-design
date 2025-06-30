'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AsoWrapper = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        })
    }, [])
    return (
        <> {children} </>


    );
};

export default AsoWrapper;