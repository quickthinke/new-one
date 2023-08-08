let questions = [
    {
      question: "Question 1: What is the capital of France?",
      options: ["Paris", "London", "Madrid", "Rome"],
      answer: "1"
    },
    {
      question: "Question 2: Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      answer: "2"
    },
    {
      question: "Question 3: Which planet is closest to the sun?",
      options: ["Mars", "Venus", "Mercury", "Earth"],
      answer: "3"
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
  
    questionElement.innerText = questions[currentQuestion].question;
  
    optionsElement.innerHTML = "";
  
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
      let optionElement = document.createElement("input");
      optionElement.type = "radio";
      optionElement.name = "answer";
      optionElement.id = "option" + (i + 1);
      optionElement.value = (i + 1);
  
      let labelElement = document.createElement("label");
      labelElement.setAttribute("for", "option" + (i + 1));
      labelElement.id = "option" + (i + 1) + "-label";
      labelElement.innerText = questions[currentQuestion].options[i];
  
      optionsElement.appendChild(optionElement);
      optionsElement.appendChild(labelElement);
      optionsElement.appendChild(document.createElement("br"));
    }
  }
  
  function showResults() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      if (selectedOption.value === questions[currentQuestion].answer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        let resultElement = document.getElementById("result");
        resultElement.innerText = "Final Score: " + score + " out of " + questions.length;
  
        let questionsContainer = document.getElementById("questions-container");
        questionsContainer.style.display = "none";
  
        let resultsContainer = document.getElementById("results-container");
        resultsContainer.style.display = "block";
      }
    }
  }
  
  function restartExam() {
    currentQuestion = 0;
    score = 0;
  
    let resultsContainer = document.getElementById("results-container");
    resultsContainer.style.display = "none";
  
    let questionsContainer = document.getElementById("questions-container");
    questionsContainer.style.display = "block";
  
    displayQuestion();
  }
  
  window.onload = displayQuestion;