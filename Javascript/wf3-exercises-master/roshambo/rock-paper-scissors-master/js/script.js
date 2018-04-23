var choices = ['rock', 'paper', 'scissor']
var playerScore = 0;
var computerScore = 0;

// computer's choice
function computerPlay () {
  return choices[Math.floor(Math.random() * choices.length)];
}

// play 1 round
function playRound (playerSelection, computerSelection) {

var tie = 'Tie!';
var win = 'You win! ' + playerSelection + ' beats ' + computerSelection;
var lose = 'You loose! ' + computerSelection + ' beats ' + playerSelection;

document.querySelector('.computer-choice').textContent = "Computer's choice : " + computerSelection;

  switch (playerSelection) {
    case 'rock':
      if (computerSelection === 'rock') {
        return tie;
      } else if (computerSelection === 'paper') {
        computerScore += 1;
        return lose;
      } else {
        playerScore += 1;
        return win;
      }
    case 'paper':
      if (computerSelection === 'rock') {
        playerScore += 1;
        return win;
      } else if (computerSelection === 'paper') {
        return tie;
      } else {
        computerScore += 1;
        return lose;
      }
    case 'scissor':
      if (computerSelection === 'rock') {
        computerScore += 1;
        return lose;
      } else if (computerSelection === 'paper') {
        playerScore += 1;
        return win;
      } else {
        return tie;
      }
  }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    document.querySelector('.round-result').textContent = playRound(button.id, computerPlay());
    document.querySelector('.player-score').textContent = "You : " + playerScore;
    document.querySelector('.computer-score').textContent = "Computer : " + computerScore;
    if (playerScore == 5) {
      document.querySelector('.final-result').textContent = "Congratulations! You won! :)";
    } else if (computerScore == 5) {
      document.querySelector('.final-result').textContent = "Ho nooooo :( You loose :( Better luck next time!";
    };
  });
});
