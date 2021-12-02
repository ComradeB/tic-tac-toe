const boardContainer = document.querySelector('.board-container')
const boardElements = document.querySelectorAll(".board-element");
const resetBoardButton = document.querySelector(".reset");
const div5 = document.getElementsByClassName("5")
const boardElement = document.getElementById('#5')

let positionTracker = [];
let turnTracker = 0

function genereateNewBoard() {
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
      },
      { once: true }
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
        const winnerAnnouncement = document.createElement('p')
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
        const winnerAnnouncement = document.createElement('p')
        winnerAnnouncement.textContent = 'Yay! Player O has won.'
        boardContainer.after(winnerAnnouncement)
        boardElements.forEach(element => element.onclick = null)
    } else if (turnTracker === 9) {
        const drawAnnouncement = document.createElement('p')
        drawAnnouncement.textContent = 'Tie game!'
        boardContainer.after(drawAnnouncement)
        boardElements.forEach(element => element.onclick = null)
    }
    
}

resetBoardButton.onclick = () => genereateNewBoard()

genereateNewBoard();


// user sets (inputs) player1.name / player2.name
// display new game button
// keep score
