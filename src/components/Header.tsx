import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    const { data: session } = useSession();

    return (
        <header className="sticky flex items-center justify-between bg-white py-4 px-12 font-inter font-black ">
            <h2 className="text-left text-2xl text-gray-500">LinkHub</h2>
            <div className="flex flex-row-reverse items-center gap-8">
                <img
                    src={session?.user?.image}
                    alt="Profile Image"
                    className="w-12 rounded-full"
                />
                <ul className="flex items-center gap-4 font-satoshi font-semibold text-gray-500/75">
                    <li className="rounded-md border-[2px] border-gray-500/25 px-4 py-[4px]">
                        <Link href="/feedback">Feedback</Link>
                    </li>
                    <li className="">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
