const getUserChoice = (userInput = "") => {
  userInput = userInput.toLowerCase();
  if (
    userInput == "rock" ||
    userInput == "paper" ||
    userInput == "scissors" ||
    userInput == "bomb"
  ) {
    return userInput;
  } else {
    console.log("Unexpected Input");
    return "";
  }
};

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return "Tie";
  } else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper") ||
    userChoice == "bomb"
  ) {
    return "Won";
  } else {
    return "Lost";
  }
}

function playGame(
  userChoice = getUserChoice("bomb"),
  computerChoice = getComputerChoice()
) {
  console.log(`computer chose: ${computerChoice}`);
  console.log(`player chose: ${userChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
