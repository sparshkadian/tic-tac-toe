// Selectors
const gridItem = document.querySelectorAll('.grid-item');
const body = document.querySelectorAll('body');
const winnerModal = document.querySelector('.winner-modal');
const winnerText = document.querySelector('.winner-modal-text');
const wrapper = document.querySelector('.wrapper');
const resetButton = document.querySelector('.reset-button');

// Variables
let currentPlayer = 0;
let positionX = [];
let positionO = [];
let turnCount = 0;

// Functions
function resetGame() {
  positionX = [];
  positionO = [];
  turnCount = 0;
  window.location.reload();
}

function gameDraw(turnCount) {
  if (turnCount + 1 === 10) {
    console.log('inside draw');
    console.log(turnCount);
    wrapper.style.backgroundColor = '#808080';
    wrapper.style.opacity = '0.2';
    wrapper.style.display = 'block';

    winnerText.textContent = `Game Draw`;
    winnerModal.style.display = 'flex';
  }
}

function showWinner(winner) {
  // Setting up the Wrapper over body
  wrapper.style.backgroundColor = '#808080';
  wrapper.style.opacity = '0.2';
  wrapper.style.display = 'block';

  // displaying the winner Modal
  winnerText.textContent = `${winner} Won`;
  winnerModal.style.display = 'flex';
}

function winnerX() {
  // Horizontal Cases for X
  if (
    gridItem[0].textContent === 'X' &&
    gridItem[1].textContent === 'X' &&
    gridItem[2].textContent === 'X'
  ) {
    showWinner('X');
  } else if (
    gridItem[3].textContent === 'X' &&
    gridItem[4].textContent === 'X' &&
    gridItem[5].textContent === 'X'
  ) {
    showWinner('X');
  } else if (
    gridItem[6].textContent === 'X' &&
    gridItem[7].textContent === 'X' &&
    gridItem[8].textContent === 'X'
  ) {
    showWinner('X');
  }

  // Vertical Cases for X
  if (
    gridItem[0].textContent === 'X' &&
    gridItem[3].textContent === 'X' &&
    gridItem[6].textContent === 'X'
  ) {
    showWinner('X');
  } else if (
    gridItem[1].textContent === 'X' &&
    gridItem[4].textContent === 'X' &&
    gridItem[7].textContent === 'X'
  ) {
    showWinner('X');
  } else if (
    gridItem[2].textContent === 'X' &&
    gridItem[5].textContent === 'X' &&
    gridItem[8].textContent === 'X'
  ) {
    showWinner('X');
  }

  // Diagonal Cases for X
  if (
    gridItem[0].textContent === 'X' &&
    gridItem[4].textContent === 'X' &&
    gridItem[8].textContent === 'X'
  ) {
    showWinner('X');
  } else if (
    gridItem[2].textContent === 'X' &&
    gridItem[4].textContent === 'X' &&
    gridItem[6].textContent === 'X'
  ) {
    showWinner('X');
  }
}

function winnerO() {
  // Horizontal Cases for O
  for (let i = 0; i < gridItem.length; i++) {}
  if (
    gridItem[0].textContent === 'O' &&
    gridItem[1].textContent === 'O' &&
    gridItem[2].textContent === 'O'
  ) {
    showWinner('O');
  } else if (
    gridItem[3].textContent === 'O' &&
    gridItem[4].textContent === 'O' &&
    gridItem[5].textContent === 'O'
  ) {
    showWinner('O');
  } else if (
    gridItem[6].textContent === 'O' &&
    gridItem[7].textContent === 'O' &&
    gridItem[8].textContent === 'O'
  ) {
    showWinner('O');
  }

  // Vertical Cases for O
  if (
    gridItem[0].textContent === 'O' &&
    gridItem[3].textContent === 'O' &&
    gridItem[6].textContent === 'O'
  ) {
    showWinner('O');
  } else if (
    gridItem[1].textContent === 'O' &&
    gridItem[4].textContent === 'O' &&
    gridItem[7].textContent === 'O'
  ) {
    showWinner('O');
  } else if (
    gridItem[2].textContent === 'O' &&
    gridItem[5].textContent === 'O' &&
    gridItem[8].textContent === 'O'
  ) {
    showWinner('O');
  }

  // Diagonal Cases for O
  if (
    gridItem[0].textContent === 'O' &&
    gridItem[4].textContent === 'O' &&
    gridItem[8].textContent === 'O'
  ) {
    showWinner('O');
  } else if (
    gridItem[2].textContent === 'O' &&
    gridItem[4].textContent === 'O' &&
    gridItem[6].textContent === 'O'
  ) {
    showWinner('O');
  }
}

// Handling events
for (let i = 0; i < gridItem.length; i++) {
  gridItem[i].addEventListener('click', () => {
    if (currentPlayer === 0 && gridItem[i].textContent === '') {
      (gridItem[i].textContent = 'X'), gridItem[i].classList.add('cross');
      currentPlayer = 1;
      positionX.push(i);
      turnCount++;
      if (turnCount > 4) winnerX();
    } else if (currentPlayer === 1 && gridItem[i].textContent === '') {
      (gridItem[i].textContent = 'O'), gridItem[i].classList.add('zero');
      currentPlayer = 0;
      positionO.push(i);
      turnCount++;
      if (turnCount > 4) winnerO();
    }
    gameDraw(turnCount);
  });
}

resetButton.addEventListener('click', () => {
  resetGame();
});
