export default function Summary({ questions, answers }) {
  const questionsLength = questions.length;

  const userCorrectAnswers = questions.filter(
    (question) => question.answers[answers[question.id]]?.correct
  );

  const totalCorrect = userCorrectAnswers.length;

  return (
    <>
      <h2>Summary</h2>
      <p>
        Correct answers: {totalCorrect} / {questionsLength}
      </p>
      <h2>Your correct answers:</h2>
      <ul className="answers-listing">
        {userCorrectAnswers.map((question, questionIndex) => (
          <li key={questionIndex}>
            <p className="name">{question.name}</p>
            <div className="answer">
              {question.answers.map((answer, answerIndex) => {
                if (answer.correct) {
                  return <p key={answerIndex}>{answer.label}</p>;
                }
                return null;
              })}
            </div>
          </li>
        ))}
      </ul>
      <h2>All correct answers</h2>
      <ul className="answers-listing">
        {questions.map((question, questionIndex) => (
          <li key={questionIndex}>
            <p className="name">{question.name}</p>
            <div className="answer">
              {question.answers.map((answer, answerIndex) => {
                if (answer.correct) {
                  return <p key={answerIndex}>{answer.label}</p>;
                }
                return null;
              })}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
