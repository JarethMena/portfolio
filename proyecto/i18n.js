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
                    sendEmail: "Send Email",
                    emailInvitation: "Let's Talk!",
                    titleLabel: "Title",
                    titlePlaceholder:"Let's have a conversation!",
                    emailContactLabel:"Email Contact",
                    emailContactPlaceholder:"your@email.com",
                    messageLabel:"Message",
                    messagePlaceholder:"Greetings Mena...",
                    sendLabel:"Send",
                    emailFailure:"Failed to send message",
                    requiredFieldWarn: "This field is required",
                    closeOverlay:"You can now close this overlay."
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
                    sendEmail: "Enviar Correo",
                    emailInvitation: "¡Hablemos!",
                    titleLabel: "Título",
                    titlePlaceholder:"Tengamos una conversación",
                    emailContactLabel:"Correo Electrónico",
                    emailContactPlaceholder:"tu@correo.com",
                    messageLabel:"Mensaje",
                    messagePlaceholder:"Saludos Mena...",
                    sendLabel:"Enviar",
                    emailFailure:"El envío de mensaje ha fallado",
                    requiredFieldWarn: "Espacio obligatorio",
                    closeOverlay:"Ahora puede cerrar esta ventana.",
                }
            }
        }
    });

export default i18n;