const allQuestions = [
  {
    id: 1,
    difficulty: "easy",
    name: "What is the capital of France?",
    answers: [
      { label: "Paris", correct: true, visible: true },
      { label: "London", correct: false, visible: true },
      { label: "Berlin", correct: false, visible: true },
      { label: "Rome", correct: false, visible: true },
    ],
  },
  {
    id: 2,
    difficulty: "easy",
    name: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { label: "William Shakespeare", correct: true, visible: true },
      { label: "Charles Dickens", correct: false, visible: true },
      { label: "Jane Austen", correct: false, visible: true },
      { label: "Mark Twain", correct: false, visible: true },
    ],
  },
  {
    id: 3,
    difficulty: "easy",
    name: "What is the chemical symbol for water?",
    answers: [
      { label: "H2O", correct: true, visible: true },
      { label: "CO2", correct: false, visible: true },
      { label: "NaCl", correct: false, visible: true },
      { label: "O2", correct: false, visible: true },
    ],
  },
  {
    id: 4,
    difficulty: "medium",
    name: "In which year did World War II end?",
    answers: [
      { label: "1945", correct: true, visible: true },
      { label: "1939", correct: false, visible: true },
      { label: "1941", correct: false, visible: true },
      { label: "1950", correct: false, visible: true },
    ],
  },
  {
    id: 5,
    difficulty: "medium",
    name: "Who painted the Mona Lisa?",
    answers: [
      { label: "Leonardo da Vinci", correct: true, visible: true },
      { label: "Pablo Picasso", correct: false, visible: true },
      { label: "Vincent van Gogh", correct: false, visible: true },
      { label: "Michelangelo", correct: false, visible: true },
    ],
  },
  {
    id: 6,
    difficulty: "medium",
    name: "What is the tallest mountain in the world?",
    answers: [
      { label: "Mount Everest", correct: true, visible: true },
      { label: "K2", correct: false, visible: true },
      { label: "Kangchenjunga", correct: false, visible: true },
      { label: "Lhotse", correct: false, visible: true },
    ],
  },
  {
    id: 7,
    difficulty: "hard",
    name: "Who discovered penicillin?",
    answers: [
      { label: "Alexander Fleming", correct: true, visible: true },
      { label: "Louis Pasteur", correct: false, visible: true },
      { label: "Marie Curie", correct: false, visible: true },
      { label: "Albert Einstein", correct: false, visible: true },
    ],
  },
  {
    id: 8,
    difficulty: "hard",
    name: "What is the largest planet in our solar system?",
    answers: [
      { label: "Jupiter", correct: true, visible: true },
      { label: "Saturn", correct: false, visible: true },
      { label: "Neptune", correct: false, visible: true },
      { label: "Uranus", correct: false, visible: true },
    ],
  },
  {
    id: 9,
    difficulty: "hard",
    name: "Which language is spoken the most worldwide?",
    answers: [
      { label: "Mandarin Chinese", correct: true, visible: true },
      { label: "English", correct: false, visible: true },
      { label: "Spanish", correct: false, visible: true },
      { label: "Hindi", correct: false, visible: true },
    ],
  },
  {
    id: 10,
    difficulty: "easy",
    name: "What is the capital of Spain?",
    answers: [
      { label: "Madrid", correct: true, visible: true },
      { label: "Barcelona", correct: false, visible: true },
      { label: "Rome", correct: false, visible: true },
      { label: "Berlin", correct: false, visible: true },
    ],
  },
  {
    id: 11,
    difficulty: "easy",
    name: "Who is the author of 'The Great Gatsby'?",
    answers: [
      { label: "F. Scott Fitzgerald", correct: true, visible: true },
      { label: "Ernest Hemingway", correct: false, visible: true },
      { label: "Virginia Woolf", correct: false, visible: true },
      { label: "Mark Twain", correct: false, visible: true },
    ],
  },
  {
    id: 12,
    difficulty: "easy",
    name: "What is the symbol for gold on the periodic table?",
    answers: [
      { label: "Au", correct: true, visible: true },
      { label: "Ag", correct: false, visible: true },
      { label: "Fe", correct: false, visible: true },
      { label: "Hg", correct: false, visible: true },
    ],
  },
  {
    id: 13,
    difficulty: "medium",
    name: "Who painted 'Starry Night'?",
    answers: [
      { label: "Vincent van Gogh", correct: true, visible: true },
      { label: "Pablo Picasso", correct: false, visible: true },
      { label: "Claude Monet", correct: false, visible: true },
      { label: "Salvador Dalí", correct: false, visible: true },
    ],
  },
  {
    id: 14,
    difficulty: "medium",
    name: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { label: "Japan", correct: true, visible: true },
      { label: "China", correct: false, visible: true },
      { label: "South Korea", correct: false, visible: true },
      { label: "Thailand", correct: false, visible: true },
    ],
  },
  {
    id: 15,
    difficulty: "medium",
    name: "What is the chemical formula for table salt?",
    answers: [
      { label: "NaCl", correct: true, visible: true },
      { label: "H2O", correct: false, visible: true },
      { label: "CO2", correct: false, visible: true },
      { label: "CH4", correct: false, visible: true },
    ],
  },
  {
    id: 16,
    difficulty: "hard",
    name: "Who composed the 'Four Seasons'?",
    answers: [
      { label: "Antonio Vivaldi", correct: true, visible: true },
      { label: "Wolfgang Amadeus Mozart", correct: false, visible: true },
      { label: "Ludwig van Beethoven", correct: false, visible: true },
      { label: "Johann Sebastian Bach", correct: false, visible: true },
    ],
  },
  {
    id: 17,
    difficulty: "hard",
    name: "Which of Shakespeare's plays is the longest?",
    answers: [
      { label: "Hamlet", correct: true, visible: true },
      { label: "Othello", correct: false, visible: true },
      { label: "Macbeth", correct: false, visible: true },
      { label: "King Lear", correct: false, visible: true },
    ],
  },
  {
    id: 18,
    difficulty: "hard",
    name: "Who is the Greek goddess of wisdom?",
    answers: [
      { label: "Athena", correct: true, visible: true },
      { label: "Aphrodite", correct: false, visible: true },
      { label: "Artemis", correct: false, visible: true },
      { label: "Hera", correct: false, visible: true },
    ],
  },
  {
    id: 19,
    difficulty: "easy",
    name: "What is the largest mammal?",
    answers: [
      { label: "Blue Whale", correct: true, visible: true },
      { label: "African Elephant", correct: false, visible: true },
      { label: "Giraffe", correct: false, visible: true },
      { label: "Hippopotamus", correct: false, visible: true },
    ],
  },
  {
    id: 20,
    difficulty: "easy",
    name: "Who invented the light bulb?",
    answers: [
      { label: "Thomas Edison", correct: true, visible: true },
      { label: "Nikola Tesla", correct: false, visible: true },
      { label: "Alexander Graham Bell", correct: false, visible: true },
      { label: "Isaac Newton", correct: false, visible: true },
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
