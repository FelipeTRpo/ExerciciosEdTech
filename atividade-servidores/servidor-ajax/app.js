const express = require('express');
const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const users = [{
        "id": 1,
        "name": "Felipe Marten",
        "email": "jmarten0@deviantart.com"
      }, {
        "id": 2,
        "name": "Felipe Burfoot",
        "email": "mburfoot1@sitemeter.com"
      }, {
        "id": 3,
        "name": "Felipe Gorner",
        "email": "agorner2@geocities.com"
      }, {
        "id": 4,
        "name": "Felipe Slym",
        "email": "cslym3@posterous.com"
      }, {
        "id": 5,
        "name": "Felipe Gerritsma",
        "email": "dgerritsma4@wordpress.com"
      }, {
        "id": 6,
        "name": "Evered Titta",
        "email": "etitta5@bravesites.com"
      }, {
        "id": 7,
        "name": "Marty Blackburne",
        "email": "mblackburne6@yahoo.com"
      }, {
        "id": 8,
        "name": "Muffin Lowndsborough",
        "email": "mlowndsborough7@blogtalkradio.com"
      }, {
        "id": 9,
        "name": "Pip Castanho",
        "email": "pcastanho8@house.gov"
      }, {
        "id": 10,
        "name": "Elroy Tipler",
        "email": "etipler9@wix.com"
      }, {
        "id": 11,
        "name": "Veronique Ondricek",
        "email": "vondriceka@europa.eu"
      }, {
        "id": 12,
        "name": "Shelley Leyninye",
        "email": "sleyninyeb@google.cn"
      }, {
        "id": 13,
        "name": "Robers Klesel",
        "email": "rkleselc@imgur.com"
      }, {
        "id": 14,
        "name": "Wake Hardey",
        "email": "whardeyd@issuu.com"
      }, {
        "id": 15,
        "name": "Nathaniel Kleint",
        "email": "nkleinte@va.gov"
      }, {
        "id": 16,
        "name": "Alfredo Mityashev",
        "email": "amityashevf@sbwire.com"
      }, {
        "id": 17,
        "name": "Emyle Baistow",
        "email": "ebaistowg@wordpress.com"
      }, {
        "id": 18,
        "name": "April Seid",
        "email": "aseidh@npr.org"
      }, {
        "id": 19,
        "name": "Georgianne Odd",
        "email": "goddi@rambler.ru"
      }, {
        "id": 20,
        "name": "Miller Siddons",
        "email": "msiddonsj@earthlink.net"
      }, {
        "id": 21,
        "name": "Aguistin Sturridge",
        "email": "asturridgek@dagondesign.com"
      }, {
        "id": 22,
        "name": "Aloisia Kencott",
        "email": "akencottl@gnu.org"
      }, {
        "id": 23,
        "name": "Trescha Jacox",
        "email": "tjacoxm@bloomberg.com"
      }, {
        "id": 24,
        "name": "Carl Scarrott",
        "email": "cscarrottn@google.fr"
      }, {
        "id": 25,
        "name": "Marketa Cream",
        "email": "mcreamo@census.gov"
      }, {
        "id": 26,
        "name": "Darline Colam",
        "email": "dcolamp@imdb.com"
      }, {
        "id": 27,
        "name": "Cassandre Dooman",
        "email": "cdoomanq@usatoday.com"
      }, {
        "id": 28,
        "name": "Konstanze Plowes",
        "email": "kplowesr@arstechnica.com"
      }, {
        "id": 29,
        "name": "Hernando Fowlestone",
        "email": "hfowlestones@google.es"
      }, {
        "id": 30,
        "name": "Kacy Daniels",
        "email": "kdanielst@bbc.co.uk"
      }, {
        "id": 31,
        "name": "Dreddy MacAvaddy",
        "email": "dmacavaddyu@google.co.uk"
      }, {
        "id": 32,
        "name": "Oralla Leamy",
        "email": "oleamyv@samsung.com"
      }, {
        "id": 33,
        "name": "Lothaire Pieters",
        "email": "lpietersw@yahoo.com"
      }, {
        "id": 34,
        "name": "Isadore Pretious",
        "email": "ipretiousx@cisco.com"
      }, {
        "id": 35,
        "name": "Lon Snoding",
        "email": "lsnodingy@forbes.com"
      }, {
        "id": 36,
        "name": "Camel Cockland",
        "email": "ccocklandz@bluehost.com"
      }, {
        "id": 37,
        "name": "Anabal Raysdale",
        "email": "araysdale10@w3.org"
      }, {
        "id": 38,
        "name": "Isabel Climie",
        "email": "iclimie11@kickstarter.com"
      }, {
        "id": 39,
        "name": "Mack Spittles",
        "email": "mspittles12@cisco.com"
      }, {
        "id": 40,
        "name": "Jenine Sawfoot",
        "email": "jsawfoot13@nyu.edu"
      }, {
        "id": 41,
        "name": "Melantha Krollman",
        "email": "mkrollman14@livejournal.com"
      }, {
        "id": 42,
        "name": "Agata Degoey",
        "email": "adegoey15@guardian.co.uk"
      }, {
        "id": 43,
        "name": "Genvieve Scourge",
        "email": "gscourge16@tinypic.com"
      }, {
        "id": 44,
        "name": "Dredi Younghusband",
        "email": "dyounghusband17@mozilla.com"
      }, {
        "id": 45,
        "name": "Bink Feaveer",
        "email": "bfeaveer18@google.ca"
      }, {
        "id": 46,
        "name": "Yasmeen Cordingly",
        "email": "ycordingly19@liveinternet.ru"
      }, {
        "id": 47,
        "name": "Lynn Gorick",
        "email": "lgorick1a@nsw.gov.au"
      }, {
        "id": 48,
        "name": "Iosep Katz",
        "email": "ikatz1b@ibm.com"
      }, {
        "id": 49,
        "name": "Paulo Bimrose",
        "email": "pbimrose1c@webnode.com"
      }, {
        "id": 50,
        "name": "Ysabel Minogue",
        "email": "yminogue1d@aboutads.info"
      }, {
        "id": 51,
        "name": "Clayton Exposito",
        "email": "cexposito1e@elpais.com"
      }, {
        "id": 52,
        "name": "Kalinda Hirsthouse",
        "email": "khirsthouse1f@yale.edu"
      }, {
        "id": 53,
        "name": "Kassia Dancy",
        "email": "kdancy1g@webmd.com"
      }, {
        "id": 54,
        "name": "Lise Manass",
        "email": "lmanass1h@apache.org"
      }, {
        "id": 55,
        "name": "Ella Dulinty",
        "email": "edulinty1i@gov.uk"
      }, {
        "id": 56,
        "name": "Dorita Whatley",
        "email": "dwhatley1j@elpais.com"
      }, {
        "id": 57,
        "name": "Toby Paridge",
        "email": "tparidge1k@qq.com"
      }, {
        "id": 58,
        "name": "Adrian Wadelin",
        "email": "awadelin1l@thetimes.co.uk"
      }, {
        "id": 59,
        "name": "Myles Riddick",
        "email": "mriddick1m@de.vu"
      }, {
        "id": 60,
        "name": "Tanya Conisbee",
        "email": "tconisbee1n@ucoz.com"
      }]
      

app.get('/users', (req,res) => {
  const inputType = req.query.inputType
  const textInput = req.query.textInput

  let combinado = []
// sorteio
  users.forEach(element => {
    if(inputType == "id"){
        if(element.id == textInput && textInput){
            combinado.push(element);
        }
    }
    if(inputType == "name" ) { 
        if(element.name.toLowerCase().includes(textInput.toLowerCase())  && textInput){
            combinado.push(element);
        }
    }  
    if(inputType == "email" ) { 
        if(element.email.toLowerCase().includes(textInput.toLowerCase()) && textInput){
            combinado.push(element);
        }
    }
});

	res.json(combinado);
});

app.post('/register',(req, res)=>{
  const newID = users[users.length-1].id +1;
  console.log(req.body)
  const newPost = {"id":newID, "name": req.body[0].name,"email": req.body[0].email};
  users.push(newPost);
  res.send("end");
})

app.delete('/delete', (req,res)=>{
  
  const idResult = users.filter((element)=> element.email == req.body[0].email && element.name == req.body[0].name);
  const id = users.indexOf(idResult[0]);
  users.splice(id,1);
  res.send("end");
})

app.use(express.static('src'))

app.listen(port, () => {
    console.log(`Running on port : ${port} http://localhost:${port}`);
});
