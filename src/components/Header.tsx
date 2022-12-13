import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="sticky flex items-center justify-center bg-[#1D1D1D] py-4 pl-12 pr-4 font-inter font-black ">
            <h2 className="text-center text-2xl text-white md:text-left">
                LinkHub
            </h2>
        </header>
    );
};

export default Header;
