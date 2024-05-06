import { useState } from "react";

export default function Dialog({
  question,
  questions,
  onAnswered,
  setQuestion,
  selectedAnswer: selectedAnswerIndex,
  halved,
  onHalved,
}) {
  const difficultyClassName = {
    easy: "easy",
    medium: "medium",
    hard: "hard",
  };

  const allHalved = 2;

  const [selectedAnswer, setSelectedAnswer] = useState(
    selectedAnswerIndex ?? null
  );

  // changes in displayed answers while 50%/50% clicked
  const [currentAnswers, setCurrentAnswers] = useState(question.answers);

  const [capturedAnswers, setCapturedAnswers] = useState([]);
  const [capturedAnswers2, setCapturedAnswers2] = useState([]);

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
  function handleHalved(question) {
    if (halved.amount > 0) {
      onHalved((prevHalved) => ({
        ...prevHalved,
        amount: halved.amount - 1,
        usedAt: [...prevHalved.usedAt, question.id],
      }));

      const falsyAnswers = currentAnswers
        .map((answer, answerIndex) =>
          answer.correct === false ? answerIndex : -1
        )
        .filter((answerIndex) => answerIndex !== -1)
        .slice(0, 2);
      const updatedAnswers = currentAnswers.filter(
        (_, index) => !falsyAnswers.includes(index)
      );

      setCurrentAnswers(updatedAnswers);

      if (halved.usedAt.length === 0) {
        console.log(`captured1`);
        console.log(updatedAnswers);
        // first use of button is updating capturedAnswers
        setCapturedAnswers(updatedAnswers);
      } else if (halved.usedAt.length === 1) {
        console.log(updatedAnswers);
        // second use of button is updating capturedAnswers2
        console.log(`captured2`);
        setCapturedAnswers2(updatedAnswers);
      } else {
        console.log(`captured3`);
      }
    }
  }

  const dialogListing = (question) => {
    let newestAnswers;
    if (question.id === halved.usedAt[0]) {
      console.log(`isFirst`);
      newestAnswers = capturedAnswers;
    } else if (question.id === halved.usedAt[1]) {
      console.log(`isSecond`);
      newestAnswers = capturedAnswers2;
    } else {
      newestAnswers = currentAnswers;
    }

    console.log(newestAnswers);

    return (
      <ul className="dialog-listing">
        {newestAnswers.map((answer, index) => (
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
    );
  };

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
          {currentAnswers.map((answer, index) => (
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
        {/* dialog copy */}
        {dialogListing(question)}
        <div className="dialog-buttons">
          {isNotFirst && <button onClick={handlePrevious}>Previous</button>}
          <button onClick={confirmAnswer}>Confirm</button>
          {isNotLast && <button onClick={handleNext}>Next</button>}
        </div>
        <div className="dialog-buttons">
          <button
            onClick={() => handleHalved(question)}
            disabled={
              halved.amount === 0 || halved.usedAt.includes(question.id)
            }
          >
            50%/50%
          </button>
          <p>{`${halved.amount}/${allHalved}`}</p>
        </div>
      </dialog>
    </div>
  );
}
