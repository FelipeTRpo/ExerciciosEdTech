let contasClientes = [];
document.getElementById("valores-cadastrados").style.display = "none"
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
        document.getElementById('digite-todos').innerHTML= "";
    }
    console.log(contasClientes);
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

}