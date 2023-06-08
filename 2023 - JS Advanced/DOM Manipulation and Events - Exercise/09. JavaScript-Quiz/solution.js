function solve() {
  let sections = document.getElementsByTagName('section');
  let resultsContainer = document.getElementById('results');
  let resultsHeading = resultsContainer.querySelector('h1');
  let quizAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let currentSectionIndex = 0;
  let rightAnswers = 0;

  function showNextSection() {
    sections[currentSectionIndex].style.display = "none";
    sections[currentSectionIndex].classList.add('hidden');
    currentSectionIndex++;

    if (currentSectionIndex < sections.length) {
      sections[currentSectionIndex].style.display = "block";
      sections[currentSectionIndex].classList.remove('hidden');
    } else {
      showResults();
    }
  }

  function showResults() {
    resultsContainer.style.display = 'block';
    resultsHeading.textContent = rightAnswers === quizAnswers.length ?
      'You are recognized as top JavaScript fan!' :
      'You have ' + rightAnswers + ' right answers';
  }

  function checkAnswer(e) {
    let selectedAnswer = e.target.textContent;

    if (selectedAnswer === quizAnswers[currentSectionIndex]) {
      rightAnswers++;
    }

    showNextSection();
  }

  for (let i = 0; i < sections.length; i++) {
    let answers = sections[i].querySelectorAll('.quiz-answer');

    for (let j = 0; j < answers.length; j++) {
      answers[j].addEventListener('click', checkAnswer);
    }
  }
}