import React, {useState} from "react";
import MenuElement from "./menu-element.tsx";

const Menu: React.FC<{MenuElementsList: MenuElement[]}> = ({MenuElementsList}) => {

    const [hoveredOnce, setHoveredOnce] = useState<boolean>(false);

    const hoverController = () => {
        setHoveredOnce(true);
    }

    const renderMenuElements:React.FC<MenuElement[]> = (list) => {
        const renderedElements = list.map((el) => {
            return <MenuElement tooltip={el.tooltip} execute={el.execute} icon={el.icon} key={el.key}/>;
        })
        return <>{renderedElements}</>
    }

    return (
        <div>
            <div onMouseOver={hoverController} className=" fixed h-24 -bottom-10 left-1/2 transform -translate-x-1/2 justify-around opacity-20 hover:opacity-100 transition-all duration-200 ease-in-out hover:h-36">

                <div className={`dark:bg-neutral-100 bg-neutral-800  flex flex-row items-center p-6 rounded-full hover:drop-shadow-lg transition-all duration-150 ease-in-out ${!hoveredOnce && 'animate-bounce '}`}>
                    {renderMenuElements(MenuElementsList)}
                </div>

            </div>
            { !hoveredOnce && <div
                className="text-center absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-4 py-4 rounded-md shadow-lg rainbow-passive-aura">
                Hover me to use the menu!
            </div>}
        </div>


    );
}

export default Menu;