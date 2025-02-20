const WEAPONS = ["rock", "paper", "scissors"];
let humanScore
let computerScore
let roundNumber
let humanChoice

//UI
const gameZone = document.querySelector(".game-zone");
const statusBar = document.querySelector(".status");
const weaponBtns = document.querySelector(".weapons")
const weaponBtnsNodeList = document.querySelectorAll(".weapons img")



 function getHumanChoice(event){
    humanChoice = event.target.id
    playRound(humanChoice, getComputerChoice())
 }

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    return WEAPONS[choice];
}

function playRound(humanChoice,computerChoice){

    gameZone.textContent = ""

    const img1 = document.createElement("img")
    img1.src = `assets/${humanChoice}.png`
    const img2 = document.createElement("img")
    img2.src = `assets/${computerChoice}.png`

    statusBar.textContent = `Round #${++roundNumber}. `

    gameZone.appendChild(img1)
    gameZone.appendChild(img2)

    if(humanChoice === computerChoice){
        statusBar.textContent+= "It is a draw!";
    }
    else if((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper")){
        statusBar.textContent+= `You win this round! ${humanChoice} beats ${computerChoice}`
        humanScore++;
    }
    else{
        statusBar.textContent += `You lose this round! ${computerChoice} beats ${humanChoice}`
        computerScore++;
    }
    renderScore()
    checkWinner()
    
}

function renderScore(){
    const humanResultDiv = document.querySelector('.human .result');
    humanResultDiv.textContent = humanScore
    const computerResultDiv = document.querySelector('.computer .result');
    computerResultDiv.textContent = computerScore
}

function checkWinner(){

    if(humanScore === 5){
        stopGame("You won the game!")
   

    } else if(computerScore === 5){
        stopGame("Unfortunately, you lose the game")

    }
}

function stopGame(winnerText){
    

    const button = document.createElement("button")
    button.textContent = "New Game"
    weaponBtns.removeEventListener("click", getHumanChoice)
   
    weaponBtnsNodeList.forEach((btn) => {
        btn.classList.toggle("weapon")
    })
   
    setTimeout(() => {
        gameZone.textContent = winnerText
        statusBar.textContent = ""
        statusBar.appendChild(button)
        button.addEventListener("click", init)
      }, 2000);

}

function init(){
    humanScore = 0
    computerScore = 0
    roundNumber = 0
    humanChoice = ""
    renderScore()
    weaponBtns.addEventListener("click", getHumanChoice)
    statusBar.textContent = "Choose your weapon!"
    gameZone.textContent = "We play up to 5 points"
    weaponBtnsNodeList.forEach((btn) => {
        btn.classList.toggle("weapon")
    })

    
}

init()
