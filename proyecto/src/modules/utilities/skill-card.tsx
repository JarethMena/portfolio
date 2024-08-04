import React, { memo } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillCategory, SkillItem } from "../types/ComponentTypes.tsx";

const renderSkillItems = (items: SkillItem[]) => {
    return items.map(({ name, icon }, idx) => (
        <li key={`${name}-${idx}`} className="flex items-center space-x-2 text-mena-graphite dark:text-mena-wolf">
            <span className="text-2xl"><FontAwesomeIcon icon={icon} /></span>
            <span className="text-xl font-medium">{name}</span>
        </li>
    ));
};

const SkillCard: React.FC<{ skillCategory: SkillCategory }> = memo(({ skillCategory: { category, items } }) => {
    return (
        <div className="min-w-[250px] min-h-[300px] max-[600px]:w-full bg-mena-snow dark:bg-mena-nightlight p-6 rounded-lg shadow transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-600/50">
            <h2 className="text-mena-graphite dark:text-mena-wolf font-thin text-4xl mb-4">{category}</h2>
            <ul className="space-y-2">
                {renderSkillItems(items)}
            </ul>
        </div>
    );
});

export default SkillCard;
