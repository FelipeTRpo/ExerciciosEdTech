function search(){
    document.getElementById('resposta').innerHTML = " ";
    let theId = 0;
    if(document.getElementById('textId').value){
        theId = document.getElementById('textId').value;
    }else{
        theId = document.getElementById('enterId').value;
    }
    fetch(`/produto/${theId}`)
    .then(resposta => resposta.json())
    .then(anwser => {
        
        anwser.forEach(element => {
            showAll(element)
        });
    });
    function showAll(obj) {
       let coluna = document.createElement('tr')
        let span1 = document.createElement('td')
        let span2 = document.createElement('td')
        span1.innerHTML = obj.id;
        span2.innerHTML = obj.name;
        coluna.appendChild(span1);
        coluna.appendChild(span2);
        document.getElementById('resposta').appendChild(coluna);
    }
}
function refresh(){
    document.getElementById('resposta').innerHTML = " ";
    fetch(`/produto/all`)
    .then(resposta => resposta.json())
    .then(anwser => {
        
        anwser.forEach(element => {
            showAll(element)
        });
    });
    function showAll(obj) {
        let coluna = document.createElement('tr')
        let span1 = document.createElement('td')
        let span2 = document.createElement('td')
        span1.innerHTML = obj.id;
        span2.innerHTML = obj.name;
        coluna.appendChild(span1);
        coluna.appendChild(span2);
        document.getElementById('resposta').appendChild(coluna);
    }
}

function register(){
    const inputName = document.getElementById("enterName").value;
    const inputId = document.getElementById("enterId").value;

    fetch('/produto',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"name":inputName, "id":inputId}])
    }).then(refresh());

}

function doDelete(){
    const inputName = document.getElementById("enterName").value;
    const inputId = document.getElementById("enterId").value;

    fetch('/produto/:id',{
        method:'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"name":inputName,"id":inputId}])
    }).then(refresh());
}

function update(){
    const inputName = document.getElementById("enterName").value;
    const inputId = document.getElementById("enterId").value;

    fetch('/produto/:id',{
        method:'PUT',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"name":inputName,"id":inputId}])
    }).then(refresh());
}