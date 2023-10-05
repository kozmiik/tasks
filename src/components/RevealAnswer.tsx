import React, { useState } from "react";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Reveal Answer</button>
            {isVisible && <p>Answer: 42</p>}
        </div>
    );
}
