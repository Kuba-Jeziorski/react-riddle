export default function StartButton({ onStart, gameState, isFinished }) {
  const startedClassName = gameState ? "hidden" : "";

  return (
    <button
      onClick={() => onStart()}
      className={startedClassName}
      disabled={isFinished}
    >
      Start the Quiz
    </button>
  );
}
