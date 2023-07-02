const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.createElement('div');
scoreElement.id = 'score';
scoreElement.classList.add('hide');

let shuffledQuestions, currentQuestionIndex, score;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  scoreElement.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (correct) {
    score++;
  }
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    nextButton.classList.remove('hide');
  } else {
    showScore();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function showScore() {
  questionContainerElement.classList.add('hide');
  scoreElement.innerText = `Your Score: ${score}/${shuffledQuestions.length}`;
  scoreElement.classList.remove('hide');
  startButton.innerText = 'Restart';
  startButton.classList.remove('hide');
}

// Append the score element to the container
document.querySelector('.container').appendChild(scoreElement);

const questions = [];
    for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
        const num2 = Math.floor(Math.random() * 10) + 1;
        const answer = num1 + num2;
      
        const question = {
          question: `What is ${num1} + ${num2}?`,
          answers: [
            { text: answer.toString(), correct: true },
            { text: (answer + 1).toString(), correct: false },
            { text: (answer - 1).toString(), correct: false },
            { text: (answer + 2).toString(), correct: false },
          ],
        };
        questions.push(question);
    }
    console.log(questions);
//   {
//     question: 'What is 2 + 2?',
//     answers: [
//       { text: '4', correct: true },
//       { text: '22', correct: false },
//     ],
//   },
//   {
//     question: 'Who is the best YouTuber?',
//     answers: [
//       { text: 'Web Dev Simplified', correct: true },
//       { text: 'Traversy Media', correct: true },
//       { text: 'Dev Ed', correct: true },
//       { text: 'Fun Fun Function', correct: true },
//     ],
//   },
//   {
//     question: 'Is web development fun?',
//     answers: [
//       { text: 'Kinda', correct: false },
//       { text: 'YES!!!', correct: true },
//       { text: 'Um no', correct: false },
//       { text: 'IDK', correct: false },
//     ],
//   },
//   {
//     question: 'What is 4 * 2?',
//     answers: [
//       { text: '6', correct: false },
//       { text: '8', correct: true },
//     ],
//   },
  
// ];
