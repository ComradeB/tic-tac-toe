const boardContainer = document.querySelector('.board-container')
const boardElements = document.querySelectorAll(".board-element");
const resetBoardButton = document.querySelector(".reset");

let winnerAnnouncement = document.createElement('p')
winnerAnnouncement.style.cssText = "margin-bottom: -1em; padding: 0;"

let positionTracker = [];
let turnTracker = 0

function genereateNewBoard() {
    winnerAnnouncement.textContent = '';
    positionTracker = [];
    turnTracker = 0;

  boardElements.forEach((element) => {
    element.replaceChildren();
    element.onclick = () => {
        const letter = document.createElement("p");
        turnTracker % 2 === 0
          ? (letter.textContent = "x")
          : (letter.textContent = "o");
        letter.classList.add("letter");
        element.appendChild(letter);
        positionTracker[element.id] = letter.textContent;
        turnTracker++
        determineWinner(positionTracker)
        element.onclick = null
      }
  });
}

function determineWinner(positionTracker) {
    if (positionTracker[0] === 'x' && positionTracker[1] === 'x' && positionTracker[2] === 'x' || 
    positionTracker[3] === 'x' && positionTracker[4] === 'x' && positionTracker[5] === 'x' || 
    positionTracker[6] === 'x' && positionTracker[7] === 'x' && positionTracker[8] === 'x' ||
    positionTracker[0] === 'x' && positionTracker[3] === 'x' && positionTracker[6] === 'x' ||
    positionTracker[1] === 'x' && positionTracker[4] === 'x' && positionTracker[7] === 'x' ||
    positionTracker[2] === 'x' && positionTracker[5] === 'x' && positionTracker[8] === 'x' ||
    positionTracker[0] === 'x' && positionTracker[4] === 'x' && positionTracker[9] === 'x' ||
    positionTracker[2] === 'x' && positionTracker[4] === 'x' && positionTracker[6] === 'x') {
        winnerAnnouncement.textContent = 'Yay! Player X has won.'
        boardContainer.after(winnerAnnouncement)
        boardElements.forEach(element => element.onclick = null)
    } else if (positionTracker[0] === 'o' && positionTracker[1] === 'o' && positionTracker[2] === 'o' || 
    positionTracker[3] === 'o' && positionTracker[4] === 'o' && positionTracker[5] === 'o' || 
    positionTracker[6] === 'o' && positionTracker[7] === 'o' && positionTracker[8] === 'o' ||
    positionTracker[0] === 'o' && positionTracker[3] === 'o' && positionTracker[6] === 'o' ||
    positionTracker[1] === 'o' && positionTracker[4] === 'o' && positionTracker[7] === 'o' ||
    positionTracker[2] === 'o' && positionTracker[5] === 'o' && positionTracker[8] === 'o' ||
    positionTracker[0] === 'o' && positionTracker[4] === 'o' && positionTracker[9] === 'o' ||
    positionTracker[2] === 'o' && positionTracker[4] === 'o' && positionTracker[6] === 'o') {
        winnerAnnouncement.textContent = 'Yay! Player O has won.'
        boardContainer.after(winnerAnnouncement)
        boardElements.forEach(element => element.onclick = null)
    } else if (turnTracker === 9) {
        winnerAnnouncement.textContent = 'Tie game!'
        boardContainer.after(winnerAnnouncement)
        boardElements.forEach(element => element.onclick = null)
    }   
}

resetBoardButton.onclick = () => genereateNewBoard()

genereateNewBoard();

// user sets (inputs) player1.name / player2.name
// display new game button
// keep score
