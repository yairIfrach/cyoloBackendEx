let DBWords = {}
// Here there should be access to some database (sql / nosql) and input of the values.
// Since there is no use for such I used local memory.
// Seemingly there is double use of the same code here but if there was access to a database this would not happen.
const saveWordsToDb = (wordStats) => {

    DBWords = Object.entries(wordStats).reduce((result, [key, value]) => {
        result[key] = (result[key] || 0) + value;
        return result;
    }, { ...DBWords });

    return 200
}

const getAllWordsFromDB = () => {
    return DBWords
}

module.exports = {
    saveWordsToDb,
    getAllWordsFromDB
};