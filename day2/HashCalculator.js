function calculateHash(matrix, rowCalculateFunc) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var items = matrix[i];
        var descendSortedItems = items.sort(function (a, b) {
            return b - a;
        });
        sum += rowCalculateFunc(descendSortedItems);
    }
    return sum;
}

function findModNumbersDivision(items) {
    for (var i = 0; i < items.length - 1; i++) {
        for (var j = i + 1; j < items.length; j++) {
            if (items[i] % items[j] == 0) {
                return items[i] / items[j];
            }
        }
    }
}

function findBiggerLowerDiff(items) {
    return items[0] - items[items.length - 1];
}

var inputPart1 = [
    [5, 1, 9, 5],
    [7, 5, 3],
    [2, 4, 6, 8]
];

var inputPart2 = [
    [5, 9, 2, 8],
    [9, 4, 7, 3],
    [3, 8, 6, 5]
];

var resultPart1 = calculateHash(inputPart1, findBiggerLowerDiff);

console.log(resultPart1);

var resultPart2 = calculateHash(inputPart2, findModNumbersDivision);

console.log(resultPart);
