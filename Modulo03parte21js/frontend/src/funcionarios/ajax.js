let theTimeout = 0;
const serverLink = "http://localhost:8080"
function search(){
    const combinado = []
    document.getElementById('resposta').innerHTML = " ";
    fetch(`${serverLink}/users`)
    .then(resposta => resposta.json())
    .then(anwser => {
        
        //console.log(anwser)
        anwser.forEach(element => {
            showAll(element)
        });
    });
    function showAll(obj2) {
        let coluna = document.createElement('tr')
        //coluna.classList.add('className');
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        td1.innerHTML = obj2.id;
        td2.innerHTML = obj2.name;
        td3.innerHTML =  obj2.email ;
        td4.innerHTML = obj2.phone;
        td5.innerHTML = obj2.sector;
        td6.innerHTML =  obj2.birth ;
        coluna.appendChild(td1);
        coluna.appendChild(td2);
        coluna.appendChild(td3);
        coluna.appendChild(td4);
        coluna.appendChild(td5);
        coluna.appendChild(td6);
        document.getElementById('resposta').appendChild(coluna);
    }
}

function register(){
    const inputName = document.getElementById("enterName").value;
    const inputEmail = document.getElementById("enterEmail").value;
    const inputSector = document.getElementById("enterSector").value;
    const inputRamal = document.getElementById("enterRamal").value;
    const inputBirthDate = document.getElementById("enterBirthdate").value;

    fetch(`${serverLink}/register`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"name":inputName, "email":inputEmail,"phone":inputRamal,"sector":inputSector,"birth":inputBirthDate}])
    })

}

function doDelete(){
    const inputName = document.getElementById("enterName").value;
    const inputEmail = document.getElementById("enterEmail").value;
    const inputSector = document.getElementById("enterSector").value;
    const inputRamal = document.getElementById("enterRamal").value;
    const inputBirthDate = document.getElementById("enterBirthdate").value;

    fetch(`${serverLink}/delete`,{
        method:'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"name":inputName, "email":inputEmail,"phone":inputRamal,"sector":inputSector,"birth":inputBirthDate}])
    })

}
