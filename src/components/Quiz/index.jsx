// Quiz.js
import React, { useState } from "react";
import Question from "../Question";
import Result from "../Result";
import { questions } from "../../resources/Question.js";

import styles from "./quiz.module.css";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showJustification, setShowJustification] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (optionIndex) => {
        const isCorrect = optionIndex === questions[currentQuestion].answer;
        if (isCorrect) setScore(score + 1);

        setUserAnswers([
            ...userAnswers,
            {
                questionIndex: currentQuestion,
                answer: optionIndex,
                isCorrect
            }
        ]);
        setShowJustification(true);
    };

    const nextQuestion = () => {
        setShowJustification(false);
        setCurrentQuestion(currentQuestion + 1);
    };

    if (currentQuestion >= questions.length) {
        return <Result score={score} total={questions.length} />;
    }

    return (
        <div className={styles.quizContainer}>
            <Question
                data={questions[currentQuestion]}
                onAnswer={handleAnswer}
                showJustification={showJustification}
                userAnswer={userAnswers[currentQuestion]}
                onNext={nextQuestion}
            />
        </div>
    );
}
