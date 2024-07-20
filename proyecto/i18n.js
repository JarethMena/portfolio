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
                    switchToLang: "Translate to Spanish",
                    lights:{
                        on: "Turn Lights On",
                        off: "Turn Lights Off"
                    },
                    downloadCv: "Download CV",
                    sendEmail: "Send Email"
                }
            },
            es: {
                translation: {
                    switchToLang: "Traducir a Inglés",
                    lights:{
                        on: "Encender luces",
                        off: "Apagar luces"
                    },
                    downloadCv: "Descargar CV",
                    sendEmail: "Enviar Correo"
                }
            }
        }
    });

export default i18n;