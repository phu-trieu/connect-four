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
// var column = document.querySelector('.column')

//Event Listeners
container.addEventListener("click", selectColumn);

function selectColumn(e) {
    var column = e.target.parentElement;
    console.log("target", column);
    drop()
    console.log(grid)
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
