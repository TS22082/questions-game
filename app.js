var questions = [];

questions.push({ q: 'Javascript is awesome', a: 't' });
questions.push({ q: 'Javascript is easy', a: 'f' });
questions.push({ q: 'i WILL know javascript', a: 't' });

// console.log(questions[0].a);
var questionIndex = 0;
var score = 0;
var questionText = document.querySelector('#questions');

function renderQuestion() {
  if (questionIndex === questions.length) {
    alert(`final score: ${score}`);
    questionIndex = 0;
    renderQuestion();
  }
  questionText.textContent = questions[questionIndex].q;
}

renderQuestion();

document.onkeyup = function(e) {
  var answer = e.key;

  if (answer === 't' || answer === 'f') {
    if (answer === questions[questionIndex].a) {
      score++;
      questionIndex++;
      renderQuestion();
      console.log('correct');
    } else {
      questionIndex++;
      renderQuestion();
      console.log('incorrect');
    }
  }
};
