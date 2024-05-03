import { useState } from "react";
import "./index.css";
import Title from "./Components/Title.jsx";
import CountdownTimer from "./Components/CountdownTimer.jsx";
import shuffledQuestions from "./Questions.js";
import Questions from "./Components/Questions.jsx";
import Summary from "./Components/Summary.jsx";

function App() {
  // Start the game

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
        <button onClick={startQuiz}>Start the Quiz</button>
      )}
      {quizState === "started" && (
        <>
          <button onClick={finishQuiz}>Finish the Quiz</button>
          <CountdownTimer isRunning={true} isFinished={finishQuiz} />
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
