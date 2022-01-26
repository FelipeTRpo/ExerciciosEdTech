const data = require('./getData');
const express = require('express');
const app = express();
module.exports = function(app) { app.get('/birth', function (req,res){
    const month = req.query.month;
    const matchBirthday = data.filter(element=> {
        return element["birth"].split('/')[1] === month;
    });
    res.json(matchBirthday);
})
}

module.exports = function(app) { app.get('/sector', function (req,res){
    const theSector = req.query.sector;
    const matchSector = data.filter(element=> {
        return element["sector"].includes(theSector);
    });
    res.json(matchSector);
})
}
module.exports = function(app) { app.get('/ramal', function (req,res){
    const theRamal = req.query.ramal;
    let alphaNames = data.filter(element=> {
        return element['name'];
    });
    alphaNames.sort();
    res.json(alphaNames);
})
}