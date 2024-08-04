import React from 'react';
import { HomeProps } from "../types/HomeTypes.tsx";
import { faBezierCurve, faCloud, faDatabase, faImage, faLaptopCode, faPalette, faVialCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faDocker, faHtml5, faJava, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import TimelineSection from "../utilities/timeline-section.tsx";
import { SkillCategory } from "../types/ComponentTypes.tsx";
import Banner from "./banner.tsx";
import Header from "./header.tsx";
import Skills from "./skills.tsx";
import AboutMe from "./aboutme.tsx";
import ProjectCarousel from "./project-carousel.tsx";
import ScrollToTopButton from '../utilities/scrolltotop.tsx';

import licitnet from "../../assets/neutral/licitnet.png";
import cenfofarma from "../../assets/neutral/cenfofarma.png";
import backendrep from "../../assets/neutral/backend-rep.png"
import backendrep2 from "../../assets/neutral/backend-rep2.jpg"

const skills: SkillCategory[] = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', icon: faReact },
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS3', icon: faCss3Alt },
            { name: 'Tailwind', icon: faPalette },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'Node.js', icon: faNodeJs },
            { name: 'Java', icon: faJava },
            { name: 'Tomcat', icon: faLaptopCode }, // Replace with appropriate icon
            { name: 'WebLogic', icon: faLaptopCode }, // Replace with appropriate icon
        ],
    },
    {
        category: 'Testing',
        items: [
            { name: 'Cypress', icon: faVialCircleCheck },
            { name: 'Selenium', icon: faVialCircleCheck },
            { name: 'Mockito', icon: faVialCircleCheck },
            { name: 'Junit', icon: faVialCircleCheck },
        ],
    },
    {
        category: 'Database',
        items: [
            { name: 'MySQL', icon: faDatabase },
            { name: 'MongoDB', icon: faDatabase }, // Replace with appropriate icon
        ],
    },
    {
        category: 'DevOps',
        items: [
            { name: 'Azure Pipelines', icon: faCloud }, // Replace with appropriate icon
            { name: 'Docker', icon: faDocker },
            { name: 'Kubernetes', icon: faDocker }, // Replace with appropriate icon
        ],
    },
    {
        category: 'Other',
        items: [
            { name: 'Adobe Illustrator', icon: faBezierCurve },
            { name: 'Adobe Photoshop', icon: faImage },
        ]
    }
];


const Home: React.FC<HomeProps> = ({ isDark, t }) => {

    const projects = [
        {
            image: backendrep,
            title: t('projects.licitNetWebServices.title'),
            description: t('projects.licitNetWebServices.description'),
            repoLink: 'https://dev.azure.com/jmenal/_git/Polycat_Proyecto2?path=/LicitNetAPI'
        },
        {
            image: licitnet,
            title: t('projects.licitNetWebsite.title'),
            description: t('projects.licitNetWebsite.description'),
            repoLink: 'https://dev.azure.com/jmenal/_git/Polycat_Proyecto2?path=/LicitNetWebApp'
        },
        {
            image: backendrep2,
            title: t('projects.pharmacyShopWebServices.title'),
            description: t('projects.pharmacyShopWebServices.description'),
            repoLink: 'https://dev.azure.com/jmenal/_git/jareth-project-components?path=/product-svc'
        },
        {
            image: cenfofarma,
            title: t('projects.pharmacyShopWebsite.title'),
            description: t('projects.pharmacyShopWebsite.description'),
            repoLink: 'https://dev.azure.com/jmenal/_git/jareth-project-components?path=/frontend-svc'
        },
    ];

    const experience = [
        {
            timePeriod: `2023 - ${t('currently')}`,
            company: "National Instruments",
            title: t('experience.ni.title'),
            body: t('experience.ni.body'),
            accomplishments: [
                t('experience.ni.accomplishments.1'),
                t('experience.ni.accomplishments.2'),
                t('experience.ni.accomplishments.3'),
                t('experience.ni.accomplishments.4')
            ]
        },
        {
            timePeriod: "2022 - 2023",
            company: "Accenture",
            title: t('experience.acc.title'),
            body: t('experience.acc.body'),
            accomplishments: [
                t('experience.acc.accomplishments.1'),
                t('experience.acc.accomplishments.2'),
                t('experience.acc.accomplishments.3')
            ]
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center">
            <Header isDark={isDark} />
            <Banner t={t} />
            <div className="w-full flex flex-col justify-center items-center">
                <div className="max-w-[1000px]">
                    <AboutMe t={t} />
                    <TimelineSection items={experience} t={t} />
                    <Skills t={t} skills={skills} />
                    <ProjectCarousel projects={projects} />
                </div>
                <div className="h-[88px]" />
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default Home;
