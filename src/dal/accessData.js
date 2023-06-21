let DBWords = {}
// Here there should be access to some database (sql / nosql) and input of the values.
// Since there is no use for such I used local memory.
// Seemingly there is double use of the same code here but if there was access to a database this would not happen.
const saveWordsToDb = async (wordStats) => {
    DBWords = Object.entries(wordStats).reduce((result, [key, value]) => {
        result[key] = (result[key] || 0) + value;
        return result;
    }, { ...DBWords }); 
}

//In all app it not necessary to use async / await.
//But it simulates "DB" that accessed asynchronous
const getAllWordsFromDB = async () => {
    return DBWords
}

module.exports = {
    saveWordsToDb,
    getAllWordsFromDB
};