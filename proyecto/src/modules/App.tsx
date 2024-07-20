import '../tailwind/output.css'
import Menu from './floating-menu/menu.tsx'
import {useEffect, useState} from "react";
import {faSun, faMoon, faGlobe, faFilePdf, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from 'react-i18next';
import { saveAs } from 'file-saver';
import spanishCv from '../assets/pdfs/CV_JarethMena_Spanish.pdf';
import englishCv from '../assets/pdfs/CV_JarethMena_English.pdf';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

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

    const emailTo:string = "mailto:menaleitonj@gmail.com?subject=Subject&body=Body";
    const github:string = "https://github.com/JarethMena";
    const linkedin:string = "https://www.linkedin.com/in/jareth-mena/";

    const handleRedirect = (target:string) => {
        window.open(target, "_blank");
    };
    const menuElements: MenuElement[] = [
        {
            tooltip: `${isDarkMode ? t('lights.on') : t('lights.off')}`,
            icon: <FontAwesomeIcon className="text-2xl text-neutral-100 dark:text-neutral-600" icon={ isDarkMode ? faSun : faMoon }/>,
            execute: () => {handleDarkMode()},
            key: 'darkmode'
        },
        {
            tooltip: t('switchToLang'),
            icon: <FontAwesomeIcon className="text-2xl text-neutral-100 dark:text-neutral-600" icon={ faGlobe }/>,
            execute: () => {handleLanguage()},
            key: 'switchlang'
        },
        {
            tooltip: t('downloadCv'),
            icon: <FontAwesomeIcon className="text-2xl text-neutral-100 dark:text-neutral-600" icon={ faFilePdf }/>,
            execute: handleDownloadPDF,
            key: 'downloadcv',
        },
        {
            tooltip: t('sendEmail'),
            icon: <FontAwesomeIcon className="text-2xl text-neutral-100 dark:text-neutral-600" icon={faEnvelope}/>,
            execute: () => handleRedirect(emailTo),
            key: 'sendemail',
        },
        {
            tooltip: 'Github',
            icon: <FontAwesomeIcon className="text-2xl text-neutral-100 dark:text-neutral-600" icon={faGithub} />,
            execute: () => handleRedirect(github),
            key: 'github',
        },
        {
            tooltip: 'Linkedin',
            icon: <FontAwesomeIcon className="text-2xl text-neutral-100 dark:text-neutral-600" icon={faLinkedin} />,
            execute: () => handleRedirect(linkedin),
            key: 'github',
        },
    ];

    return (
        <div className={`${isDarkMode && "dark"}`}>
+            <div className="bg-white dark:bg-neutral-800 min-h-dvh transition duration-400">
                <Menu MenuElementsList={menuElements}/>
            </div>
        </div>


  )
}

export default App
