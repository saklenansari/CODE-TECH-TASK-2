document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const answer = document.querySelector('input[name="q1"]:checked');
  const result = document.getElementById('quizResult');
  
  if (answer) {
    if (answer.value === 'b') {
      result.textContent = "Correct!";
      document.getElementById('courseProgress').value = 2;
    } else {
      result.textContent = "Incorrect. Try again!";
    }
  } else {
    result.textContent = "Please select an answer.";
  }
});
