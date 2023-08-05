// Define the list of valid moves
const validMoves = ["rock", "paper", "scissors"];
const maxRounds = 5;

function getComputerSelection() {
  const index = Math.floor(Math.random() * validMoves.length);
  return validMoves[index];
}

function playRound(playerSelection, computerSelection) {
  // winConditions represents win cases,
  // where the obj key refers to move and value refers to what the move beats
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerSelection === computerSelection) {
    return 0; // Tie
  } else if (winConditions[playerSelection] === computerSelection) {
    return 1; // Win
  } else {
    return -1; // Loss
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
  alert(`Welcome to Rock, Paper, Scissors game, where our dear friend needs your help! \n
  Villain computer took over and imprisoned our fellow developer\n
  we count on you to save him, and the world, You have 5 rounds in Total\n
  Do us proud!`);
  console.log(`

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

  const finalResultMessage =
    computerScore < userScore
      ? ">> Congratulations, the world is saved, let's have some free food"
      : computerScore === userScore
      ? ">> It's a tie, Let's give it another try"
      : ">> You lost, Villain computer will take over now, Rest in peace y'all";

  console.log(
    `%cFinal Result: You ${userScore} - ${computerScore} villain AI.\n ${finalResultMessage}`,
    "color: blue; font-size: 17px"
  );
}

game();
