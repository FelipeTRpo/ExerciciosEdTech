// button control
$('#btn-register').on('click',userRegister);
$('#btn-register-party').on('click',partyRegister)
// user register funciton
function userRegister(){
    const inputName = document.getElementById("name-register").value;
    const inputPassword = document.getElementById("password-register").value;
    const inputPasswordConfirm = document.getElementById("password-register-confirm").value;

    if(inputPassword===inputPasswordConfirm){
        fetch('/userregister',{
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify([{"name":inputName, "password":inputPassword}])
        }).then(resposta => resposta.text())
        .then(anwser => {
            console.log(anwser);
            $("#wrong-match").html("Usuario cadastrado");
        });
    }else{
        $("#wrong-match").html("Senhas nao combinam");
    }
}

function partyRegister(){
    const titleParty = document.getElementById("name-party").value;
    const dateParty = document.getElementById("date-party").value;
    const timeParty = document.getElementById("time-party").value;
    const descriptionParty = document.getElementById("description-party").value;
    const sendThis = {"name": titleParty,"date":dateParty,"time":timeParty,"description":descriptionParty}
    console.log(sendThis)
    fetch('/partyregister',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([sendThis])
    }).then(resposta => resposta.text())
    .then(anwser => {
        console.log(anwser);
        $("#wrong-match").html("Usuario cadastrado");
    });
}