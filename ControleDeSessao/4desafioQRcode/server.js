const express = require('express');
const {randomBytes} = require('crypto');
const cookieParser = require('cookie-parser')
const qrCode = require('qrcode-generator')
const app = express();
const port = 8080;
const users = 
[{"fullname":"admin","name": "admin","password": "admin","token":"tokenadmin","confirmedParty":[]},
{"fullname":"Felipe Tessarollo Ramos","name": "user","password": "123","token":"tokenteste","confirmedParty":[{"partyName":"Festa1","partyToken":"tokenfesta1","enterStatus":false},{"partyName":"Festa2","partyToken":"tokenfesta2","enterStatus":false}]}];
const partyList = [
    {"name": "Festa1","date":"2022-04-04","time":"23:27","description":"Festa foda"},
    {"name": "Festa2","date":"2022-08-04","time":"22:00","description":"Alo galera de piao"}
]
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

app.use('/', express.static('src/'));

//registro de usuario
app.post('/userregister',(req, res)=>{
    let admintoken;
    users.forEach(element => {
        if(element.name == "admin"){
            admintoken = element.token;
        }
    });
    if(req.cookies.token === admintoken ){
        const newPost = {"fullname":req.body[0].fullname,"name": req.body[0].name,"password": req.body[0].password,"token":"","confirmedParty":[]};
        users.push(newPost);
        res.send("Usuario registrado com sucesso");
    }else{
        res.send("Cadastro nao permitido");
    }
});
//registro de festa
app.post('/partyregister',(req, res)=>{
    let admintoken;
    users.forEach(element => {
        if(element.name == "admin"){
            admintoken = element.token;
        }
    });
    if(req.cookies.token === admintoken ){
        const newPost = {"name": req.body[0].name,"date":req.body[0].date,"time":req.body[0].time,"description":req.body[0].description};
        partyList.push(newPost);
        console.log(req.body[0])
        res.send("Usuario registrado com sucesso");
        console.log(partyList);
        console.log(users);
    }else{
        res.send("Cadastro nao permitido");
    }
});

//login de usuario
app.post('/login',(req,res)=>{
    const user = req.body[0].name;
    const password = req.body[0].password;
    let loginConfirmation = false;
    users.forEach(element => {
        if(element.name === user){
            if(element.password === password){
                const theToken = randomBytes(32).toString('hex');
                element.token = theToken;
                const theRes = {token: theToken , user:element.name}
                res.send(JSON.stringify(theRes));
                loginConfirmation = true;
            }else{
                loginConfirmation = true;
                res.send(JSON.stringify({user:"wrongPassword"}));
            }
        }
    });
    if(loginConfirmation == false){
        res.send(JSON.stringify({user:"wrongUser"}));
    }
});

app.get('/verfestas',(req,res)=>{
    res.send(JSON.stringify(partyList));

});

app.post('/entertheparty',(req,res)=>{
    let entered = false;
    users.forEach(ele=>{
        if(ele.token == req.cookies.token){

            const theToken = randomBytes(32).toString('hex');
            ele.confirmedParty.push({"partyName":req.body[0].partyName,"partyToken":theToken,"enterStatus":false});
            console.log(ele.confirmedParty)
            entered = true;
            res.send("Entrou");
        }
    });
    if (entered == false){
        res.send("Usuario nao logado");
    }
});

app.get('/minhasfestas',(req,res)=>{
    let entered = false;
    users.forEach(ele=>{
        if(ele.token == req.cookies.token){
            entered = true;
            res.send(JSON.stringify(ele.confirmedParty))
        }
    });
    if(entered = false){
        res.send(JSON.stringify([{"partyName":"Sem Festas"}]))
    }


});

app.post('/qrcodegenerator',(req,res)=>{
    const token = req.body[0].token
    const qr = qrCode(10, 'L');
    qr.addData('http://localhost:8080/confirm?token='+token);
    qr.make();
    res.send(qr.createImgTag())
});

app.get('/confirm',(req,res)=>{
    const confirmToken = req.query.token
    let tokenFound = false;
    users.forEach(ele1=>{
        ele1.confirmedParty.forEach(ele2=>{
            if(ele2.partyToken == confirmToken ){
                if(ele2.enterStatus == false){
                    console.log(ele2)
                    ele2.enterStatus = true;
                    tokenFound = true;
                    res.send(JSON.stringify({"fullname":ele1.fullname,"user":ele1.name,"partyname":ele2.partyName,"canEnter":"Entrada Autorizada"}))
                }else{
                    tokenFound = true;
                    res.send("Qrcode já utilizado");
                }
            }
        })
    });
    if(tokenFound == false){
        res.send("QrCode Invalido")
    }

});

app.listen(port, () => {
    console.log(`Running on port : ${port} http://localhost:${port}`);
});