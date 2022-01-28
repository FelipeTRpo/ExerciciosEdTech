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
};

module.exports = function(app) { app.post('/register',(req, res)=>{
    const newID = users[users.length-1].id +1;
    console.log(req.body)
    const newPost = {"id":newID, "name": req.body[0].name,"email": req.body[0].email,"phone":req.body[0].phone,"sector":req.body[0].sector,"birth":req.body[0].birth};
    let memoryData = data;
    memoryData.push(newPost);
    
    res.send("end");
  })
};

  module.exports = function(app) { app.delete('/delete', (req,res)=>{
    
    const idResult = users.filter((element)=> element.email == req.body[0].email && element.name == req.body[0].name);
    const id = users.indexOf(idResult[0]);
    users.splice(id,1);
    res.send("end");
  })
};