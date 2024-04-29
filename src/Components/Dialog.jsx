export default function Dialog({
  question,
  questions,
  handleQuestions,
  setQuestion,
}) {
  const handleChoosen = ({ target }) => {
    const allAnswersDOM = document.querySelectorAll(".dialog-listing li");
    allAnswersDOM.forEach((answer) => answer.classList.remove("choosen"));

    target.classList.add("choosen");

    const listingIndex = Number(target.getAttribute("index"));
    const isCorrect = question.answers[listingIndex].correct === true ? 1 : 0;

    const selectedAnswer = {
      ...question,
      selected: listingIndex,
      correct: isCorrect,
    };

    const currentIndex = questions.findIndex(
      (current) => current.id === question.id
    );

    const updatedQuestions = [...questions];
    updatedQuestions[currentIndex] = selectedAnswer;

    handleQuestions(updatedQuestions);
  };

  const allQuestions = document.querySelectorAll(".questions-listing li");
  const firstQuestionsIndex = Number(allQuestions[0].getAttribute("index"));
  const lastQuestionIndex = Number(
    allQuestions[allQuestions.length - 1].getAttribute("index")
  );
  const isFirst = firstQuestionsIndex === question.id;
  const isLast = lastQuestionIndex === question.id;

  const cur = questions.findIndex((current) => current.id === question.id);

  function handleNext() {
    setQuestion(questions[cur + 1]);
  }
  function handlePrevious() {
    setQuestion(questions[cur - 1]);
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
              className={question?.selected === index ? "choosen" : ""}
              onClick={(event) => handleChoosen(event)}
              key={index}
              index={index}
            >
              {answer.label}
            </li>
          ))}
        </ul>
        <div className="dialog-buttons">
          {!isFirst && (
            <button
              onClick={() => {
                handlePrevious();
              }}
            >
              Previous
            </button>
          )}
          {!isLast && (
            <button
              onClick={() => {
                handleNext();
              }}
            >
              Next
            </button>
          )}
        </div>
      </dialog>
    </div>
  );
}
