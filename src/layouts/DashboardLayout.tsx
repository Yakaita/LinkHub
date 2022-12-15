import React from 'react';

interface DashboardLayoutProps {
    children?: React.ReactNode;
}

const DashboardLayout: React.FC = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="pb-4">
            <div className="flex items-center justify-between pt-8 pb-2">
                <h3 className=" font-satoshi text-3xl font-bold text-gray-500">
                    Dashboard
                </h3>
                <button className="rounded-md border-[2px] border-gray-500/25 px-4 py-[4px] font-satoshi font-bold text-gray-500/75">
                    Create
                </button>
            </div>
            <hr className="mb-4" />
            <div className="h-full w-full">{children}</div>
        </div>
    );
};

export default DashboardLayout;
