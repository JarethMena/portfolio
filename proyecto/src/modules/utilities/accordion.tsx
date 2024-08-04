import React, { useState, useRef, useEffect } from 'react';
import { AccordionProps } from "../types/ComponentTypes.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : '0px');
    }, [isOpen]);

    return (
        <div className="mb-4">
            <button
                className="transition w-full rounded-lg rounded-b-none text-left p-4 bg-mena-snow hover:bg-mena-wolf dark:bg-mena-nightlight dark:hover:bg-mena-deep flex justify-between items-center"
                onClick={toggleAccordion}>
                <p className="text-mena-graphite dark:text-mena-wolf font-semibold">{title}</p>
                <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} className="text-mena-graphite dark:text-mena-wolf" />
            </button>
            <div
                ref={contentRef}
                style={{ maxHeight: `${height}`, transition: 'max-height 0.3s ease' }}
                className={`overflow-hidden`}>
                <div className="p-4 bg-neutral-100 rounded-t-none rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;