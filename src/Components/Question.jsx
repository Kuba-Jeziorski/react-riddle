export default function Question({
  question,
  onPress,
  index,
  currentQuestionId,
}) {
  const currentQuestionClass =
    question.id === currentQuestionId ? "current" : "";

  return (
    <li
      className={`spin ${question.difficulty} ${currentQuestionClass}`}
      onClick={() => onPress()}
      index={index}
    ></li>
  );
}
