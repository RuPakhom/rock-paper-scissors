const WEAPONS = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;


function getHumanChoice(){
    let choice = "";
    while(!WEAPONS.includes(choice)){
        choice = String(prompt("Choose your weapon (rock, paper or scissors)")).toLowerCase()
        if(!WEAPONS.includes(choice)){
            console.log(`Wrong weapon ${choice}! Try again`)
        }
    }
    return choice.toLowerCase();
    
   
}

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    return WEAPONS[choice];
}

function playRound(humanChoice,computerChoice){
    console.log(`Round ${++roundNumber}`)
    console.log(`Your weapon: ${humanChoice}`)
    console.log(`Computer's weapon: ${computerChoice}`)

    if(humanChoice === computerChoice){
        console.log("It is a draw!");
    }
    else if((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper")){
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }
    else{
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }

    console.log("Current score:")
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log("===============================");
}


function playGame(){
    while(humanScore < 5 && computerScore < 5){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if(humanScore === 5){
        console.log("You won the Game")
    }
    else{
        console.log("Unfortunately, you lose the Game")
    }
}

playGame();