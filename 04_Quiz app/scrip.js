const questions  = [
    {
        question : "Which is largest animal in the world?",
        answers : [
            {text : "Shark", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "Elephant", correct : false},
            {text : "Giraffe", correct : false},
        ]
    },
    {
        question : "Which is the largest desert in the world",
        answers : [
            {text : "Kalhari", correct : false},
            {text : "Gobi", correct : false},
            {text : "Sahara", correct : false},
            {text : "Antartica", correct : true},
        ]
    },
    {
        question : "Which is the smallest continent in the world?",
        answers : [
            {text : "Asia", correct : false},
            {text : "Australia", correct : true},
            {text : "Artic", correct : false},
            {text : "Africa", correct : false},
        ]
    },
    {
        question : "Which is the smallest contry in the world?",
        answers : [
            {text : "Vatican City", correct : true},
            {text : "Bhutan", correct : false},
            {text : "Nepal", correct : false},
            {text : "Sri Lanka", correct : false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;



    currentQuestion.answers.forEach(ans =>{
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(ans.correct){
            button.dataset.correct = ans.correct
        }

        button.addEventListener("click", selectAnswer);

    })
    
}
function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectButton = e.target;
    const isCorrect = selectButton.dataset.correct === "true";
    if(isCorrect){
        selectButton.classList.add("correct");
        score++
    }else{
        selectButton.classList.add("incorrect");
    }
    console.log(answerBtn.children);
    Array.from(answerBtn.children).forEach(btn=>{
        if(btn.dataset.correct==="true"){
            btn.classList.add("correct");
        }
        btn.disabled = "block";
    });
    nextBtn.style.display = "block"
}

function handelnextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display= "block"

}
nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handelnextButton();
    }else{
        startQuiz()
    }
})

startQuiz();
