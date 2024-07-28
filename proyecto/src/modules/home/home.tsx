import React, { memo } from 'react';
import NeutralRocket from '../../assets/neutral/rocket-32x32-neutral.svg';
import DarkRocket from '../../assets/dark-mode/rocket-32x32-dark.svg';
import Planet from '../../assets/neutral/planet-orbit-neutral.svg';
import Typewriter from "../utilities/typewriter.tsx";
import { HomeProps } from "../types/HomeTypes.tsx";
import {
    faBezierCurve,
    faCloud,
    faDatabase, faImage,
    faLaptopCode,
    faPalette,
    faVialCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import {
    faCss3Alt,
    faDocker,
    faHtml5,
    faJava,
    faNodeJs,
    faReact
} from "@fortawesome/free-brands-svg-icons";
import TimelineSection from "../utilities/timeline-section.tsx";
import { SkillCategory } from "../types/ComponentTypes.tsx";
import SkillCard from "../utilities/skill-card.tsx";

const greetings = [
    "Hi!, I am",
    "¡Hola!, Soy",
    "Bonjour!, Je suis",
    "Hallo!, Ich bin",
    "Ciao!, Sono",
    "Olá!, Eu sou",
    "Привет!, Я",
    "こんにちは!, 私は",
    "你好!, 我是",
    "안녕하세요!, 저는"
];

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


    const rocket = isDark ? DarkRocket : NeutralRocket;

    const Skills = memo(() => {
        return (
            <div className="flex flex-col p-10">
                <h1 className="pb-5 text-mena-sun dark:text-mena-sky text-8xl max-[800px]:text-6xl font-extrabold">{t('sectionTitle.skills')}</h1>
                <hr className="border-neutral-300 dark:border-neutral-600 pb-5" />
                <div className="flex flex-wrap gap-3 justify-center">
                    {skills.map((skillCategory) => (
                        <SkillCard key={skillCategory.category} skillCategory={skillCategory} />
                    ))}
                </div>
            </div>
        );
    });

    const Header = () => {
        return (
            <div className="flex flex-row justify-center w-full">
                <img src={rocket} className="h-[80px]" alt="Rocket" />
            </div>
        )
    }

    const Banner = () => {
        return (
            <div className="p-10 text-neutral-800 w-full h-full flex max-[800px]:flex-col-reverse bg-gradient-to-r from-[#079ef6] via-[#1e2d6f] to-[#02081a]">
                <div className="min-[800px]:p-10 min-[800px]:w-1/2 text-white flex flex-col">
                    <Typewriter strings={greetings} />
                    <div className="text-8xl max-[800px]:text-6xl h-fit font-rubikMonoOne underline">Mena</div>
                    <p className="pt-4 pb-4 font-extralight text-lg max-[800px]:text-sm">
                        {t('introduction')}
                    </p>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-end w-1/2 max-[800px]:hidden">
                    <img src={Planet} className="relative min-h-[300px] h-[300px]" alt="Planet" />
                </div>
            </div>
        )
    }

    const AboutMe = () => {
        return (
            <div className="flex flex-col p-10">
            <h1 className="pb-5 text-mena-sun dark:text-mena-sky text-8xl max-[800px]:text-6xl font-extrabold">{t('sectionTitle.aboutMe')}</h1>
            <hr className="border-neutral-300 pb-5" />
            <p className="text-neutral-800 dark:text-neutral-300 font-medium">
                {t('aboutMe')}
            </p>
        </div>)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <Header />
            <Banner />
            <div className="w-full flex flex-col justify-center items-center">
                <div className="max-w-[1000px]">
                    <AboutMe/>
                    <TimelineSection items={experience} t={t} />
                    <Skills />
                </div>
                <div className="max-[800px]:h-[88px]" />
            </div>
        </div>
    );
};

export default Home;
