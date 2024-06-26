import { useState } from "react";

export default function Dialog({
  question,
  questions,
  onAnswered,
  setQuestion,
  selectedAnswerIndex,
  halved,
  onHalved,
}) {
  const difficultyClassName = {
    easy: "easy",
    medium: "medium",
    hard: "hard",
  };

  const [selectedAnswer, setSelectedAnswer] = useState(
    selectedAnswerIndex ?? null
  );

  const [quizQuestion, setQuizQuestion] = useState(question);

  // changes in displayed answers while 50%/50% clicked
  const [currentAnswers, setCurrentAnswers] = useState(quizQuestion.answers);

  const handleSelection = (index) => {
    setSelectedAnswer(index);
  };

  const current = questions.findIndex(
    (current) => current.id === quizQuestion.id
  );

  const isDisabled =
    halved.amount === 0 || halved.usedAt.includes(quizQuestion.id);

  const isNotFirst = current > 0;
  const isNotLast = current < questions.length - 1;

  function handleNext() {
    setQuestion(questions[current + 1]);
  }

  function handlePrevious() {
    setQuestion(questions[current - 1]);
  }

  function confirmAnswer() {
    onAnswered(quizQuestion.id, selectedAnswer);
  }

  function handleHalved(quizQuestion) {
    if (halved.amount > 0) {
      onHalved((prevHalved) => ({
        ...prevHalved,
        amount: halved.amount - 1,
        usedAt: [...prevHalved.usedAt, quizQuestion.id],
      }));

      const falsyAnswers = currentAnswers
        .map((answer, answerIndex) =>
          answer.correct === false ? answerIndex : -1
        )
        .filter((answerIndex) => answerIndex !== -1)
        .slice(0, 2);

      const updatedAnswers = currentAnswers.map(
        (singleAnswer, singleAnswerIndex) => {
          if (falsyAnswers.includes(singleAnswerIndex)) {
            return { ...singleAnswer, visible: false };
          } else {
            return singleAnswer;
          }
        }
      );

      setCurrentAnswers(updatedAnswers);

      // this works
      quizQuestion.answers = updatedAnswers;

      // this doesn't
      // setQuizQuestion((prevQuestion) => ({
      //   ...prevQuestion,
      //   answers: updatedAnswers,
      // }));

      // removing background from previously selected answer while changing cards
      onAnswered(quizQuestion.id, null);
      // removing background immediately from previous selected answer
      setSelectedAnswer(null);
    }
  }

  return (
    <div className="dialog-wrapper">
      <dialog open>
        <p>
          Difficulty:{" "}
          <span className={difficultyClassName[quizQuestion.difficulty]}>
            {quizQuestion.difficulty}
          </span>
        </p>
        <p>
          Question: <span>{quizQuestion.name}</span>{" "}
        </p>
        <ul className="dialog-listing">
          {currentAnswers.map((answer, index) => (
            <button
              className={selectedAnswer === index ? "chosen" : ""}
              onClick={() => {
                handleSelection(index);
              }}
              disabled={answer.visible !== true}
              key={index}
            >
              {answer.label}
            </button>
          ))}
        </ul>
        <div className="dialog-buttons">
          {isNotFirst && (
            <button className="btn-prev" onClick={handlePrevious}>
              Previous
            </button>
          )}
          <button className="btn-cnfrm" onClick={confirmAnswer}>
            Confirm Answer
          </button>
          {isNotLast && (
            <button className="btn-next" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
        <div className="dialog-buttons flex-col">
          <button
            onClick={() => handleHalved(quizQuestion)}
            clicksleft={halved.amount}
            disabled={isDisabled}
          >
            50% / 50%
          </button>
          {isDisabled ? (
            <p>No more chances here</p>
          ) : (
            <p>{`${halved.amount} ${
              halved.amount === 1 ? "chance" : "chances"
            } left`}</p>
          )}
        </div>
      </dialog>
    </div>
  );
}
