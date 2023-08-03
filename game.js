// Define the list of valid moves
const validMoves = ["rock", "paper", "scissors"];
const maxRounds = 5;

function getComputerSelection() {
  const index = Math.floor(Math.random() * validMoves.length);
  return validMoves[index];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return 1;
  } else if (playerSelection === computerSelection) {
    return 0;
  } else {
    return -1;
  }
}

function getValidWordFromUser(round) {
  let userInput;
  do {
    userInput = prompt(
      `Round ${round} - Enter your selection (rock, paper, scissors):`
    );

    if (userInput === "quit" || userInput === null) {
      return "quit";
    }

    userInput = userInput.trim().toLowerCase();

    if (!validMoves.includes(userInput)) {
      console.log(`Invalid input: "${userInput}". Please enter a valid move.`);
    }
  } while (!validMoves.includes(userInput));

  return userInput;
}

function game() {
  console.clear();
  console.log(`
***************************************************************************
Welcome to the rock, paper, scissors game!
You have 5 rounds to win the game. Good Luck!
To quit, press the prompt cancel button or type "quit".
***************************************************************************
`);

  let userScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= maxRounds; round++) {
    const computerSelect = getComputerSelection();
    const validUserInput = getValidWordFromUser(round);

    if (validUserInput === "quit") {
      console.log(`>> You chose to quit. Next Hero please!`);
      return;
    }

    const result = playRound(validUserInput, computerSelect);

    switch (result) {
      case -1:
        computerScore++;
        console.log(`>> You Lose, ${computerSelect} beats ${validUserInput}`);
        break;
      case 0:
        console.log(">> It's a tie");
        break;
      case 1:
        userScore++;
        console.log(
          `>> Congratulations! You win! ${validUserInput} beats ${computerSelect}`
        );
        break;
    }
  }

  if (computerScore < userScore) {
    console.log(
      `>> You scored: ${userScore}, while the villain AI scored ${computerScore}. The world is saved, let's have some free food`
    );
  } else if (computerScore === userScore) {
    console.log(
      `>> You scored: ${userScore}, same as the villain AI scored ${computerScore}. Let's give it another try`
    );
  } else {
    console.log(
      `>> You scored: ${userScore}, while the villain AI scored ${computerScore}. The world is doomed, Villain computer will take over now, Rest in peace yall`
    );
  }
}

let startGameBtn = document.querySelector(".startGame");
startGameBtn.addEventListener("click", game);
