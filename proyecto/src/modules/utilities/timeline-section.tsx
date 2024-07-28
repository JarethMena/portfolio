import React from 'react';
import {
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle
} from "flowbite-react";
import {TimelineSectionProps} from "../types/ComponentTypes.tsx";
import Accordion from "./accordion.tsx";

const TimelineSection: React.FC<TimelineSectionProps> = ({ items, t }) => {
    return (
        <div className="flex flex-col p-10">
            <h1 className="pb-5 text-mena-sun dark:text-mena-sky text-8xl max-[800px]:text-6xl font-extrabold">{t('sectionTitle.experience')}</h1>
            <hr className="border-neutral-300 pb-5" />
            <Timeline className="ml-2">
                {items.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime>
                                {item.timePeriod} <h1 className="dark:text-mena-sun text-mena-ocean text-2xl ">{item.company}</h1>
                            </TimelineTime>
                            <TimelineTitle className="font-thin text-mena-sky text-4xl">{item.title}</TimelineTitle>
                            <TimelineBody>{item.body}</TimelineBody>
                            <Accordion title={t('accomplishmentsTitle')}>
                                <ul className="list-disc ml-6">
                                    {item.accomplishments.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                            </Accordion>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
};
export default TimelineSection;
