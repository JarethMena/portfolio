import {ReactNode} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface AccordionProps {
    title: string;
    children: ReactNode;
}

export interface TimelineItemProps {
    timePeriod: string;
    company: string;
    title: string;
    body: string;
    accomplishments: string[];
}

export interface TimelineSectionProps {
    items: TimelineItemProps[];
    t: (key: string) => string;
}

export interface SkillItem {
    name: string;
    icon: IconProp;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}