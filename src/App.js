import { useState } from "react";
import "./index.css";
import Title from "./Components/Title.jsx";
import CountdownTimer from "./Components/CountdownTimer.jsx";
import StartButton from "./Components/ButtonStart.jsx";
import FinishButton from "./Components/ButtonFinish.jsx";
import allSelectedQuestionsShuffled from "./Questions.js";
import Questions from "./Components/Questions.jsx";

function Summary({ questions }) {
  console.log(questions);

  const questionsLength = questions.length;

  const totalCorrect = questions.reduce(
    (total, question) => total + (question.correct || 0),
    0
  );

  return (
    <>
      <h2>Summary</h2>
      <p>Total: {totalCorrect}</p>
      <p>Length: {questionsLength}</p>
    </>
  );
}

function App() {
  // Start the game
  const [shuffledQuestions, setShuffledQuestions] = useState(
    allSelectedQuestionsShuffled
  );
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const finishCondition = isStarted === false && isFinished === true;

  const handleStarting = () => {
    setIsStarted((previousState) => !previousState);
  };

  const handleFinishing = () => {
    setIsStarted((previousState) => !previousState);
  };

  return (
    <div className="wrapper">
      <Title />
      {isStarted ? (
        <FinishButton
          onFinish={handleFinishing}
          gameState={isStarted}
          summary={isFinished}
          setSummary={setIsFinished}
        />
      ) : (
        <StartButton
          onStart={handleStarting}
          gameState={isStarted}
          finish={finishCondition}
        />
      )}
      {/* <CountdownTimer isRunning={isStarted} /> */}
      {isStarted && (
        <Questions
          questions={shuffledQuestions}
          handleQuestions={(updatedQuestions) =>
            setShuffledQuestions(updatedQuestions)
          }
        />
      )}
      {finishCondition && <Summary questions={shuffledQuestions} />}
    </div>
  );
}

export default App;
