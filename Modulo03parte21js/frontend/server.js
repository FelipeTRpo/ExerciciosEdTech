const express = require('express');
const app = express();
const port = 3000;

app.use('/games', express.static('src/gamesmagazine'));
app.use('/calculadora', express.static('src/calculadora'));
app.use('/funcionarios', express.static('src/funcionarios'));

app.listen(port, () => console.log(`Running on port : ${port} http://localhost:${port}`));