import { useState } from "react";

export default function Dialog({
  question,
  questions,
  onAnswered,
  setQuestion,
  selectedAnswer: selectedAnswerIndex,
}) {
  const handleSelection = (index) => {
    setSelectedAnswer(index);
  };

  const [selectedAnswer, setSelectedAnswer] = useState(
    selectedAnswerIndex ?? null
  );

  const current = questions.findIndex((current) => current.id === question.id);

  const isNotFirst = current > 0;
  const isNotLast = current < questions.length - 1;

  function handleNext() {
    onAnswered(question.id, selectedAnswer);
    setQuestion(questions[current + 1]);
  }
  function handlePrevious() {
    onAnswered(question.id, selectedAnswer);
    setQuestion(questions[current - 1]);
  }

  return (
    <div className="wrapper">
      <dialog open>
        <p>ID: {question.id}</p>
        <p>Difficulty: {question.difficulty}</p>
        <p>Name: {question.name}</p>
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
          {isNotLast && <button onClick={handleNext}>Next</button>}
        </div>
      </dialog>
    </div>
  );
}
