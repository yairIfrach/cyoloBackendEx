
const wordToObjCounter = (words) => {
    let wordStats = {}
    const wordsList = words.split(',');
    for (const word of wordsList) {
        wordStats[word] = (wordStats[word] || 0) + 1;
    }
    return wordStats
}

const getMedianFrequency = (sortedWords) => {
    const middle = Math.floor(sortedWords.length / 2);
    if (sortedWords.length % 2 === 0) {
        return (sortedWords[middle - 1][1] + sortedWords[middle][1]) / 2;
    } else {
        return sortedWords[middle];
    }
}

module.exports = {
    wordToObjCounter,
    getMedianFrequency
};