'use client';
import Link from 'next/link';
import React from 'react';
import ButtonNav from '../shared/ButtonNav';

const Navbar = () => {

    const deskTopMenu = <>
        <Link href={'/'} className='font-medium'>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/blog'}>Portfolio</Link>
        <Link href={'/dashboard'}>Blog</Link>
    </>


    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {deskTopMenu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold uppercase">devlop.me</a>
            </div>
            <div className='flex items-center gap-12'>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="font-medium menu menu-horizontal px-1 flex items-center gap-10">
                        {deskTopMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ButtonNav text={'Start Project'}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;