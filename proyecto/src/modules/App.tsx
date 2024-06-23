import '../tailwind/output.css'
import Menu from './floating-menu/menu.tsx'
import {useEffect, useState} from "react";
import {faSun, faMoon, faGlobe} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from 'react-i18next';
function App() {
    const lngs = {
        english: 'en' ,
        spanish: 'es'
    };

    const { t, i18n} = useTranslation();
    const [isDarkMode, setDarkMode] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>(lngs.english);

    const handleDarkMode = () => {
        setDarkMode((prevState) => {
            return !prevState;
        })
    }
    const handleLanguage = () => {
      setLanguage(language === lngs.english ? lngs.spanish : lngs.english);
    }

    useEffect(() =>{
        i18n.changeLanguage(language);
    },[language]);

    const menuElements: MenuElement[] = [
        {
            tooltip: `${isDarkMode ? t('lights.on') : t('lights.off')}`,
            icon: <FontAwesomeIcon className="text-2xl text-neutral-100 dark:text-neutral-600" icon={ isDarkMode ? faSun : faMoon }/>,
            execute: () => {handleDarkMode()},
            key: 'tooltip-a'
        },
        {
            tooltip: t('switchToLang'),
            icon: <FontAwesomeIcon className="text-2xl text-neutral-100 dark:text-neutral-600" icon={ faGlobe }/>,
            execute: () => {handleLanguage()},
            key: 'tooltip-b'
        },
        {
            tooltip: 'tooltip C',
            icon: <>C</>,
            execute: () => {console.log('hello C')},
            key: 'tooltip-c'
        },
        {
            tooltip: 'tooltip D',
            icon: <>D</>,
            execute: () => {console.log('hello D')},
            key: 'tooltip-d'
        },
        {
            tooltip: 'tooltip E',
            icon: <>E</>,
            execute: () => {console.log('hello E')},
            key: 'tooltip-e',
        },
    ];

    return (
        <div className={`${isDarkMode && "dark"}`}>
            <div className="bg-white dark:bg-neutral-800 min-h-dvh transition duration-400">
                <Menu MenuElementsList={menuElements}/>
            </div>
        </div>


  )
}

export default App
