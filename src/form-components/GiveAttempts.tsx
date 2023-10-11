import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleAttemptChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRequestedAttempts(event.target.value);
    };

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempt = () => {
        const parsedAttempts = parseInt(requestedAttempts, 10);

        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                placeholder="Enter attempts"
                value={requestedAttempts}
                onChange={handleAttemptChange}
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use Attempt
            </button>
            <button onClick={handleGainAttempt}>Gain Attempt</button>
        </div>
    );
}
