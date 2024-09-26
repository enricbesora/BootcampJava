let tickets = [1, 100000, 21, 30, 4];

function sortMethod() {
    tickets = [1, 100000, 21, 30, 4];
    tickets.sort((function(a, b){return a - b}));
    console.log(tickets);
}

function bblSort() {
    arr = [1, 100000, 21, 30, 4];
    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);
}

sortMethod();

bblSort();




