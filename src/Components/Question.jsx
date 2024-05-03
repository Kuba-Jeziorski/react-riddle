export default function Question({
  question,
  onPress,
  index,
  currentQuestionId,
  order,
}) {
  const currentQuestionClass =
    question.id === currentQuestionId ? "current" : "";

  const spinAnimationDelay = `${(order + 1) * 0.1}s`;

  return (
    <li
      style={{ animationDelay: spinAnimationDelay }}
      // style={{ animationDelay: `1s` }}
      className={`spin ${question.difficulty} ${currentQuestionClass}`}
      onClick={() => onPress()}
      index={index}
    ></li>
  );
}
