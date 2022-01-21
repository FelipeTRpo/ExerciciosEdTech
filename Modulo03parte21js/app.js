const express = require('express');
const data = require('./assets/getData')
const app = express();
const port = 8080;
require('./assets/getRoutes.js')(app);
app.get ('/', (req, res) => {
    res.json(data);
})

app.listen(port, () => console.log(`Running on port : ${port}`));