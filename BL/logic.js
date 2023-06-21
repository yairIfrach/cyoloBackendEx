const { saveWordsToDb, getAllWordsFromDB } = require('../DAL/accessData');
const { wordToObjCounter, getTopRecurring, getMinFrequency, getMedianFrequency } = require('../TOOLS/dataParser');

const insertWords = (words) => {
    return saveWordsToDb(wordToObjCounter(words))
}

const reportBuilder = () => {
    const wordFromDB = getAllWordsFromDB()
    if (wordFromDB) {
        const report = {
            top5: getTopRecurring(wordFromDB, 5),
            leaset: getMinFrequency(wordFromDB),
            median: getMedianFrequency(wordFromDB),
        };
        return report
    } else {
        return 400
    }
}


module.exports = {
    insertWords,
    reportBuilder,
};