import React from 'react';

interface DashboardLayoutProps {
    children?: React.ReactNode;
}

const DashboardLayout: React.FC = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="pb-4">
            <h3 className="pt-8 pb-2 font-satoshi text-3xl font-semibold text-white">
                Dashboard
            </h3>
            <hr className="mb-8 opacity-20" />
            {children}
        </div>
    );
};

export default DashboardLayout;
