let theTimeout = 0;

function search(){
    const inputType = document.getElementById('inputType').value;
    const inputContent = document.getElementById('textInput').value;
    const combinado = []
    document.getElementById('resposta').innerHTML = " ";
    fetch(`/users?inputType=${inputType}&textInput=${inputContent}`)
    .then(resposta => resposta.json())
    .then(anwser => {
        
        //console.log(anwser)
        anwser.forEach(element => {
            if(inputType == "id"){
                if(element.id == inputContent && inputContent){
                    combinado.push(element);
		            showAll(element);
                }
            }
            if(inputType == "name" ) { 
                if(element.name.toLowerCase().includes(inputContent.toLowerCase())  && inputContent){
                    combinado.push(element);
		            showAll(element);
                }
            }  
            if(inputType == "email" ) { 
                if(element.email.toLowerCase().includes(inputContent.toLowerCase()) && inputContent){
                    combinado.push(element);
		            showAll(element);
                }
            }
        });
    });
    console.log(combinado)
    function showAll(obj2) {
       let coluna = document.createElement('tr')
        //coluna.classList.add('className');
        let span1 = document.createElement('td')
        let span2 = document.createElement('td')
        let span3 = document.createElement('td')
        span1.innerHTML = obj2.id + " ";
        span2.innerHTML = obj2.name+ " ";
        span3.innerHTML =  obj2.email + " ";
        coluna.appendChild(span1);
        coluna.appendChild(span2);
       coluna.appendChild(span3);
        document.getElementById('resposta').appendChild(coluna);
    }
}

function register(){
    const inputName = document.getElementById("enterName").value;
    const inputEmail = document.getElementById("enterEmail").value;

    document.getElementById("enterName").value = ""
    document.getElementById("enterEmail").value = ""

    fetch('/register',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"name":inputName, "email":inputEmail}])
    })

}

function doDelete(){
    const inputName = document.getElementById("enterName").value;
    const inputEmail = document.getElementById("enterEmail").value;

    document.getElementById("enterName").value = ""
    document.getElementById("enterEmail").value = ""

    fetch('/delete',{
        method:'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"name":inputName,"email":inputEmail}])
    })
}

function searchDelay(){
    const inputContent = document.getElementById('textInput').value;
    if (inputContent.length>=3){
        clearTimeout(theTimeout);
        theTimeout = setTimeout( search ,2000);
    }
}