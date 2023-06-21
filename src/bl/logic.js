const { sortBy } = require('lodash');
const { saveWordsToDb, getAllWordsFromDB } = require('../dal/accessData');
const { wordToObjCounter, getMedianFrequency } = require('../tools/helper');
const { responseMsgEnum } = require('../tools/responseMsgEnum');

const TOP_NUM_RECURRING = 5

const insertWords = async (words) => {
    return await saveWordsToDb(wordToObjCounter(words))
}

const reportBuilder = async () => {
    try {
        const wordFromDB = await getAllWordsFromDB()
        if (Object.keys(wordFromDB).length !== 0) {
            const allStatistics = getAllStatistics(wordFromDB)
            const wordsReports = {
                top5: allStatistics.topXRecurring,
                leaset: allStatistics.minFrequency,
                median: allStatistics.medianFrequency,
            };
            return wordsReports
        } else {
            return responseMsgEnum.DB_EMPTY
        }
    } catch (error) {
        throw responseMsgEnum.DB_ERROR
    }
}


const getAllStatistics = (objWords) => {
    const sortedWords = sortBy(Object.entries(objWords), (entry) => -entry[1]);
    const topXRecurring = Object.fromEntries(sortedWords.slice(0, TOP_NUM_RECURRING));
    const minFrequency = sortedWords[sortedWords.length - 1][1]
    const medianFrequency = getMedianFrequency(sortedWords)
    
    return {
        topXRecurring,
        minFrequency,
        medianFrequency
    }
}

module.exports = {
    insertWords,
    reportBuilder,
};