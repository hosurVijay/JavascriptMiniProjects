const pointTree = document.querySelector(".point-tree");
const mainContainer = document.querySelector(".main-container");
const questionBox = document.querySelector('.questions p')
const quitButton = document.querySelector(".quit");
const optionButtonText = document.querySelectorAll(".options button p");
const optionButtons = document.querySelectorAll(".options button");
const questionNumberDisplay = document.querySelector(".ques-nos p") ;
const startGame = document.querySelector(".start-game");
const startGameButton = document.querySelector('.start-game-btn')
const stake = document.querySelector(".stake span");
const gameEnd = document.querySelector(".game-over");
console.log(stake)
const restartGame = document.querySelector(".start-new");
console.log(restartGame)

mainContainer.addEventListener("click", (evt)=>{
   if(evt.target.tagName === "IMG"){
    pointTree.classList.toggle("show");
   }
})

let userScore = 0;
let userDifficuilty = 1;
let questionOptions = []
let questionNos =1;
let winningPrice = 0;
let priceWon = 0;

const pointsTree = [
   {id:12, quesPrice : 2500000, status:"false"},
   {id:11, quesPrice : 640000, status:"false"},
   {id:10, quesPrice : 320000, status:"false"},
   {id:9, quesPrice : 160000, status:"false"},
   {id:8, quesPrice : 80000, status:"false"},
   {id:7, quesPrice : 40000, status:"false"},
   {id:6, quesPrice : 20000, status:"false"},
   {id:5, quesPrice : 10000, status:"false"},
   {id:4, quesPrice : 5000, status:"false"},
   {id:3, quesPrice : 4000, status:"false"},
   {id:2, quesPrice : 2000, status:"false"},
   {id:1, quesPrice : 1000, status:"false"},
]

async function playGame(){
   disPlayPrice()
   
   questionOptions.length = 0;
   questionNumberDisplay.innerHTML = questionNos
   const quizUrl = "https://the-trivia-api.com/v2/questions";
   const response = await fetch(quizUrl);

   if(!response.status){
      console.log(`Response status ${response.status}`)
   }else{
      const json = await response.json();
      const question = json[0]
      let randomQuestion = (question.question.text);
      questionBox.textContent = randomQuestion
      questionOptions.push(question.correctAnswer);
      question.incorrectAnswers.forEach(option => {
         questionOptions.push(option)
      });
      console.log(questionOptions);
      generateQuestionOptions();

      console.log(question.correctAnswer);

   let isoptionSelected = false
   function checkCorrectAnswer(){
      optionButtons.forEach(opt=>{
         opt.addEventListener("click", (evt)=>{
            evt.preventDefault();

            if(isoptionSelected) return;
            isoptionSelected = true;

            if(opt.textContent.trim() === question.correctAnswer.trim()){
               userScore++;
               opt.classList.add("correct");
            
                  optionButtons.forEach(item=>{
                     item.classList.remove("lock")
                  });
                  questionNos++

               setTimeout(()=>{
                  opt.classList.remove("correct");
                  playGame()
                  optionButtons.forEach(item=>{
                     item.classList.add("lock")
                  })
               },4000);
            }else{
               console.log("You Lost");
               opt.classList.add("wrong");
               optionButtons.forEach(button=>{
                  button.classList.remove("lock")
                  button.disabled = true;
                  
                  if(questionNos<=4){
                  winningPrice = 0;
                  }else if(questionNos>4 && questionNos<=8){
                  winningPrice = 5000;
                  }else if(questionNos>8 && questionNos<12){
                  winningPrice = 160000;
                  }else if(questionNos==12){
                  winningPrice = 2500000
                  }

                  setTimeout(()=>{
                     mainContainer.classList.add("hidden");
                  gameEnd.classList.remove("hidden");

                  gameEnd.innerHTML = `
                     <h1>GAME OVER</h1>
                     <h2>Congratulations You Have Won <h2>
                     <p class = price-won>${winningPrice} <span>Rs<?span></p>
                     <button class = start-new>Play Again</button>
                  `;
                  },3000);
               })
            
            function showAnswer(){
               optionButtons.forEach(option =>{
                  if(option.textContent.trim() === question.correctAnswer.trim()){
                     option.classList.add("correct");
                     option.classList.remove("lock")
                  }
               })
                  console.log("Better luck Next time");
               }
               showAnswer();
            }
         })
      })
   }
}
   checkCorrectAnswer();
   quitGame();
   // newGame();

}

function generateQuestionOptions(){
   const number = [0,1,2,3]
   const randomNumberOption = [];
   while(number.length > 0){
      const randomIndex = Math.floor(Math.random()*number.length)
      randomNumberOption.push(number.splice(randomIndex,1)[0]);
   }

   let i = 0
   optionButtonText.forEach(opt=>{
      console.log(opt)
      opt.innerHTML = `
         <p>${questionOptions[randomNumberOption[i]]}</p>
      `
      i++
   })
}

function disPlayPrice(){
   pointTree.innerHTML = '';

   pointsTree.forEach(point=>{
      const divElementTree = document.createElement("div");
         divElementTree.classList.add("point-list");

         if(point.id === questionNos){
            point.status = "active";
            divElementTree.classList.add(point.status)
            stake.textContent = point.quesPrice
         }

      divElementTree.innerHTML = `
         <p id=${point.id}>${point.quesPrice}</p><span>Rs</span>
      `
      pointTree.appendChild(divElementTree);
   });
   console.log(pointsTree)
}

startGameButton.addEventListener("click", (e)=>{
   playGame();
   setTimeout(()=>{
      mainContainer.classList.remove("hidden");
      startGame.classList.add("hidden")
   },1500);
});


function quitGame(){
   quitButton.addEventListener("click", (e)=>{

   
      mainContainer.classList.add("hidden");
      gameEnd.classList.remove("hidden");
      
         if(questionNos == 1){
         priceWon = 0;
         }else{
            priceWon = pointsTree.find(item=> (item.id== questionNos-1))?.quesPrice;
         }
      console.log(priceWon)
         gameEnd.innerHTML = `
            <h1>GAME OVER</h1>
            <h2>Congratulations You Have Won <h2>
            <p class = price-won>${priceWon} <span>Rs<?span></p>
            <button class = start-new>Play Again!</button>
         `;
      
      
   });



      gameEnd.addEventListener("click",(e)=>{
         if(e.target.tagName === "BUTTON"){
            location.reload();
            // console.log("clicked");
            //    userScore = 0;
            //    questionNos = 1;
            //    winningPrice = 0;
            //    priceWon = 0;
            //    setTimeout(()=>{
            //       mainContainer.classList.remove("hidden");
            //       gameEnd.classList.add("hidden")
            //       console.log("clicked again");
            //       optionButtons.forEach(opt=>{
            //          opt.classList.remove("wrong");
            //          opt.classList.remove("correct");
            //          opt.classList.add("lock");
            //          opt.disabled = false
            //       })
            //       playGame();

               // },1000)

               
            
         }
      })
   
   
   }