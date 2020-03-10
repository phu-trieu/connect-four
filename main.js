var grid = [
  [1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [1, 1, 1, 1, 0, 0, 1]
];

var currentPlayer = 1;

//DOM Elements
var body = document.querySelector("body");
var container = document.getElementById("container");
// var column = document.querySelector('.column')

//Event Listeners
container.addEventListener("click", selectColumn);

function selectColumn(e) {
  var column = e.target.parentElement;
  console.log("target", column);
  drop();
  console.log(grid);
}

function drop() {
  for (var row = 5; row >= 0; row--) {
    for (var col = 0; col <= 6; col++) {
      if (grid[row][col] !== 0) {
        if (currentPlayer === 1) {
          grid[row - 1][col] = 1;
          return (currentPlayer = 2);
        }
      } else {
        grid[row][col] = 1;
        break;
      }
    }
  }
}

// function drop() {
//     for (var row = 5; row >= 0; row--) {
//         grid[row];
//         for (var col = 0; col <= 6; col++) {
//             grid[row][col];
//         if (grid[row][col] === grid[row][col+1] === grid[row][col+2] === grid[row][col+3]){
//             console.log(grid);
// }
//         }
//     }
// }

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
        console.log("horz win");
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
        console.log("vert win");
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
        console.log("plus win");
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
        console.log("minus win");
      }
    }
  }
}
