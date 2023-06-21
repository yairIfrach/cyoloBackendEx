const { min, sortBy } = require('lodash');

const wordToObjCounter = (words) => {
    let wordStats = {}
    const wordsList = words.split(',');
    for (const word of wordsList) {
        wordStats[word] = (wordStats[word] || 0) + 1;
    }
    return wordStats
}

const getTopRecurring = (objWords, topNum) => {
    const sortedWords = sortBy(Object.entries(objWords), (entry) => -entry[1]);
    return sortedWords.slice(0, topNum);
}

const getMinFrequency = (objWords) => {
    return min(Object.values(objWords));
}

const getMedianFrequency = (objWords) => {
    const sortedArr = Object.values(objWords).sort();
    const middle = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
        return sortedArr[middle];
    }
}

module.exports = {
    wordToObjCounter,
    getTopRecurring,
    getMinFrequency,
    getMedianFrequency
};