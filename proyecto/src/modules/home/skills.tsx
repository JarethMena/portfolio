import React, { memo } from 'react';
import SkillCard from "../utilities/skill-card.tsx";
import {HomeProps} from "../types/HomeTypes.tsx";


const Skills: React.FC<HomeProps> = memo(({ t, skills }) => {
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

export default Skills;
