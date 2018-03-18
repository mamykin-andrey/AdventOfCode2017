function calculateValidPassphrasesCount(phrases, checkPassphraseFunc) {
    var sum = 0;
    var count = Object.keys(phrases).length;
    for (var i = 0; i < count; i++) {
        sum += checkPassphraseFunc(phrases[i]) ? 1 : 0;
    }
    return sum;
}

function doesNotContainsEqualWords(passphrase) {
    var wordsArr = passphrase.split(" ");
    var wordsSet = new Set(wordsArr);
    return wordsArr.length == wordsSet.size;
}

function doesNotContainsAnagrams(passphrase) {
    var wordsArr = passphrase.split(" ");

    for (var i = 0; i < wordsArr.length; i++) {
        wordsArr[i] = wordsArr[i].split("").sort().join("");
    }
    var wordsSet = new Set(wordsArr);

    return wordsArr.length == wordsSet.size;
}

var input1 = [
    "pphsv ojtou brvhsj cer ntfhlra udeh ccgtyzc zoyzmh jum lugbnk",
    "vxjnf fzqitnj uyfck blnl impo kxoow nngd worcm bdesehw",
    "caibh nfuk kfnu llfdbz uxjty yxjut jcea",
    "qiho qif eupwww avyglnj nxzotsu hio lws",
    "qiho qif eupwww avyglnj nxzotsu qiho lwsa",
    "xjty usocjsh pivk qnknunc yjcgh bwya djw zpyr",
    "bqs bqs dbutvgf mmzb izpyud rap izpyud xlzeb mnj hjncs",
    "rdowgbt vpwfdoi blzl laghnk gsa vhnpo cztxzlb rtz hvwonhb eciju pfjtbo"
];

var input2 = [
    "abcde fghij",
    "abcde xyz ecdab",
    "a ab abc abd abf abj",
    "iiii oiii ooii oooi oooo",
    "oiii ioii iioi iiio"
];

var result1 = calculateValidPassphrasesCount(input1, doesNotContainsEqualWords);

var result2 = calculateValidPassphrasesCount(input2, doesNotContainsAnagrams);
