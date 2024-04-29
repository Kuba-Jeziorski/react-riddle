export default function FinishButton({
  onFinish,
  gameState,
  summary,
  setSummary,
}) {
  const startedClassName = gameState ? "" : "hidden";

  const handleSummary = () => {
    setSummary(!summary);
  };

  const handleOnClick = () => {
    onFinish();
    handleSummary();
    console.log(`finish pressed, summary: ${!summary}`);
  };

  return (
    <button onClick={() => handleOnClick()} className={startedClassName}>
      Finish the Quiz
    </button>
  );
}
