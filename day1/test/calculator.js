var should = require('../chai/chai').should();
var Calculator = require('../calculator').Calculator;

/**
 * Calculator class Unit Test
 */

var calculator = new Calculator();

/**
 * Test of method {@link Calculator#splitStringToIntArray}
 */
var splitStringToIntArrayInput = [
    {
        input: "1212",
        expected: [1, 2, 1, 2]
    },
    {
        input: "1221",
        expected: [1, 2, 2, 1]
    },
    {
        input: "123425",
        expected: [1, 2, 3, 4, 2, 5]
    },
    {
        input: "123123",
        expected: [1, 2, 3, 1, 2, 3]
    },
    {
        input: "12131415",
        expected: [1, 2, 1, 3, 1, 4, 1, 5]
    },
    {
        input: "1076",
        expected: [1, 0, 7, 6]
    }
];

splitStringToIntArrayInput.forEach(function (item, index, array) {
    var expected = item.expected;

    var actual = calculator.splitStringToIntArray(item.input);

    actual.should.eql(expected);
});

/**
 * Test of method {@link Calculator#roundArray}
 */
var roundArrayInput = [
    {
        input: [1, 2, 1, 2],
        expected: [1, 2, 1, 2, 1, 2]
    },
    {
        input: [1, 2, 2, 1],
        expected: [1, 2, 2, 1, 1, 2]
    },
    {
        input: [1, 2, 3, 4, 2, 5],
        expected: [1, 2, 3, 4, 2, 5, 1, 2, 3]
    },
    {
        input: [1, 2, 3, 1, 2, 3],
        expected: [1, 2, 3, 1, 2, 3, 1, 2, 3]
    },
    {
        input: [1, 2, 1, 3, 1, 4, 1, 5],
        expected: [1, 2, 1, 3, 1, 4, 1, 5, 1, 2, 1, 3]
    },
    {
        input: [1, 0, 7, 6],
        expected: [1, 0, 7, 6, 1, 0]
    }
];

roundArrayInput.forEach(function (item, index, array) {
    var expected = item.expected;

    var actual = calculator.roundArray(item.input, item.input.length / 2);

    actual.should.eql(expected);
});

/**
 * Test of method {@link Calculator#calculate}
 */
var calculateInput = [
    // Part 1 (step always 1)
    {
        input: "1122",
        step: 1,
        expected: 3
    },
    {
        input: "1111",
        step: 1,
        expected: 4
    },
    {
        input: "1234",
        step: 1,
        expected: 0
    },
    {
        input: "91212129",
        step: 1,
        expected: 9
    },
    // Part 2 (step is halfway of input length)
    {
        input: "1212",
        step: 2,
        expected: 6
    },
    {
        input: "1221",
        step: 2,
        expected: 0
    },
    {
        input: "123425",
        step: 3,
        expected: 4
    },
    {
        input: "123123",
        step: 3,
        expected: 12
    },
    {
        input: "12131415",
        step: 4,
        expected: 4
    }
]

calculateInput.forEach(function (item, index, array) {
    var expected = item.expected;

    var actual = calculator.calculate(item.input, item.step);

    actual.should.eql(expected);
});
