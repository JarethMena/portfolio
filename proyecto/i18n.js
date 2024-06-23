import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    switchToLang: "Cambiar a Español",
                    lights:{
                        on: "Turn Lights On",
                        off: "Turn Lights Off"
                    }
                }
            },
            es: {
                translation: {
                    switchToLang: "Switch to English",
                    lights:{
                        on: "Encender luces",
                        off: "Apagar luces"
                    }
                }
            }
        }
    });

export default i18n;