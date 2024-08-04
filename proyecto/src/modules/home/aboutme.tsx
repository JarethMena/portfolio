import React from 'react';

const AboutMe: React.FC<{ t: (key: string) => string }> = ({ t }) => {
    return (
        <div className="flex flex-col p-10">
            <h1 className="pb-5 text-mena-sun dark:text-mena-sky text-8xl max-[800px]:text-6xl font-extrabold">{t('sectionTitle.aboutMe')}</h1>
            <hr className="border-neutral-300 pb-5" />
            <p className="text-mena-graphite dark:text-mena-wolf font-medium">
                {t('aboutMe')}
            </p>
        </div>
    );
};

export default AboutMe;
