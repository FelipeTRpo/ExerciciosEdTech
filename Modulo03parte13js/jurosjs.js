let contasClientes = [];
document.getElementById("valores-cadastrados").style.display = "none"
let todayDate = Date();
const oneDay = 1000 * 60 * 60 * 24;
function cadastroCliente(){    
    let theBill = {
        clientName : document.getElementById('nome-cliente').value,
        expireDate : document.getElementById('data-vencimento').value,
        buyAmount : document.getElementById('valor-compra').value
    }
    // teste com classe (ficou muito grande)
    // class Client {
    //     constructor(clientNameObj,buyDateObj,buyAmountObj){
    //         this.clientNameObj = clientNameObj;
    //         this.buyDateObj = buyDateObj;
    //         this.buyAmountObj = buyAmountObj;
    //     }
    // }
    // let theBill = new Client(clientName,buyDate,buyAmount)
    if(theBill.clientName =="" ||theBill.expireDate =="" ||theBill.buyAmount ==""){
        document.getElementById('digite-todos').innerHTML="Digite todos os campos para completar o registro";
    }else{
        contasClientes.push(theBill);
        document.getElementById('digite-todos').innerHTML= "Compra cadastrada com sucesso";

    }
}
function irCadastro(){
    document.getElementById("cadastro-conta").style.display = "none"
    document.getElementById("valores-cadastrados").style.display = "inline"
}
function voltarCadastro(){
    document.getElementById("cadastro-conta").style.display = "inline"
    document.getElementById("valores-cadastrados").style.display = "none"
}

function calcularJuros(){
    document.getElementById('cadastros').innerHTML= "";
    let cadastrosHeader = {
        clientName : "Nome",
        expireDate : "Data de vencimento",
        buyAmount : "Valor a ser pago"
    }
    showAll(cadastrosHeader)
    function aplicarJuros(obj){

        let today = new Date(todayDate);
        let expire = new Date(obj.expireDate)
        let dateComparison = ((today.getTime()-expire.getTime()) /(oneDay)).toFixed(0);
        obj.buyAmount = parseInt(obj.buyAmount)
        let objMod = {
            clientName : obj.clientName,
            expireDate : obj.expireDate,
            buyAmount : obj.buyAmount
        }
        if(dateComparison>0){
            objMod.buyAmount += objMod.buyAmount*((dateComparison*0.001)+0.02);
        }
        objMod.expireDate = objMod.expireDate.split('-').reverse().join('/');
        return objMod;
    }
    let cadastrosComJuros = contasClientes.map(aplicarJuros)
function showAll(obj2){
    let coluna = document.createElement('div')
    coluna.classList.add('coluna-cadastro');
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let span3 = document.createElement('span')
    span1.innerHTML = obj2.clientName+" ";
    span2.innerHTML = obj2.expireDate;
    span3.innerHTML = " R$"+obj2.buyAmount+" ";
    coluna.appendChild(span1);
    coluna.appendChild(span2);
    coluna.appendChild(span3);
    document.getElementById('cadastros').appendChild(coluna);
}
    cadastrosComJuros.forEach(showAll)
}