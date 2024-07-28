import React, { useState } from 'react';

const FlipCard: React.FC<{ frontContent: React.ReactNode; backContent: React.ReactNode }> = ({ frontContent, backContent }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`flip-card ${flipped ? 'flipped' : ''} hover:cursor-pointer`}
            onClick={() => setFlipped(!flipped)}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {frontContent}
                </div>
                <div className="flip-card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
