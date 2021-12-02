const boardElements = document.querySelectorAll(".board-element");
const resetBoardButton = document.querySelector(".reset");

let gameBoard = [];

function genereateNewBoard() {
  for (i = 0; i < 9; i++) {
    gameBoard.push(null);
  }
}

boardElements.forEach((element) => {
  element.addEventListener(
    "click",
    () => {
      const letter = document.createElement("p");
      letter.textContent = "x";
      letter.classList.add("letter");
      element.appendChild(letter);
    },
    { once: true }
  );
});

resetBoardButton.addEventListener("click", () => {
  genereateNewBoard();
  boardElements.forEach((element) => {
    element.replaceChildren();
    element.addEventListener(
      "click",
      () => {
        const letter = document.createElement("p");
        letter.textContent = "x";
        letter.classList.add("letter");
        element.appendChild(letter);
      },
      { once: true }
    );
  });
});

// user sets (inputs) player1.name / player2.name
// player 1 chooses to place X or O on board
// show gameBoard: 1 div container, 9 static divs, grid-template: repeat(3, 1fr) / repeat(3, 1fr)
//  = each grid cell corresponds to index in array
// player 1's turn: board.onclick = place X or O on board
// board[board.indexOf(clickedCell)] = X
// document.createElement('p').textContent='x'
// classList.add('letter')
// disable addEventListener for clicked cell
// player 2's turn: board.onclick = place O or X on board
// if gameBoard[1,2,3] || 1,5,9 || 1,4,7 || 2,5,8 || 3,6,9 || 3,5,7 === X or O
// disable everything, display winner, display new game button
