// Result.js
import React from "react";
import styles from "./Result.module.css";

export default function Result({ score, total }) {
    return (
        <div className={styles.resultContainer}>
            <h2>Quiz Concluído!</h2>
            <p>
                Sua Pontuação: {score} de {total}
            </p>
        </div>
    );
}
