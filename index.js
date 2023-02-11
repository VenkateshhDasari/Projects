const cells = document.querySelectorAll("span");
let currentPlayer = "X";
let gameEnd = false;
const winningCombinations = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

for (let i = 0; i < cells.length; i++) {
cells[i].addEventListener("click", function(event) {
if (!event.target.textContent && !gameEnd) {
event.target.textContent = currentPlayer;
checkForWin();
checkForDraw();
if (currentPlayer === "X") {
currentPlayer = "O";
} else {
currentPlayer = "X";
}
}
});
}

const checkForWin = () => {
for (let i = 0; i < winningCombinations.length; i++) {
const [a, b, c] = winningCombinations[i];
if (
cells[a].textContent === currentPlayer && 
cells[b].textContent === currentPlayer && 
cells[c].textContent === currentPlayer 
) {
gameEnd = true;
setTimeout(() => {
if (currentPlayer === "X") {
alert("Player O wins!");
} else {
alert("Player X wins!");
}
}, 200);
}
}
};

const checkForDraw = () => {
let emptyCells = 0;
for (let i = 0; i < cells.length; i++) {
if (!cells[i].textContent) {
emptyCells++;
}
}
if (emptyCells === 0 && !gameEnd) {
setTimeout(() => {
alert("It's a draw!");
}, 200);
}
};

const reset = () => {
for (let i = 0; i < cells.length; i++) {
cells[i].textContent = "";
}
gameEnd = false;
currentPlayer = "X";
};

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);