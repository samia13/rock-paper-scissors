//  define the list of valid moves
const validMoves = ["rock", "paper", "scissors"];
let maxRounds = 5;

function getComputerSelection() {
  let index = Math.floor(Math.random() * validMoves.length);
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
  // no playing untill the user enters a valid move nihahahaha
  while (true) {
    let userInput = prompt(`Round ${round}: Enter your selection`);

    // if user typed quit or clicked on cancel
    if (userInput == "quit" || userInput == null) {
      return "quit";
    }

    userInput = userInput.trim().toLowerCase();

    // if user entered nothingand just pressed enter, or provided unvalid moves
    if (!userInput || !validMoves.includes(userInput)) {
      alert(
        "A little focus here (-___-)! Please enter only valid moves (rock, paper, scissors)."
      );
    } else {
      return userInput;
    }
  }
}

function game() {
  console.log(
    "***************************************************************************"
  );
  console.log(
    "Welcome to rock, paper, scissors game! \nwe count on you to save us From mister computer villain, Do us proud Hero \nList of valid Moves: rock, paper, scissors, please make sure to select one of these\n Keep in mind that You have 5 rounds to win the game, Good Luck \nTo quit, press the prompt cancel button, or type quit "
  );
  console.log(
    "***************************************************************************"
  );

  for (let i = 1; i <= maxRounds; i++) {
    const compSelect = getComputerSelection();

    let validUserInput = getValidWordFromUser(i);

    // if user types quit, exit the game
    if (validUserInput == "quit") {
      console.log(`You chose to quit, Next Hero please!`);
      return;
    }

    // else play a Round
    let result = playRound(validUserInput, compSelect);

    switch (result) {
      case -1:
        console.log(`You Lose, ${compSelect} beats ${validUserInput}`);
        break;
      case 0:
        console.log("it's a tie");
        break;
      case 1:
        console.log(
          `Congratulations! You win! ${validUserInput} beats ${compSelect}`
        );
        return;
    }

    // if it's the final round and the user lost, we should just go sleep lol
    if (i == 5 && !result) {
      console.log(
        "The world is doomed, Villain computer will take over now, Rest in peace yall"
      );
    }
  }
}

let startGameBtn = document.querySelector(".startGame");

startGameBtn.addEventListener("click", game);
// game();
