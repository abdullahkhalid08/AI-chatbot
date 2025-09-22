function drivingTheoryTest() {
  const questions = [
    {
      question: "1. What does a red traffic light mean?\n(a) Stop\n(b) Go\n(c) Slow down\n(d) Turn",
      answer: "a"
    },
    {
      question: "2. What should you do before changing lanes?\n(a) Honk horn\n(b) Check mirrors & blind spots\n(c) Speed up\n(d) Slow down only",
      answer: "b"
    },
    {
      question: "3. What is the legal blood alcohol limit while driving?\n(a) 0.08%\n(b) 1.00%\n(c) 0.5%\n(d) 0.2%",
      answer: "a"
    }
  ];

  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(questions[i].question).toLowerCase();
    
    if (userAnswer === questions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert(" Incorrect. The correct answer was: " + questions[i].answer);
    }
  }

  alert("📊 Test Complete!\nYour Score: " + score + "/" + questions.length);

  if (score >= 2) {
    alert(" Congratulations! You passed the theory test.");
  } else {
    alert("❗ You failed. Please try again.");
  }
}
