const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3977;


app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/welcome', (req, res) => {
    const { username } = req.body;
    res.status(200).send({ message: `Welcome ${username}` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})