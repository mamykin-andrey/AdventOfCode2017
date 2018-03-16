/**
 * Advent Of Code Day 1
 */

function Calculator() { }

Calculator.prototype.calculate = function (input, step) {
    var inputItems = this.splitStringToIntArray(input);
    var roundItems = this.roundArray(inputItems, step);

    var resultSum = 0;

    for (var i = 0; i < inputItems.length; i++) {
        var curNumber = inputItems[i];
        var numberAtStep = roundItems[i + step];

        if (curNumber == numberAtStep) {
            resultSum += curNumber;
        }
    }

    return resultSum;
}

Calculator.prototype.splitStringToIntArray = function (input) {
    return input.split("").map(function (item) {
        return parseInt(item);
    });
}

Calculator.prototype.roundArray = function (array, count) {
    var newArray = array.slice(0, array.length);
    for (var i = 0; i < count; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

exports.Calculator = Calculator;
