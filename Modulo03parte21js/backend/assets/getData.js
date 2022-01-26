const fs = require('fs')

const data = fs.readFileSync('./assets/data.json',{encoding:'utf8', flag:'r'});

module.exports = JSON.parse(data);