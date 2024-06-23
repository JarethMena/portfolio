import React, { useState } from "react";

const MenuElement: React.FC<MenuElement> = ({ icon, tooltip, execute }) => {
    const [isVisible, setVisible] = useState(false);
    const handleMouseEnter = () => {
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };

    return (
        <div className="relative">
            <div
                className="bg-neutral-600 dark:bg-neutral-200 flex flex-row items-center justify-center mx-2 hover:cursor-pointer w-12 h-12  rounded-full transition-transform duration-200 ease-in-out rainbow-hover-aura hover:scale-125 active:bg-neutral-800 active:text-white "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={execute}
            >
                {icon}
            </div>
            {isVisible &&
                <div className="text-neutral-100 dark:text-neutral-900 bg-neutral-800 dark:bg-neutral-100 min-w-32 text-center absolute bottom-20 left-1/2 transform -translate-x-1/2   text-xs px-2 py-2 w-full rounded-md">
                    {tooltip}
                </div>
            }
        </div>
    );
};

export default MenuElement;
