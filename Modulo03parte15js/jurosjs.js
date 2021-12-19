let contasClientes = [];
let contasClientesComJuros = [];
document.getElementById("valores-cadastrados").style.display = "none"
let todayDate = Date();
const oneDay = 1000 * 60 * 60 * 24;
function cadastroCliente() {
    let theBill = {
        clientName: document.getElementById('nome-cliente').value,
        expireDate: document.getElementById('data-vencimento').value,
        buyAmount: document.getElementById('valor-compra').value
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
    if (theBill.clientName == "" || theBill.expireDate == "" || theBill.buyAmount == "") {
        document.getElementById('digite-todos').innerHTML = "Digite todos os campos para completar o registro";
    } else {
        contasClientes.push(theBill);
        document.getElementById('digite-todos').innerHTML = "Compra cadastrada com sucesso";

    }
}
function irCadastro() {
    document.getElementById("cadastro-conta").style.display = "none"
    document.getElementById("valores-cadastrados").style.display = "inline"
}
function voltarCadastro() {
    document.getElementById("cadastro-conta").style.display = "inline"
    document.getElementById("valores-cadastrados").style.display = "none"
}

function calcularJuros() {
    document.getElementById('cadastros').innerHTML = "";
    let cadastrosHeader = {
        clientName: "Nome",
        expireDate: "Data de vencimento",
        buyAmount: "Valor a ser pago"
    }
    showAll(cadastrosHeader)
    function aplicarJuros(obj) {

        let today = new Date(todayDate);
        let expire = new Date(obj.expireDate)
        let dateComparison = ((today.getTime() - expire.getTime()) / (oneDay)).toFixed(0);
        obj.buyAmount = parseInt(obj.buyAmount)
        let objMod = {
            clientName: obj.clientName,
            expireDate: obj.expireDate,
            buyAmount: obj.buyAmount
        }
        if (dateComparison > 0) {
            objMod.buyAmount += objMod.buyAmount * ((dateComparison * 0.001) + 0.02);
        }
        objMod.expireDate = objMod.expireDate.split('-').reverse().join('/');
        return objMod;
    }
    let cadastrosComJuros = contasClientes.map(aplicarJuros);

    function showAll(obj2) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna-cadastro');
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        let span3 = document.createElement('span')
        span1.innerHTML = obj2.clientName + " ";
        span2.innerHTML = obj2.expireDate;
        span3.innerHTML = " R$" + obj2.buyAmount + " ";
        coluna.appendChild(span1);
        coluna.appendChild(span2);
        coluna.appendChild(span3);
        document.getElementById('cadastros').appendChild(coluna);
    }
    cadastrosComJuros.forEach(showAll)
    contasClientesComJuros = cadastrosComJuros;

    let soma = contasClientesComJuros.reduce(function(acc,obj){
        return acc + obj.buyAmount;
    },0)
    document.getElementById('soma-total').innerHTML="A soma total de dividas é R$"+soma;

}
// let keystore= []
// function agruparPor(objetoArray, propriedade) {
//     return objetoArray.reduce(function (acc, obj) {
//       let key = obj[propriedade];
//       if (!acc[key]) {
//         acc[key] = [];
//         keystore.push(key);
//       }
//       acc[key].push(obj);
//       return acc;
//     }, []);
//   }
// NAO DEU CERTO
// function agruparPorMostrar(objetoArray, propriedade){
//     let arrayArrumado = agruparPor(objetoArray, propriedade);
//     console.log(arrayArrumado);
//     console.log(arrayArrumado.length);
//     console.log(keystore);
//     function showAll(obj2){
//         let coluna = document.createElement('div')
//         coluna.classList.add('coluna-cadastro');
//         let span1 = document.createElement('span')
//         let span2 = document.createElement('span')
//         let span3 = document.createElement('span')
//         span1.innerHTML = obj2.clientName+" ";
//         span2.innerHTML = obj2.expireDate;
//         span3.innerHTML = " R$"+obj2.buyAmount+" ";
//         coluna.appendChild(span1);
//         coluna.appendChild(span2);
//         coluna.appendChild(span3);
//         document.getElementById('cadastros').appendChild(coluna);
//     }
//     // function teste(obj){
//     //     console.log(obj)
//     //     obj.forEach(showAll);

//     // }
//     // arrayArrumado.forEach(teste);
//     for (let i =0; i<arrayArrumado.length;i++){
//         let nome = keystore[i];
//         console.log(nome);
//     }
// }
function nameAgroup() {
    document.getElementById('cadastros').innerHTML = "";
    let cadastrosHeader = {
        clientName: "Nome",
        expireDate: "Data de vencimento",
        buyAmount: "Valor a ser pago"
    }
    showAll(cadastrosHeader)

    contasClientesComJuros.sort(function (a, b) {

        return (a.clientName > b.clientName) ? 1 : ((b.clientName > a.clientName) ? -1 : 0);

    });
    function showAll(obj2) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna-cadastro');
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        let span3 = document.createElement('span')
        span1.innerHTML = obj2.clientName + " ";
        span2.innerHTML = obj2.expireDate;
        span3.innerHTML = " R$" + obj2.buyAmount + " ";
        coluna.appendChild(span1);
        coluna.appendChild(span2);
        coluna.appendChild(span3);
        document.getElementById('cadastros').appendChild(coluna);
    }
    contasClientesComJuros.forEach(showAll);

}
function dateAgroup() {
    document.getElementById('cadastros').innerHTML = "";
    let cadastrosHeader = {
        clientName: "Nome",
        expireDate: "Data de vencimento",
        buyAmount: "Valor a ser pago"
    }
    showAll(cadastrosHeader)

    contasClientesComJuros.sort(function (a, b) {

        return (a.expireDate > b.expireDate) ? 1 : ((b.expireDate > a.expireDate) ? -1 : 0);

    });
    function showAll(obj2) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna-cadastro');
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        let span3 = document.createElement('span')
        span1.innerHTML = obj2.clientName + " ";
        span2.innerHTML = obj2.expireDate;
        span3.innerHTML = " R$" + obj2.buyAmount + " ";
        coluna.appendChild(span1);
        coluna.appendChild(span2);
        coluna.appendChild(span3);
        document.getElementById('cadastros').appendChild(coluna);
    }
    contasClientesComJuros.forEach(showAll);

}

function filterValue(){
    let min = document.getElementById('valor-min').value
    let max = document.getElementById('valor-max').value

    function filtering(obj){
        if(obj.buyAmount >= min & obj.buyAmount <= max){
            return obj;
        }
    }
    let arrayFiltrado = contasClientes.filter(filtering);

    document.getElementById('cadastros').innerHTML = "";
    let cadastrosHeader = {
        clientName: "Nome",
        expireDate: "Data de vencimento",
        buyAmount: "Valor a ser pago sem juros"
    }
    showAll(cadastrosHeader)
    function showAll(obj2) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna-cadastro');
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        let span3 = document.createElement('span')
        span1.innerHTML = obj2.clientName + " ";
        span2.innerHTML = obj2.expireDate;
        span3.innerHTML = " R$" + obj2.buyAmount + " ";
        coluna.appendChild(span1);
        coluna.appendChild(span2);
        coluna.appendChild(span3);
        document.getElementById('cadastros').appendChild(coluna);
    }
    arrayFiltrado.forEach(showAll);
}
function filterDate(){
    let min = new Date(document.getElementById('data-min').value)
    let max = new Date(document.getElementById('data-max').value)

    function filtering(obj){
        let objDate = new Date(obj.expireDate)
        if(objDate >= min & objDate <= max){
            return obj;
        }
    }
    let arrayFiltrado = contasClientes.filter(filtering);

    document.getElementById('cadastros').innerHTML = "";
    let cadastrosHeader = {
        clientName: "Nome",
        expireDate: "Data de vencimento",
        buyAmount: "Valor a ser pago"
    }
    showAll(cadastrosHeader)
    function showAll(obj2) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna-cadastro');
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        let span3 = document.createElement('span')
        span1.innerHTML = obj2.clientName + " ";
        span2.innerHTML = obj2.expireDate;
        span3.innerHTML = " R$" + obj2.buyAmount + " ";
        coluna.appendChild(span1);
        coluna.appendChild(span2);
        coluna.appendChild(span3);
        document.getElementById('cadastros').appendChild(coluna);
    }
    arrayFiltrado.forEach(showAll);
}

