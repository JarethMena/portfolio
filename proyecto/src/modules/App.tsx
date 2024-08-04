import '../tailwind/output.css'
import Menu from './floating-menu/menu.tsx'
import {useEffect, useRef, useState} from "react";
import {faSun, faMoon, faGlobe, faFilePdf, faEnvelope, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from 'react-i18next';
import { saveAs } from 'file-saver';
import spanishCv from '../assets/pdfs/CV_JarethMena_Spanish.pdf';
import englishCv from '../assets/pdfs/CV_JarethMena_English.pdf';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Overlay from "./utilities/overlay.tsx";
import EmailContactForm from "./utilities/email-contact-form.tsx";
import {MenuElementItem} from "./types/MenuElementTypes.tsx";
import Home from "./home/home.tsx";

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

    const handleDownloadPDF = () => {
        const fileName:string = `CV_JarethMena.pdf`;
        const chosenCv:string = language == lngs.english ? englishCv : spanishCv
        saveAs(chosenCv, fileName);
    };

    useEffect(() =>{
        i18n.changeLanguage(language);
    },[language]);

    const github:string = "https://github.com/JarethMena";
    const linkedin:string = "https://www.linkedin.com/in/jareth-mena-684653312/";

    const handleRedirect = (target:string) => {
        window.open(target, "_blank");
    };

    const menuElements: MenuElementItem[] = [
        {
            tooltip: `${isDarkMode ? t('lights.on') : t('lights.off')}`,
            icon: <FontAwesomeIcon className="text-2xl text-mena-light dark:text-mena-graphite" icon={ isDarkMode ? faSun : faMoon }/>,
            execute: () => {handleDarkMode()},
            key: 'darkmode'
        },
        {
            tooltip: t('switchToLang'),
            icon: <FontAwesomeIcon className="text-2xl text-mena-light dark:text-mena-graphite" icon={ faGlobe }/>,
            execute: () => {handleLanguage()},
            key: 'switchlang'
        },
        {
            tooltip: t('downloadCv'),
            icon: <FontAwesomeIcon className="text-2xl text-mena-light dark:text-mena-graphite" icon={ faFilePdf }/>,
            execute: handleDownloadPDF,
            key: 'downloadcv',
        },
        {
            tooltip: t('sendEmail'),
            icon: <FontAwesomeIcon className="text-2xl text-mena-light dark:text-mena-graphite" icon={faEnvelope}/>,
            execute: () => openOverlay(),
            key: 'sendemail',
        },
        {
            tooltip: 'Github',
            icon: <FontAwesomeIcon className="text-2xl text-mena-light dark:text-mena-graphite" icon={faGithub} />,
            execute: () => handleRedirect(github),
            key: 'github',
        },
        {
            tooltip: 'Linkedin',
            icon: <FontAwesomeIcon className="text-2xl text-mena-light dark:text-mena-graphite" icon={faLinkedin} />,
            execute: () => handleRedirect(linkedin),
            key: 'linkedin',
        },
    ];

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const bodyRef = useRef(document.body);
    const scrollingHandler = () => {
        setIsOverlayOpen(!isOverlayOpen);
        !isOverlayOpen ? bodyRef.current.classList.add('overflow-hidden') : bodyRef.current.classList.remove('overflow-hidden');
    }
    const openOverlay = () => {
        // setIsOverlayOpen(true);
        scrollingHandler();
    }
    const closeOverlay = () => {
        // setIsOverlayOpen(false);
        scrollingHandler();
    }

    const emailOverlay = () => {
      return <div>
            {isOverlayOpen && (
                <Overlay clickBgClose={true} bgClose={closeOverlay}>
                    <div className="flex flex-col justify-center  p-4 bg-white rounded-xl shadow-lg w-[400px] max-[400px]:w-full max-[400px]:h-full max-[400px]:rounded-none">
                        <div className=" flex flex-row justify-end">
                            <button onClick={closeOverlay} className="text-xl bg-red-600 text-white rounded h-[30px] w-[30px]">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <EmailContactForm t={t}/>
                    </div>
                </Overlay>
            )}
        </div>
    }

    return (
        <div className={`${isDarkMode && "dark"} `}>
            <div className={`bg-mena-light dark:bg-mena-night transition duration-400 ${isOverlayOpen && 'overflow-hidden'}`}>
                {emailOverlay()}
                <Menu MenuElementsList={menuElements}/>
                <Home isDark={isDarkMode} t={t}/>
            </div>
        </div>


  )
}

export default App
