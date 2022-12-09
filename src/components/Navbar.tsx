import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="flex items-center justify-between border-b-2 border-black py-4 px-12">
            <div className="flex items-center gap-3 ">
                <h2 className="text-2xl font-black">
                    <Link href="/">LinkHub</Link>
                </h2>{' '}
                | <span>A home for all your links</span>
            </div>
            <ul className="flex items-center gap-4">
                <li
                    className=" bg-gray-600 px-5 py-2 text-white"
                    onClick={() => signIn()}
                >
                    Sign In
                </li>
                <li
                    className=" bg-gray-600 px-5 py-2 text-white"
                    onClick={() => signOut()}
                >
                    Sign Out
                </li>
                <li className=" bg-black px-5 py-2 text-white">
                    <Link href="/admin">Dashboard</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
