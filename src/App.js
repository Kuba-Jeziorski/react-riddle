import { useState } from "react";
import "./index.css";
import Title from "./Components/Title.jsx";
import CountdownTimer from "./Components/CountdownTimer.jsx";
import shuffledQuestions from "./questions.js";
import Questions from "./Components/Questions.jsx";
import Summary from "./Components/Summary.jsx";

function App() {
  const [answers, setAnswers] = useState({});
  // pending || started || finished
  const [quizState, setQuizState] = useState("pending");

  const finishQuiz = () => {
    setQuizState("finished");
  };

  const startQuiz = () => {
    setQuizState("started");
  };
  return (
    <div className="wrapper">
      <Title />
      {quizState === "pending" && (
        <div className="col-12">
          <div className="flex-centered">
            <button className="game-state" onClick={startQuiz}>
              Start the Quiz
            </button>
          </div>
        </div>
      )}
      {quizState === "started" && (
        <>
          <div className="col-12 flex-col">
            <div className="flex-centered">
              <button className="game-state" onClick={finishQuiz}>
                Finish the Quiz
              </button>
            </div>
            <CountdownTimer isRunning={true} isFinished={finishQuiz} />
          </div>
          <Questions
            questions={shuffledQuestions}
            onAnswered={(questionId, answerId) =>
              setAnswers((answers) => ({ ...answers, [questionId]: answerId }))
            }
            answers={answers}
          />
        </>
      )}

      {quizState === "finished" && (
        <Summary questions={shuffledQuestions} answers={answers} />
      )}
    </div>
  );
}

export default App;
