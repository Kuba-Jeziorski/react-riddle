import { useState } from "react";
import Question from "./Question";
import Dialog from "./Dialog";

export default function Questions({ questions, handleQuestions }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleDialogOpen = (question) => {
    setSelectedQuestion(question);
  };

  const handleDialogClose = () => {
    setSelectedQuestion(null);
  };

  return (
    <>
      <ul className="questions-listing">
        {questions.map((singleQuestion) => (
          <Question
            question={singleQuestion}
            onPress={() => {
              handleDialogOpen(singleQuestion);
            }}
            currentQuestionId={selectedQuestion?.id}
            key={singleQuestion.id}
            index={singleQuestion.id}
          />
        ))}
      </ul>
      {selectedQuestion !== null && (
        <Dialog
          question={selectedQuestion}
          onClose={handleDialogClose}
          questions={questions}
          handleQuestions={handleQuestions}
        />
      )}
    </>
  );
}