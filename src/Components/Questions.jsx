import { useState } from "react";
import Question from "./Question";
import Dialog from "./Dialog";

export default function Questions({ questions, onAnswered, answers }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const [stateQuestions, setStateQuestions] = useState(questions);

  // 50%/50%
  const [halved, setHalved] = useState({ amount: 2, usedAt: [] });

  const handleDialogOpen = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <>
      <ul className="questions-listing">
        {stateQuestions.map((singleQuestion, order) => (
          <Question
            question={singleQuestion}
            onPress={() => {
              handleDialogOpen(singleQuestion);
            }}
            currentQuestionId={selectedQuestion?.id}
            key={singleQuestion.id}
            index={singleQuestion.id}
            order={order}
          />
        ))}
      </ul>
      {selectedQuestion !== null && (
        <Dialog
          question={selectedQuestion}
          questions={stateQuestions}
          onAnswered={onAnswered}
          setQuestion={setSelectedQuestion}
          selectedAnswerIndex={answers[selectedQuestion.id]}
          key={selectedQuestion.id}
          halved={halved}
          onHalved={setHalved}
        />
      )}
    </>
  );
}
