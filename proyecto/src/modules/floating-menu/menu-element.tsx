import React, { useState } from "react";
import {MenuElementItem} from "../types/MenuElementTypes.tsx";

const MenuElement: React.FC<MenuElementItem> = ({ icon, tooltip, execute }) => {
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
                className="bg-mena-ash dark:bg-mena-snow flex flex-row items-center justify-center hover:cursor-pointer w-12 h-12  rounded-full transition-transform duration-200 ease-in-out rainbow-hover-aura hover:scale-125 "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={execute}
            >
                {icon}
            </div>
            {isVisible &&
                <div className="text-mena-wolf dark:text-mena-graphite bg-mena-graphite dark:bg-mena-snow min-w-32 text-center absolute bottom-20 left-1/2 transform -translate-x-1/2   text-xs px-2 py-2 w-full rounded-md">
                    {tooltip}
                </div>
            }
        </div>
    );
};

export default MenuElement;
