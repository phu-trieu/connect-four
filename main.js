var column = document.getElementsByTagName("td");
var row = document.getElementsByTagName("tr");

// console.log(column)

for (var j = 5; j >= 0; j--) {
    row[j].addEventListener("click", function(e) {
        console.log('row', e.currentTarget.rowIndex);
        var target = e.target;
        if (!target.classList.contains('white')) {
            return;
        } else {
            target.classList.remove('white');
            target.classList.add('red')
        }
    });
}

for (var i = 0; i < column.length; i++) {
    column[i].addEventListener("click", function(e) {

    });
}
