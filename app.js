const computerOptions = ["rock", "paper", "scissor"]


function play(playerChoice) {
  let compChoice = computerRng()
  console.log(compChoice)
  if (compChoice == playerChoice) {
    console.log("its a tie")
  } else if (playerChoice == "rock") {
    compChoice == "scissor" ? console.log("You win") : console.log("you lose")
  } else if (playerChoice == "paper") {
    compChoice == "rock" ? console.log("You win") : console.log("You lose")
  } else (playerChoice == "scissor")
  compChoice == "paper" ? console.log("you win") : console.log("you win")

}



function computerRng() {
  let randIndex = Math.floor(Math.random() * computerOptions.length)
  let computerChoice = computerOptions[randIndex]
  return computerChoice
}