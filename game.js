// Define the list of valid moves
const validMoves = ["rock", "paper", "scissors"];
const maxRounds = 5;

function getComputerSelection() {
  const index = Math.floor(Math.random() * validMoves.length);
  return validMoves[index];
}

function playRound(playerSelection, computerSelection) {
  // "0" represents tie, "1" represents win, "-1" represents lost
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
      console.log(
        `Invalid input: "${userInput}". Please enter a valid move (rock, paper, scissors).`
      );
    }
  } while (!validMoves.includes(userInput));

  return userInput;
}

function game() {
  console.clear();
  console.log(`
***************************************************************************
Welcome to the rock, paper, scissors game!
You have 5 rounds to win the game. 
To quit, press the prompt cancel button or type "quit".
Good Luck!
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

  let finalResultMessage;
  if (computerScore < userScore) {
    finalResultMessage = `>> Congratulations,the world is saved, let's have some free food`;
  } else if (computerScore === userScore) {
    finalResultMessage = `>> It's a tie, Let's give it another try`;
  } else {
    finalResultMessage = `>> You lost, Villain computer will take over now, Rest in peace yall`;
  }

  console.log(
    `%cFinal Result: You ${userScore} - ${computerScore} villain AI.\n ${finalResultMessage}`,
    "color: blue; font-size:17px"
  );
}

let startGameBtn = document.querySelector(".startGame");
startGameBtn.addEventListener("click", game);
