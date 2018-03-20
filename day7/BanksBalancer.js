function spreadBanks(banks) {
    var cycles = 0;
    var prevBanks = new Array();

    while (!prevBanks.containsArray(banks)) {
        cycles++;
        prevBanks.push(banks.slice());

        var maxBanksPos = banks.indexOf(Math.max(...banks));
        var maxBlocksSize = banks[maxBanksPos];
        var newBlockSize = calculateNewBlockSize(maxBlocksSize, banks.length);
        var blocksToSpread = calculateBlocksToSpread(newBlockSize, maxBlocksSize, banks.length);

        newBlockSize = newBlockSize == 0 ? 1 : newBlockSize;

        makeSpreadRound(banks, maxBanksPos, blocksToSpread, newBlockSize);
    }

    return { cycles: cycles, banks: banks };
}

function calculateBlocksToSpread(newBlockSize, maxBlocksSize, banksCount) {
    var blocksToSpread = newBlockSize * (banksCount - 1);
    return blocksToSpread != 0 ? blocksToSpread : maxBlocksSize;
}

function calculateNewBlockSize(maxBlocksSize, banksCount) {
    return Math.floor(maxBlocksSize / (banksCount - 1));
}

function makeSpreadRound(banks, maxBanksPos, blocksToSpread, newBlockSize) {
    banks[maxBanksPos] -= blocksToSpread;

    var i = maxBanksPos + 1;
    while (blocksToSpread > 0 && i < banks.length) {
        banks[i] += newBlockSize;
        blocksToSpread -= newBlockSize;
        i++;
    }
    i = 0;
    while (blocksToSpread > 0) {
        banks[i] += newBlockSize;
        blocksToSpread -= newBlockSize;
        i++;
    }
}

Array.prototype.containsArray = function (array) {
    for (var i = 0; i < this.length; i++) {
        if (this[i].equals(array)) {
            return true;
        }
    }
    return false;
}

Array.prototype.equals = function (another) {
    if (this === another)
        return true;
    if (this == null || another == null || this.length != another.length)
        return false;

    for (var i = 0; i < this.length; ++i) {
        if (this[i] !== another[i])
            return false;
    }
    return true;
};

var input = [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3];

var partOneResult = spreadBanks(input);
var partOneCycles = partOneResult.cycles;
console.log(partOneCycles);

var partTwoResult = spreadBanks(partOneResult.banks);
var partTwoCycles = partTwoResult.cycles;
console.log(partTwoCycles);
