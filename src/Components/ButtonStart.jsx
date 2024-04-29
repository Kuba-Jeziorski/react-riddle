export default function StartButton({ onStart, gameState, finish }) {
  const startedClassName = gameState ? "hidden" : "";

  return (
    <button
      onClick={() => onStart()}
      className={startedClassName}
      disabled={finish}
    >
      Start the Quiz
    </button>
  );
}
