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
                    closeOverlay:"You can now close this overlay.",
                    introduction: "Backend Software Engineer with a focus on developing, maintaining, and creating processes to ensure high-quality software delivery.",
                    aboutMe: "I am Jareth Mena, a Backend Software Engineer with a focus on developing, maintaining, and creating processes to ensure high-quality software delivery. My main mission is to create efficient and sustainable software solutions that add significant value to the company while promoting a culture of continuous learning and improvement among team members. I strive to stay aligned with ongoing technological advancements, enhancing my skills as a backend developer. A software engineer is not just someone who masters numerous technologies or knows every detail of a programming language by heart, but someone who forges their own path to solve problems. While technical knowledge can be acquired with time and patience, determination and ingenuity are what truly sets an engineer apart.",
                    currently: "Currently",
                    accomplishmentsTitle: "Most Important Accomplishments",
                    sectionTitle:{
                        aboutMe: "About Me",
                        experience: "Experience",
                        skills: "Skills"
                    },
                    experience: {
                        ni: {
                            title: "Fullstack Software Engineer",
                            body: "Developed, migrated and maintained internal backend and frontend software.",
                            accomplishments: {
                                1: "Worked extensively on backend-related tasks within the Software Licensing team.",
                                2: "Successfully researched, documented, migrated and modernized critial internal Java legacy applications.",
                                3: "Led the modernization project for the internal licensing portal, from initial planning through tech stack proposal to actual development. This project involved frontend development.",
                                4: "Created comprehensive test plans and compiled test data to ensure the quality of software solutions."
                            }
                        },
                        acc: {
                            title: "Quality Assurance Engineer",
                            body: "Planning, development, and implementation of software quality processes.",
                            accomplishments: {
                                1: "Spearheaded the Automation Testing Initiative for the account I was part of.",
                                2: "Developed and implemented Selenium automated testing suites across more than 10 websites for a major client.",
                                3: "Introduced an Audit Automation Process that streamlined operations across the entire account.",
                            }
                        }
                    },
                    projects: {
                        licitNetWebServices: {
                            title: 'Licit Net Web Services',
                            description: "LicitNET is the ultimate solution for managing tenders in educational institutions in Costa Rica. This project, developed by the university group Polycat, leverages the power of C# and JavaScript programming languages, along with Azure's scalable and efficient infrastructure, to provide a robust and reliable platform."
                        },
                        licitNetWebsite: {
                            title: 'Licit Net Website',
                            description: 'LicitNET, designed to manage tenders in educational institutions in Costa Rica, is a solution developed by the Polycat group. This project combines C# and JavaScript with Azure infrastructure, offering exceptional performance and scalability.'
                        },
                        pharmacyShopWebServices: {
                            title: 'Pharmacy Shop Web Services',
                            description: 'PharmaNET Services offers a series of web service implementations dedicated to managing products, users, and purchases in an online pharmacy. This solution ensures efficient and secure management in the digital pharmaceutical environment.'
                        },
                        pharmacyShopWebsite: {
                            title: 'Pharmacy Shop Website',
                            description: 'PharmaNET Web is a comprehensive platform for online medicine purchases, implementing PharmaNET Services to ensure an optimal and reliable user experience.'
                        }
                    }
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
                    introduction: "Ingeniero de Software Backend con un enfoque en el desarrollo, mantenimiento y creación de procesos para asegurar la entrega de software de alta calidad.",
                    aboutMe: "Soy Jareth Mena, Ingeniero de Software Backend enfocado en desarrollar, mantener y crear procesos para asegurar la entrega de software de alta calidad. Mi principal misión es crear soluciones de software eficientes y sostenibles que aporten un valor significativo a la empresa, mientras promuevo una cultura de aprendizaje continuo y mejora entre los miembros del equipo. Me esfuerzo por mantenerme alineado con los avances tecnológicos, mejorando mis habilidades como desarrollador backend. Un ingeniero de software no es solo alguien que domina numerosas tecnologías o conoce cada detalle de un lenguaje de programación de memoria, sino alguien que forja su propio camino para resolver problemas. Mientras que el conocimiento técnico se puede adquirir con tiempo y paciencia, la determinación y la ingeniosidad son lo que realmente distingue a un ingeniero.",
                    currently: "Actualmente",
                    accomplishmentsTitle: "Logros más Importantes",
                    sectionTitle:{
                        aboutMe: "Sobre Mí",
                        experience: "Experiencia",
                        skills: "Habilidades"
                    },
                    experience: {
                        ni: {
                            title: "Ingeniero de Software Fullstack",
                            body: "Desarrollo, migración y mantenimiento de software interno tanto en el backend como en el frontend.",
                            accomplishments: {
                                1: "Trabajé extensamente en tareas relacionadas con el backend dentro del equipo de Licencias de Software.",
                                2: "Investigé, documenté, migré y modernicé con éxito aplicaciones internas críticas en Java de legado.",
                                3: "Lideré el proyecto de modernización del portal interno de licencias, desde la planificación inicial hasta la propuesta de la pila tecnológica y el desarrollo real. Este proyecto involucró desarrollo frontend.",
                                4: "Creé planes de prueba detallados y compilé datos de prueba para garantizar la calidad de las soluciones de software."
                            }
                        },
                        acc: {
                            title: "Ingeniero de Aseguramiento de Calidad",
                            body: "Planeamiento, desarrollo e implementación de procesos de calidad de software.",
                            accomplishments: {
                                1: "Encabecé la Iniciativa de Pruebas Automatizadas para la cuenta de la que formaba parte.",
                                2: "Desarrollé e implementé suites de pruebas automatizadas con Selenium en más de 10 sitios web para un cliente importante.",
                                3: "Introduje un Proceso de Automatización de Auditorías que optimizó las operaciones en toda la cuenta.",
                            }
                        }
                    },
                    projects: {
                        licitNetWebServices: {
                            title: 'Licit Net Web Services',
                            description: 'LicitNET es la solución definitiva para la gestión de licitaciones en instituciones educativas de Costa Rica. Este proyecto, desarrollado por el grupo universitario Polycat, aprovecha la potencia de los lenguajes de programación C# y JavaScript, junto con la infraestructura escalable y eficiente de Azure, para proporcionar una plataforma robusta y confiable.'
                        },
                        licitNetWebsite: {
                            title: 'Licit Net Website',
                            description: 'LicitNET, diseñado para gestionar licitaciones en instituciones educativas de Costa Rica, es una solución desarrollada por el grupo Polycat. Este proyecto combina C# y JavaScript con la infraestructura de Azure, ofreciendo un rendimiento y escalabilidad excepcionales.'
                        },
                        pharmacyShopWebServices: {
                            title: 'Pharmacy Shop Web Services',
                            description: 'PharmaNET Services ofrece una serie de implementaciones de servicios web dedicados a la administración de productos, usuarios y compras en una farmacia online. Esta solución garantiza una gestión eficiente y segura en el entorno digital farmacéutico.'
                        },
                        pharmacyShopWebsite: {
                            title: 'Pharmacy Shop Website',
                            description: 'PharmaNET Web es una plataforma integral para la compra de medicamentos en línea, que implementa los servicios de PharmaNET Services para asegurar una experiencia de usuario óptima y confiable.'
                        }
                    }
                }
            }
        }
    });

export default i18n;