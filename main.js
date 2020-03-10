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

function dropChip(e) {
    var column = e.target.parentElement;
    if(column.className !== 'column') {
        return;
    }
    if(column.children[0].className !== 'slot') {
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
    } else {
        for (var row2 = 5; row2 >= 0; row2--) {
            if (grid[row2][col] === 0) {
                grid[row2][col] = 2;
                break;
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
