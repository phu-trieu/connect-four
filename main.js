var row0 = [0, 0, 0, 0, 0, 0, 0];
var row1 = [0, 0, 0, 0, 0, 0, 0];
var row2 = [0, 0, 0, 0, 0, 0, 0];
var row3 = [0, 0, 0, 0, 0, 0, 0];
var row4 = [0, 0, 0, 0, 0, 0, 0];
var row5 = [0, 0, 0, 0, 0, 0, 0];
var multiArray = [row0, row1, row2, row3, row4, row5];

//DOM Elements
var body = document.querySelector("body");
var container = document.getElementById("container");


//Event Listeners
container.addEventListener("click", function(e) {
    console.log(e.target);
});

function drop() {
    for (var i = 5; i >= 0; i--) {
        if (multiArray[i][0] === 0) {
            multiArray[i][0] = currentPlayer;
            break;
        }
    }
}
