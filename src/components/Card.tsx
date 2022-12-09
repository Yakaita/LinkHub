import React from 'react';

interface CardProps {
    children?: React.ReactNode;
}

const Card: React.FC = ({ children }: CardProps) => {
    return (
        <div className="border-[3px] border-black bg-white p-4 shadow-offset-black">
            {children}
        </div>
    );
};

export default Card;
