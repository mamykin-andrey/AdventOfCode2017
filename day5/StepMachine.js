var fs = require('fs');
var os = require('os');

function proceed(input, calculateShiftFunc) {
    var steps = input.split(os.EOL).map(function (value) {
        return parseInt(value);
    });

    var stepsCount = 0;

    for (var i = 0; i < steps.length;) {
        var curStep = steps[i];
        steps[i] += calculateShiftFunc(curStep);
        i += curStep;
        stepsCount++;
    }
    return stepsCount;
}

function calculateShiftPart1(step) {
    return 1;
}

function calculateShiftPart2(step) {
    return step >= 3 ? -1 : 1;
}

fs.readFile('input.txt', 'utf-8', function (error, content) {
    if (!error) {
        var steps = proceed(content, calculateShiftPart2);
        console.log(steps);
    } else {
        console.log(error);
    }
});
