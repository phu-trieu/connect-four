var grid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

var currentPlayer = 1;

//DOM Elements
var container = document.getElementById("container");
var getResetButton = document.getElementById("resetButton");
var getModalButton = document.getElementById("modalButton");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var modal = document.querySelector(".modal-overlay");
var modalPlayerNumber = document.getElementById('modalPlayerNumber');

//Event Listeners
container.addEventListener("click", dropChip);
getResetButton.addEventListener("click", resetGame);
getModalButton.addEventListener("click", modalReset);

// win condition

function winConditions() {
    horizontalWin();
    verticalWin();
    diagonalPlus();
    diagonalMinus();
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
                modal.classList.remove("hidden");
                if(currentPlayer === 1) {
                    currentPlayer = 2;
                    modalPlayerNumber.textContent = 'Player ' + currentPlayer + ' has won the game!';
                } else if(currentPlayer === 2) {
                    currentPlayer = 1;
                    modalPlayerNumber.textContent = 'Player ' + currentPlayer + ' has won the game!';
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
                modal.classList.remove("hidden");
                if (currentPlayer === 1) {
                    currentPlayer = 2;
                    modalPlayerNumber.textContent = 'Player ' + currentPlayer + ' has won the game!';
                } else if (currentPlayer === 2) {
                    currentPlayer = 1;
                    modalPlayerNumber.textContent = 'Player ' + currentPlayer + ' has won the game!';
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
                modal.classList.remove("hidden");
                if (currentPlayer === 1) {
                    currentPlayer = 2;
                    modalPlayerNumber.textContent = 'Player ' + currentPlayer + ' has won the game!';
                } else if (currentPlayer === 2) {
                    currentPlayer = 1;
                    modalPlayerNumber.textContent = 'Player ' + currentPlayer + ' has won the game!';
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
                modal.classList.remove("hidden");
                if (currentPlayer === 1) {
                    currentPlayer = 2;
                    modalPlayerNumber.textContent = 'Player ' + currentPlayer + ' has won the game!';
                } else if (currentPlayer === 2) {
                    currentPlayer = 1;
                    modalPlayerNumber.textContent = 'Player ' + currentPlayer + ' has won the game!';
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
}

function colorGrid() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++) {
            if (grid[row][col] === 0) {
                document.getElementById("cell" + row + col).className = "slot";
            } else if (grid[row][col] === 1) {
                document.getElementById("cell" + row + col).className = "slot red";
            } else if (grid[row][col] === 2) {
                document.getElementById("cell" + row + col).className = "slot yellow";
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
}

function modalReset() {
    for (var row = 5; row >= 0; row--) {
        for (var col = 0; col <= 6; col++) {
            grid[row][col] = 0;
        }
    }
    currentPlayer = 1;
    modal.classList.add("hidden");
    h2.textContent = "Player 1's Turn";
    colorGrid();
}
