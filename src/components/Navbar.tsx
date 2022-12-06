import React from 'react';

const Navbar: React.FC = () => {
    return (
        <>
            <div className="absolute left-1/2 -translate-x-1/2 translate-y-4 transform rounded-full bg-black py-4 px-6">
                <h2 className="font-black uppercase tracking-wider text-white">
                    Link
                    <span className="ml-1 rounded-md bg-violet-600 py-1 px-2 text-white">
                        Hub
                    </span>
                </h2>
            </div>
        </>
    );
};

export default Navbar;
