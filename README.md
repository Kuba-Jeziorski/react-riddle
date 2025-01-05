# React Riddle

## Simple Quiz Application Made in React

### Stack:

- HTML
- CSS
- JS
- React (useState, useEffect)

### What React Riddle Is About:

As mentioned earlier, it's a simple quiz application built with React.

The quiz consists of 6 questions to be answered. After the user confirms all their answers, they are redirected to a summary page that displays all the questions along with their correct answers.

### How to Open?

1. Run the following commands in your terminal:
   - `npm install`
   - `npm start`
2. After executing these commands, the application will automatically open at `localhost:3000`.

### How to Play?

- Press the **Start** button to be redirected to the questions page.
- After redirection, the clock starts counting down from 10 minutes. The countdown is displayed in the "Time Remaining" section.
- Six cards are displayed on the screen.
  - The first card is set to active by default.
  - Pressing another card sets it as active—only one card can be active at a time.
- Each question has four answers, and only one of them is correct.
  - Selecting an answer does not confirm it; the **Confirm Answer** button must be pressed to submit the answer. Without pressing this button, the answer will not be submitted.
- The **50% / 50%** option eliminates half of the answer choices, leaving one correct answer among the remaining options. This feature can be used twice in a single game.
- Pressing the **Next** button sets the next card to the right as active.
- Below the "Time Remaining" section, there is a progress bar that updates each time the user confirms an answer.
- The quiz ends when the user presses the **Finish the Quiz** button or when the timer reaches 0.
- After the quiz is finished, the user is redirected to the summary page:
  - At the top of the summary page, questions answered correctly are displayed.
  - Below that, all questions and their correct answers are listed.
