export default function Dialog({
  question,
  questions,
  handleQuestions,
  setQuestion,
}) {
  const handleChosenAnswer = ({ target }) => {
    // target.classList.add("chosen");

    const listingIndex = Number(target.getAttribute("index"));
    const isCorrect = question.answers[listingIndex].correct === true ? 1 : 0;

    const selectedAnswer = {
      ...question,
      selected: listingIndex,
      correct: isCorrect,
    };

    const updatedQuestions = [...questions];
    updatedQuestions[current] = selectedAnswer;

    handleQuestions(updatedQuestions);
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

  return (
    <div className="wrapper">
      <dialog open>
        <p>ID: {question.id}</p>
        <p>Difficulty: {question.difficulty}</p>
        <p>Name: {question.name}</p>
        <ul className="dialog-listing">
          {question.answers.map((answer, index) => (
            <li
              className={question?.selected === index ? "chosen" : ""}
              onClick={(event) => handleChosenAnswer(event)}
              key={index}
              index={index}
            >
              {answer.label}
            </li>
          ))}
        </ul>
        <div className="dialog-buttons">
          {isNotFirst ? (
            <button
              onClick={() => {
                handlePrevious();
              }}
            >
              Previous
            </button>
          ) : (
            ""
          )}
          {isNotLast ? (
            <button
              onClick={() => {
                handleNext();
              }}
            >
              Next
            </button>
          ) : (
            ""
          )}
        </div>
      </dialog>
    </div>
  );
}
