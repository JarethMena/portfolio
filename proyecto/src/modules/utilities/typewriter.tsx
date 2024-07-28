// Typewriter.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    strings: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ strings }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting && subIndex < strings[index].length) {
                setText(strings[index].substring(0, subIndex + 1));
                setSubIndex(subIndex + 1);
            } else if (isDeleting && subIndex > 0) {
                setText(strings[index].substring(0, subIndex - 1));
                setSubIndex(subIndex - 1);
            } else if (!isDeleting && subIndex === strings[index].length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && subIndex === 0) {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % strings.length);
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, strings]);

    return <p className="font-extralight text-4xl min-h-10 h-fit">{text}</p>;
};

export default Typewriter;
