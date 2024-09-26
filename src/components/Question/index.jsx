import React from "react";
import styles from "./question.module.css";

export default function Question({ data, onAnswer, showJustification, userAnswer, onNext }) {
    return (
        <div className={styles.questionContainer}>
            <h2>{data.question}</h2>
            <ul className={styles.optionsList}>
                {data.options.map((option, index) => {
                    let buttonClass = styles.optionButton;
                    if (showJustification) {
                        if (index === data.answer) {
                            buttonClass = `${styles.optionButton} ${styles.correct}`;
                        } else if (index === userAnswer.answer) {
                            buttonClass = `${styles.optionButton} ${styles.incorrect}`;
                        }
                    }

                    return (
                        <li key={index} className={styles.optionItem}>
                            <button
                                onClick={() => onAnswer(index)}
                                disabled={showJustification}
                                className={buttonClass}
                            >
                                {option}
                            </button>
                        </li>
                    );
                })}
            </ul>
            {showJustification && (
                <div className={styles.justification}>
                    <p>{data.justification}</p>
                    <button onClick={onNext} className={styles.nextButton}>
                        Próxima Questão
                    </button>
                </div>
            )}
        </div>
    );
}
