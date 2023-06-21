const express = require('express');
const bodyParser = require('body-parser');
const { insertWords, reportBuilder } = require('./BL/logic.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addWords', (req, res) => {
    const words = req.body.words;
    if (words) {
        if (insertWords(words) === 200) {
            res.send('Words added successfully!');
        } else {
            res.send('Failed to save words.');
        }
    } else {
        res.send('No words provided.');
    }
});

app.get('/wordReport', (req, res) => {
    const report = reportBuilder()
    if (report !== 400 ) {
        res.json(report);
    } else {
        res.send('No words added yet.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
