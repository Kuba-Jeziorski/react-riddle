import { useState } from "react";
import "./index.css";

function Title() {
  return <h1 className="flex-centered">React Riddle</h1>;
}

function StartButton({ onStart, gameState }) {
  return (
    <button className={gameState ? "active" : ""} onClick={() => onStart()}>
      {gameState ? "Finish the Quiz" : "Start the Quiz"}
    </button>
  );
}

function App() {
  // Start the game
  const [isStarted, setIsStarted] = useState(false);

  const handleStarting = () => {
    setIsStarted((previousState) => !previousState);

    let gameState = !isStarted ? "is" : "isnt";

    console.log(`Game ${gameState} started`);
  };

  return (
    <div className="wrapper">
      <Title />
      <StartButton onStart={handleStarting} gameState={isStarted} />
    </div>
  );
}

export default App;
