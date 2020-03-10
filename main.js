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
var body = document.querySelector("body");
var container = document.getElementById("container");

//Event Listeners
container.addEventListener("click", dropChip);

var col0Counter = 0;
function dropChip(e) {
    var column = e.target.parentElement;
    console.log(column)
    var col = column.id;
    if (currentPlayer === 1) {
        for (var row = 5; row >= 0; row--) {
            if (grid[row][col] === 0) {
                grid[row][col] = 1;
                col0Counter++;
                break;
            } else if(col0Counter === 6) {
                return;
            }
        }
        currentPlayer = 2;
    } else {
        for (var row2 = 5; row2 >= 0; row2--) {
            if (grid[row2][col] === 0) {
                grid[row2][col] = 2;
                col0Counter++;
                break;
            } else if(col0Counter === 6) {
                return;
            }
        }
        currentPlayer = 1;
    }
    colorGrid();
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

// function drop() {
//     for (var row = 5; row >= 0; row--) {
//         for (var col = 0; col <= 6; col++) {
//             if (((grid[row][col] === grid[row][col + 1]) === grid[row][col + 2]) === grid[row][col + 3]) {
//                 console.log("hello")
//             }
//         }
//     }
// }
//
