const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(__dirname + '/public'));

const port = process.env.PORT || 3001;
app.listen(port, () =>
    console.log(`Servidor corriendo en puerto ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/register.html'))
})