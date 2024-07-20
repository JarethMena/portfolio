import React, { FC } from 'react';

interface DarkOverlayProps {
    children: React.ReactNode;
    clickBgClose?: boolean;
    bgClose?: () => void;
}

const Overlay: FC<DarkOverlayProps> = ({ children, clickBgClose = false, bgClose }) => {
    const handleClick = (e: React.MouseEvent) => {
        if (clickBgClose && bgClose && e.target === e.currentTarget) {
            bgClose();
        }
    };

    return (
        <div
            className="z-10 fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
            onClick={handleClick}
        >
            <div className="relative">
                {children}
            </div>
        </div>
    );
};

export default Overlay;
