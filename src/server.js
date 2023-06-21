const express = require('express');
const bodyParser = require('body-parser')
const { insertWords, reportBuilder } = require('./bl/logic.js');
const { responseMsgEnum } = require('./tools/responseMsgEnum.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.post('/addWords', async (req, res) => {
    const words = req.body.words;
    if (words) {
        try {
            await insertWords(words)
            res.send(responseMsgEnum.SUCCESS);
        } catch (error) {
            res.send(responseMsgEnum.FAILD_ADD_WORDS);
        }
    } else {
        res.send(responseMsgEnum.DATA_WRONG);
    }
});

app.get('/wordReport', async (req, res) => {
    try {
        const report = await reportBuilder()
        res.json(report);
    } catch (error) {
        res.send(error);
    }
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:', PORT);
});
