const allQuestions = [
  {
    id: 1,
    difficulty: "easy",
    name: "What is the capital of France?",
    answers: [
      { label: "Paris", correct: true },
      { label: "London", correct: false },
      { label: "Berlin", correct: false },
      { label: "Rome", correct: false },
    ],
  },
  {
    id: 2,
    difficulty: "easy",
    name: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { label: "William Shakespeare", correct: true },
      { label: "Charles Dickens", correct: false },
      { label: "Jane Austen", correct: false },
      { label: "Mark Twain", correct: false },
    ],
  },
  {
    id: 3,
    difficulty: "easy",
    name: "What is the chemical symbol for water?",
    answers: [
      { label: "H2O", correct: true },
      { label: "CO2", correct: false },
      { label: "NaCl", correct: false },
      { label: "O2", correct: false },
    ],
  },
  {
    id: 4,
    difficulty: "medium",
    name: "In which year did World War II end?",
    answers: [
      { label: "1945", correct: true },
      { label: "1939", correct: false },
      { label: "1941", correct: false },
      { label: "1950", correct: false },
    ],
  },
  {
    id: 5,
    difficulty: "medium",
    name: "Who painted the Mona Lisa?",
    answers: [
      { label: "Leonardo da Vinci", correct: true },
      { label: "Pablo Picasso", correct: false },
      { label: "Vincent van Gogh", correct: false },
      { label: "Michelangelo", correct: false },
    ],
  },
  {
    id: 6,
    difficulty: "medium",
    name: "What is the tallest mountain in the world?",
    answers: [
      { label: "Mount Everest", correct: true },
      { label: "K2", correct: false },
      { label: "Kangchenjunga", correct: false },
      { label: "Lhotse", correct: false },
    ],
  },
  {
    id: 7,
    difficulty: "hard",
    name: "Who discovered penicillin?",
    answers: [
      { label: "Alexander Fleming", correct: true },
      { label: "Louis Pasteur", correct: false },
      { label: "Marie Curie", correct: false },
      { label: "Albert Einstein", correct: false },
    ],
  },
  {
    id: 8,
    difficulty: "hard",
    name: "What is the largest planet in our solar system?",
    answers: [
      { label: "Jupiter", correct: true },
      { label: "Saturn", correct: false },
      { label: "Neptune", correct: false },
      { label: "Uranus", correct: false },
    ],
  },
  {
    id: 9,
    difficulty: "hard",
    name: "Which language is spoken the most worldwide?",
    answers: [
      { label: "Mandarin Chinese", correct: true },
      { label: "English", correct: false },
      { label: "Spanish", correct: false },
      { label: "Hindi", correct: false },
    ],
  },
  {
    id: 10,
    difficulty: "easy",
    name: "What is the capital of Spain?",
    answers: [
      { label: "Madrid", correct: true },
      { label: "Barcelona", correct: false },
      { label: "Rome", correct: false },
      { label: "Berlin", correct: false },
    ],
  },
  {
    id: 11,
    difficulty: "easy",
    name: "Who is the author of 'The Great Gatsby'?",
    answers: [
      { label: "F. Scott Fitzgerald", correct: true },
      { label: "Ernest Hemingway", correct: false },
      { label: "Virginia Woolf", correct: false },
      { label: "Mark Twain", correct: false },
    ],
  },
  {
    id: 12,
    difficulty: "easy",
    name: "What is the symbol for gold on the periodic table?",
    answers: [
      { label: "Au", correct: true },
      { label: "Ag", correct: false },
      { label: "Fe", correct: false },
      { label: "Hg", correct: false },
    ],
  },
  {
    id: 13,
    difficulty: "medium",
    name: "Who painted 'Starry Night'?",
    answers: [
      { label: "Vincent van Gogh", correct: true },
      { label: "Pablo Picasso", correct: false },
      { label: "Claude Monet", correct: false },
      { label: "Salvador Dalí", correct: false },
    ],
  },
  {
    id: 14,
    difficulty: "medium",
    name: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { label: "Japan", correct: true },
      { label: "China", correct: false },
      { label: "South Korea", correct: false },
      { label: "Thailand", correct: false },
    ],
  },
  {
    id: 15,
    difficulty: "medium",
    name: "What is the chemical formula for table salt?",
    answers: [
      { label: "NaCl", correct: true },
      { label: "H2O", correct: false },
      { label: "CO2", correct: false },
      { label: "CH4", correct: false },
    ],
  },
  {
    id: 16,
    difficulty: "hard",
    name: "Who composed the 'Four Seasons'?",
    answers: [
      { label: "Antonio Vivaldi", correct: true },
      { label: "Wolfgang Amadeus Mozart", correct: false },
      { label: "Ludwig van Beethoven", correct: false },
      { label: "Johann Sebastian Bach", correct: false },
    ],
  },
  {
    id: 17,
    difficulty: "hard",
    name: "Which of Shakespeare's plays is the longest?",
    answers: [
      { label: "Hamlet", correct: true },
      { label: "Othello", correct: false },
      { label: "Macbeth", correct: false },
      { label: "King Lear", correct: false },
    ],
  },
  {
    id: 18,
    difficulty: "hard",
    name: "Who is the Greek goddess of wisdom?",
    answers: [
      { label: "Athena", correct: true },
      { label: "Aphrodite", correct: false },
      { label: "Artemis", correct: false },
      { label: "Hera", correct: false },
    ],
  },
  {
    id: 19,
    difficulty: "easy",
    name: "What is the largest mammal?",
    answers: [
      { label: "Blue Whale", correct: true },
      { label: "African Elephant", correct: false },
      { label: "Giraffe", correct: false },
      { label: "Hippopotamus", correct: false },
    ],
  },
  {
    id: 20,
    difficulty: "easy",
    name: "Who invented the light bulb?",
    answers: [
      { label: "Thomas Edison", correct: true },
      { label: "Nikola Tesla", correct: false },
      { label: "Alexander Graham Bell", correct: false },
      { label: "Isaac Newton", correct: false },
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

let allSelectedQuestionsShuffled = allSelectedQuestions.sort(
  () => Math.random() - 0.5
);

allSelectedQuestionsShuffled = allSelectedQuestions.map((question) => {
  const shuffledAnswers = question.answers
    .slice()
    .sort(() => Math.random() - 0.5);

  return {
    ...question,
    answers: shuffledAnswers,
  };
});

export default allSelectedQuestionsShuffled;
