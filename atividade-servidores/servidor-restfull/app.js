const express = require('express');
const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

let produto = []
      
app.post('/produto',(req, res)=>{
  const newPost = {"id":req.body[0].id, "name": req.body[0].name};
  produto.push(newPost);
  res.send("end");
})

app.get('/produto/all',(req, res)=>{
  res.json(produto);
})

app.get('/produto/:id', (req,res) => {
  const inputId = req.params.id
  let combinado = []
// sorteio
  produto.forEach(element => {
    if(element.id == inputId){
      combinado.push(element);
    }
});
	res.json(combinado);
});

app.delete('/produto/:id', (req,res)=>{

  const idResult = produto.filter((element)=> element.id == req.body[0].id);
  const id = produto.indexOf(idResult[0]);
  produto.splice(id,1);
  res.send(true);

})

app.put('/produto/:id', (req,res)=>{

    produto.forEach(elem=>{
      if(elem.id = req.body[0].id){
        elem.name = req.body[0].name;
      }
    })
  });

app.use(express.static('src'))

app.listen(port, () => {
    console.log(`Running on port : ${port} http://localhost:${port}`);
});
