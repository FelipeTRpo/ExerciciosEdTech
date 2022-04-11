//button control
$('#minhas-festas').on('click',myParties)
$('#festas-disponiveis').on('click',showParties)
$('.participarfesta-btn').on('click',enterThis)

// função que mostra as festas cadastradas do usuario
function myParties(){
    $('#site-subtitle').html('Minhas festas');
    $('#minhas-festas').css('display','none');
    $('#festas-disponiveis').css('display','block');
    $('#campo-festas').html('');
    $('#campo-festas').css('flex-direction','column');
    fetch(`/minhasfestas`)
    .then(res1=> res1.json())
    .then(res2=>{
        console.log(res2)
        res2.forEach(element => {
            console.log(element)
            $('#campo-festas').append(
                `<div class="festa-escolhida-unica">Nome da festa : ${element.partyName}
                Token da festa : ${element.partyToken}
                <button class="gerarqrcode-btn" onclick='generateQRcode("${element.partyToken}")' type="button">Gerar QRcode</button>
                </div>`
            )
        });
    });
}

//função que cadastra o usuario na festa escolhida
function enterThis(partyName){

    fetch('/entertheparty',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"partyName":partyName}])
    }).then(resposta => resposta.text())
    .then(anwser => {
        console.log(anwser);
    });
}

//função que mostra todas as festas disponiveis para o usuario escolher
function showParties(){
    $('#festas-disponiveis').css('display','none');
    $('#minhas-festas').css('display','block');
    $('#site-subtitle').html('Que festa vamos hoje?');
    $('#campo-festas').html('')
    $('#campo-festas').css('flex-direction','row');
    $('#seuqrcode').html('')
    fetch(`/verfestas`)
    .then(res1=> res1.json())
    .then(res2=>{
        console.log(res2)
        res2.forEach(element => {
            console.log(element)
            $('#campo-festas').append(
                `<div class="festaunica">
                <img class="img-festaunica" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVvbiUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="">
                <div class="nome-festa">Nome :${element.name}</div>
                <div class="dia-horario-festa">Quando: ${element.date.split('-').reverse().join('/')} às ${element.time}</div>
                <div class="descricao-festa">${element.description}</div>
                <button class="participarfesta-btn" onclick='enterThis("${element.name}")' type="button">Participar</button>
                </div>`
            )
        });
    });

}
showParties()

//botao que gera o qrcode
function generateQRcode(token){
    fetch('/qrcodegenerator',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"token":token}])
    }).then(resposta => resposta.text())
    .then(anwser => {
        $('#seuqrcode').html(`Qrcode da festa selecionada:<br/>${anwser}`)
        console.log(anwser);
    });
}
