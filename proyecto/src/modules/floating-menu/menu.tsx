import React, {useState} from "react";
import MenuElement from "./menu-element.tsx";
import {MenuElementItem} from "../types/MenuElementTypes.tsx";

const Menu: React.FC<{MenuElementsList: MenuElementItem[]}> = ({MenuElementsList}) => {

    const [hoveredOnce, setHoveredOnce] = useState<boolean>(false);

    const hoverController = () => {
        setHoveredOnce(true);
    }

    const renderMenuElements:React.FC<MenuElementItem[]> = (list) => {
        const renderedElements = list.map((el) => {
            return <MenuElement tooltip={el.tooltip} execute={el.execute} icon={el.icon} key={el.key}/>;
        })
        return <>{renderedElements}</>
    }

    return (
            <div className="max-[800px]:w-full z-10 fixed bottom-0 left-1/2 -translate-x-1/2">
                { !hoveredOnce && <div
                    className=" w-full max-[800px]:hidden flex justify-center items-center bottom-10 relative text-white text-xs">
                    <div className="rainbow-passive-aura p-4 rounded-full bg-neutral-800">Hover me to use the menu!</div>
                </div>}
                <div onMouseOver={hoverController} className={`gap-4 justify-center transition-all transform min-[800px]:hover:translate-y-[-20px] opacity-20 max-[800px]:opacity-100 hover:opacity-100 dark:bg-mena-light bg-mena-graphite flex flex-row items-center p-5 rounded-full max-[800px]:rounded-none hover:drop-shadow-lg duration-150 ease-in-out ${!hoveredOnce && 'min-[800px]:animate-bounce '}`}>
                    {renderMenuElements(MenuElementsList)}
                </div>
            </div>
    );
}

export default Menu;