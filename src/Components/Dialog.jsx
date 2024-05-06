import { useState } from "react";

export default function Dialog({
  question,
  questions,
  onAnswered,
  setQuestion,
  selectedAnswer: selectedAnswerIndex,
}) {
  const difficultyClassName = {
    easy: "easy",
    medium: "medium",
    hard: "hard",
  };

  const [selectedAnswer, setSelectedAnswer] = useState(
    selectedAnswerIndex ?? null
  );

  const handleSelection = (index) => {
    setSelectedAnswer(index);
  };

  const current = questions.findIndex((current) => current.id === question.id);

  const isNotFirst = current > 0;
  const isNotLast = current < questions.length - 1;

  function handleNext() {
    setQuestion(questions[current + 1]);
  }
  function handlePrevious() {
    setQuestion(questions[current - 1]);
  }
  function confirmAnswer() {
    onAnswered(question.id, selectedAnswer);
  }

  return (
    <div className="wrapper">
      <dialog open>
        <p>
          Difficulty:{" "}
          <span className={difficultyClassName[question.difficulty]}>
            {question.difficulty}
          </span>
        </p>
        <p>
          Question: <span>{question.name}</span>{" "}
        </p>
        <ul className="dialog-listing">
          {question.answers.map((answer, index) => (
            <li
              className={selectedAnswer === index ? "chosen" : ""}
              onClick={() => {
                handleSelection(index);
              }}
              key={index}
              index={index}
            >
              {answer.label}
            </li>
          ))}
        </ul>
        <div className="dialog-buttons">
          {isNotFirst && <button onClick={handlePrevious}>Previous</button>}
          <button onClick={confirmAnswer}>Confirm</button>
          {isNotLast && <button onClick={handleNext}>Next</button>}
        </div>
      </dialog>
    </div>
  );
}
