$("#btn").on('click',login);
$("#btn-acessar").on('click',accessPage);
function login(){
    const inputName = document.getElementById("name").value;
    const inputPassword = document.getElementById("password").value;
    fetch('/login',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"name":inputName, "password":inputPassword}])
    }).then(resposta => resposta.text())
    .then(anwser => {
        console.log(anwser);
        $("#campo-hidden").val(anwser);
        $("#campo-login").css('visibility', 'hidden');
        $("#usuario-logado").css('visibility', 'visible');
    });

}

function accessPage(){
    const theToken = $("#campo-hidden").val();
    fetch(`/access?token=${theToken}`).then(res1=> res1.text()).then(res2=>{
        $("#site").html(`Bem vindo ${res2}!`);
        });
        $("#usuario-logado").css('visibility', 'hidden');
        $("#site").css('visibility', 'visible');
}