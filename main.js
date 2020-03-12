var grid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

var currentPlayer = 1;
var array = [];
var turn = 0;

//DOM Elements
var container = document.getElementById("container");
var winModalButton = document.getElementById("modalButton");
var drawModalButton = document.getElementById("drawModalButton");
var getResetText = document.getElementById("resetText");
var h2 = document.querySelector("h2");
var winModal = document.querySelector(".win-game");
var tieModal = document.querySelector(".tie-game");
var modalPlayerNumber = document.getElementById("modalPlayerNumber");
var playerOneWins = document.getElementById("p1wins");
var playerTwoWins = document.getElementById("p2wins");
var p1Wins = 0;
var p2Wins = 0;

//Event Listeners
container.addEventListener("click", dropChip);
winModalButton.addEventListener("click", modalReset);
drawModalButton.addEventListener("click", modalReset);
getResetText.addEventListener("click", resetGame);

// win condition

function winConditions() {
    horizontalWin();
    verticalWin();
    diagonalPlus();
    diagonalMinus();
}

function winTracker() {
    if (currentPlayer !== 1) {
        p2Wins++;
        playerOneWins.textContent = "Player 2 Wins: " + p2Wins
    } else {
        p1Wins++;
        playerTwoWins.textContent = "Player 1 Wins: " + p1Wins
    }
}

//horizontal
function horizontalWin() {
    for (var row = 0; row <= 5; row++) {
        var grids = grid[row];
        for (var col = 0; col <= 6; col++) {
            if (
                grids[col] === grids[col + 1] &&
                grids[col] === grids[col + 2] &&
                grids[col] === grids[col + 3] &&
                grids[col] !== 0
            ) {
                winModal.classList.remove("hidden");
                winTracker();
                if (currentPlayer === 1) {
                    currentPlayer = 2;
                    modalPlayerNumber.textContent = "Player " + currentPlayer + " has won the game!";
                } else if (currentPlayer === 2) {
                    currentPlayer = 1;
                    modalPlayerNumber.textContent = "Player " + currentPlayer + " has won the game!";
                }
            }
        }
    }
}

//vertical
function verticalWin() {
    for (var row = 0; row <= 2; row++) {
        var grids = grid[row];
        for (var col = 0; col <= 6; col++) {
            if (
                grids[col] === grid[row + 1][col] &&
                grids[col] === grid[row + 2][col] &&
                grids[col] === grid[row + 3][col] &&
                grids[col] !== 0
            ) {
                winModal.classList.remove("hidden");
                winTracker();
                if (currentPlayer === 1) {
                    currentPlayer = 2;
                    modalPlayerNumber.textContent = "Player " + currentPlayer + " has won the game!";
                } else if (currentPlayer === 2) {
                    currentPlayer = 1;
                    modalPlayerNumber.textContent = "Player " + currentPlayer + " has won the game!";
                }
            }
        }
    }
}

//diagonal(+)
function diagonalPlus() {
    for (var row = 5; row >= 3; row--) {
        for (var col = 0; col <= 6; col++) {
            if (
                grid[row][col] === grid[row - 1][col + 1] &&
                grid[row - 1][col + 1] === grid[row - 2][col + 2] &&
                grid[row - 2][col + 2] === grid[row - 3][col + 3] &&
                grid[row][col] !== 0
            ) {
                winModal.classList.remove("hidden");
                winTracker();
                if (currentPlayer === 1) {
                    currentPlayer = 2;
                    modalPlayerNumber.textContent = "Player " + currentPlayer + " has won the game!";
                } else if (currentPlayer === 2) {
                    currentPlayer = 1;
                    modalPlayerNumber.textContent = "Player " + currentPlayer + " has won the game!";
                }
            }
        }
    }
}

//diagonal(-)

function diagonalMinus() {
    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 6; col++) {
            if (
                grid[row][col] === grid[row + 1][col + 1] &&
                grid[row][col] === grid[row + 2][col + 2] &&
                grid[row][col] === grid[row + 3][col + 3] &&
                grid[row][col] !== 0
            ) {
                winModal.classList.remove("hidden");
                winTracker();
                if (currentPlayer === 1) {
                    currentPlayer = 2;
                    modalPlayerNumber.textContent = "Player " + currentPlayer + " has won the game!";
                } else if (currentPlayer === 2) {
                    currentPlayer = 1;
                    modalPlayerNumber.textContent = "Player " + currentPlayer + " has won the game!";
                }
            }
        }
    }
}

function dropChip(e) {
    var column = e.target.parentElement;
    if (column.className !== "column") {
        return;
    }
    if (column.children[0].className !== "slot") {
        return;
    }
    var col = column.id;
    if (currentPlayer === 1) {
        for (var row = 5; row >= 0; row--) {
            if (grid[row][col] === 0) {
                grid[row][col] = 1;
                break;
            }
        }
        currentPlayer = 2;
        h2.textContent = "Player 2's Turn";
    } else {
        for (var row2 = 5; row2 >= 0; row2--) {
            if (grid[row2][col] === 0) {
                grid[row2][col] = 2;
                break;
            }
        }
        currentPlayer = 1;
        h2.textContent = "Player 1's Turn";
    }
    colorGrid();
    winConditions();
    turn++;
    turnCounter();
}

function colorGrid() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++) {
            if (grid[row][col] === 0) {
                document.getElementById("cell" + row + col).className = "slot";
            } else if (grid[row][col] === 1) {
                document.getElementById("cell" + row + col).className = "slot " + array[0];
            } else if (grid[row][col] === 2) {
                document.getElementById("cell" + row + col).className = "slot " + array[1];
            }
        }
    }
}

function resetGame() {
    for (var row = 5; row >= 0; row--) {
        for (var col = 0; col <= 6; col++) {
            grid[row][col] = 0;
        }
    }
    currentPlayer = 1;
    h2.textContent = "Player 1's Turn";
    colorGrid();
    destroyBeer();
    turn = 0;
}

function modalReset() {
    for (var row = 5; row >= 0; row--) {
        for (var col = 0; col <= 6; col++) {
            grid[row][col] = 0;
        }
    }
    currentPlayer = 1;
    winModal.classList.add("hidden");
    tieModal.classList.add("hidden");
    h2.textContent = "Player 1's Turn";
    colorGrid();
    destroyBeer();
    turn = 0;
}

var beer = document.getElementById("beerContent");
var box = document.querySelector(".box");

beer.addEventListener("click", beerClick);

var beerModal = document.querySelector(".modal-beer");

function beerClick(e) {
    if (e.target.classList.contains("slot")) {
        e.target.classList.add("invisible");
        var beerIcon = e.target.id;
        array.push(beerIcon);

        if (array.length === 2) {
            beerModal.classList.add("hidden");
        }
    }
}

function destroyBeer() {
    while (box.hasChildNodes()) {
        box.removeChild(box.lastChild);
    }
    createBeer();
    array = [];
}

function createBeer() {
    for (let i = 1; i <= 9; i++) {
        var div = document.createElement("div");
        div.className = `slot player${i}`;
        div.setAttribute("id", `player${i}`);
        box.appendChild(div);
    }
    beerModal.classList.remove("hidden");
}

function turnCounter() {
    if (turn === 42) {
        tieModal.classList.remove("hidden");
    }
}
