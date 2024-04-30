export default function FinishButton({
  onFinish,
  gameState,
  showSummary,
  setShowSummary,
}) {
  const startedClassName = gameState ? "" : "hidden";

  const handleSummary = () => {
    setShowSummary(!showSummary);
  };

  const handleOnClick = () => {
    onFinish();
    handleSummary();
  };

  return (
    <button onClick={() => handleOnClick()} className={startedClassName}>
      Finish the Quiz
    </button>
  );
}
