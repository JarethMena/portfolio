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
                className="transition w-full rounded-lg rounded-b-none text-left p-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 flex justify-between items-center"
                onClick={toggleAccordion}>
                <p className="text-neutral-800 dark:text-neutral-200 font-semibold">{title}</p>
                <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} className="text-neutral-800 dark:text-neutral-200" />
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