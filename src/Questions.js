const allQuestions = [
  {
    id: 1,
    difficulty: "easy",
    name: "1 question",
    answers: [
      { label: "Answer content", correct: true },
      { label: "Answer content2", correct: false },
      { label: "Answer content3", correct: false },
      { label: "Answer content4", correct: false },
    ],
  },
  {
    id: 2,
    difficulty: "easy",
    name: "2 question",
    answers: [
      { label: "Answer content", correct: true },
      { label: "Answer content2", correct: false },
      { label: "Answer content3", correct: false },
      { label: "Answer content4", correct: false },
    ],
  },
  {
    id: 3,
    difficulty: "easy",
    name: "3 question",
    answers: [
      { label: "Answer content", correct: true },
      { label: "Answer content2", correct: false },
      { label: "Answer content3", correct: false },
      { label: "Answer content4", correct: false },
    ],
  },
  {
    id: 4,
    difficulty: "medium",
    name: "4 question",
    answers: [
      { label: "Answer content", correct: true },
      { label: "Answer content2", correct: false },
      { label: "Answer content3", correct: false },
      { label: "Answer content4", correct: false },
    ],
  },
  {
    id: 5,
    difficulty: "medium",
    name: "5 question",
    answers: [
      { label: "Answer content", correct: true },
      { label: "Answer content2", correct: false },
      { label: "Answer content3", correct: false },
      { label: "Answer content4", correct: false },
    ],
  },
  {
    id: 6,
    difficulty: "medium",
    name: "6 question",
    answers: [
      { label: "Answer content", correct: true },
      { label: "Answer content2", correct: false },
      { label: "Answer content3", correct: false },
      { label: "Answer content4", correct: false },
    ],
  },
  {
    id: 7,
    difficulty: "hard",
    name: "7 question",
    answers: [
      { label: "Answer content", correct: true },
      { label: "Answer content2", correct: false },
      { label: "Answer content3", correct: false },
      { label: "Answer content4", correct: false },
    ],
  },
  {
    id: 8,
    difficulty: "hard",
    name: "8 question",
    answers: [
      { label: "Answer content", correct: true },
      { label: "Answer content2", correct: false },
      { label: "Answer content3", correct: false },
      { label: "Answer content4", correct: false },
    ],
  },
  {
    id: 9,
    difficulty: "hard",
    name: "9 question",
    answers: [
      { label: "Answer content", correct: true },
      { label: "Answer content2", correct: false },
      { label: "Answer content3", correct: false },
      { label: "Answer content4", correct: false },
    ],
  },
];

const randomizedQuestions = function (originalArray, difficulty, amount) {
  const allDifficultyQuestion = originalArray.filter(
    (singleQuestion) => singleQuestion.difficulty === difficulty
  );

  return allDifficultyQuestion.sort(() => Math.random() - 0.5).slice(0, amount);
};

const selectedEasyQuestions = randomizedQuestions(allQuestions, "easy", 3);
const selectedMediumQuestions = randomizedQuestions(allQuestions, "medium", 2);
const selectedHardQuestions = randomizedQuestions(allQuestions, "hard", 1);

const allSelectedQuestions = [
  ...selectedEasyQuestions,
  ...selectedMediumQuestions,
  ...selectedHardQuestions,
];

const allSelectedQuestionsShuffled = allSelectedQuestions.sort(
  () => Math.random() - 0.5
);

export default allSelectedQuestionsShuffled;
