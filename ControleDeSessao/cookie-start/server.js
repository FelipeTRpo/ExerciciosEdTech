const express = require('express');
const {randomBytes} = require('crypto');
const cookieParser = require('cookie-parser')
const app = express();
const port = 8080;
const users = [{"name": "admin","password": "admin123","token":"tokenteste"}]
// app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser())
app.use('/', express.static('src/'));


app.post('/login',(req, res)=>{
    const theToken = randomBytes(32).toString('hex');
    const newPost = {"name": req.body[0].name,"password": req.body[0].password,"token":theToken};
    users.push(newPost);
    res.send(theToken);
})
app.get('/access',(req,res)=>{
    console.log(users);
    console.log(typeof(req.cookies.token));
    console.log()
    const token = req.cookies.token;
    let theRes = "Deu Errado";
    users.forEach(elem =>{
        if(elem.token == token){
            theRes = elem.name;
        }
    })
    res.send(theRes);
})

app.listen(port, () => {
    console.log(`Running on port : ${port} http://localhost:${port}`);
});
