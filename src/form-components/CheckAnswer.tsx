import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                placeholder="Your answer"
                value={userAnswer}
                onChange={handleAnswerChange}
            />
            {userAnswer === expectedAnswer ? (
                <p>✔️ Correct!</p>
            ) : (
                <p>❌ Incorrect!</p>
            )}
        </div>
    );
}
