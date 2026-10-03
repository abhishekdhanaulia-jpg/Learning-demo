let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}
const drawGame = () => {
   msg.innerText = "Game is Draw";
  msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
  msg.innerText = "You win! Your ${userChoice} beats ${compChoice}";
  msg.style.backgroundColor = "green";}
  else{
    compScore++;
    compScorePara.innerText = compScore;
     msg.innerText = "You lose!";
    msg.style.backgroundColor = "red";
  }
}

const playgame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if(userChoice === compChoice) {
    //Draw game
    drawGame();
  }  else{
    let userWin = true;
    if(userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;}
    else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;}
    else if ( userChoice === "scissors") { userWin = 
      compChoice === "rock" ? false : true; }
    
    showWinner(userWin); 
    
  }
};

choices.forEach((choice) =>  {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
