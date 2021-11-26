
let caixaCount = 0;
function sendHamburger(){
    let totalValue = 0;
    let sentText = '';
    let breadType = document.querySelector('input[name="tipo-pao"]:checked').value;
    let meatType = document.querySelector('input[name="tipo-hamburger"]:checked').value;
    let saladType = document.querySelector('input[name="tipo-salada"]:checked').value;
    let cheeseType = document.querySelector('input[name="tipo-queijo"]:checked').value;

    console.log(breadType);
    console.log(meatType);
    console.log(saladType);
    console.log(cheeseType);
    let caixa = document.createElement('div');
    caixa.classList.add('classe-caixa-pedido');
    caixa.id = "caixaPedido" + caixaCount;
    let ingredientes = document.createElement('ul')
    //Setando valores com o pao $ARQ1
    if(breadType == "pao-frances"){
        totalValue = totalValue + 3;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Pão francês');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    if(breadType == "pao-australiano"){
        totalValue = totalValue + 8;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Pão australiano');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    if(breadType == "pao-brioche"){
        totalValue = totalValue + 6;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Pão brioche');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    //Setando valores com o carne
    if(meatType == "hamburguer-picanha"){
        totalValue = totalValue + 13;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Hambúrguer de picanha');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    if(meatType == "hamburguer-costela"){
        totalValue = totalValue + 10;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Hambúrguer de costela');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    if(meatType == "hamburguer-vegano"){
        totalValue = totalValue + 12;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Hambúrguer vegano');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    //Setando valores com o salada
    if(saladType == "salada-alface"){
        totalValue = totalValue + 1.50;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Alface');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    if(saladType == "salada-tomate"){
        totalValue = totalValue + 1.50;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Tomate');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    if(saladType == "salada-sem"){
        totalValue = totalValue + 0;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Sem salada');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    //Setando valores com o queijo
    if(cheeseType == "queijo-mussarela"){
        totalValue = totalValue + 3;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Mussarela');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    if(cheeseType == "queijo-prato"){
        totalValue = totalValue + 3;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Prato');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    if(cheeseType == "queijo-cheddar"){
        totalValue = totalValue + 5;
        let ingrediente = document.createElement('li');
        let textoIngrediente = document.createTextNode('Cheddar');
        ingrediente.appendChild(textoIngrediente);
        ingredientes.appendChild(ingrediente);
    }
    let pDeParagrafo = document.createElement('p');
    let pedidoNumber = document.createTextNode(' Pedido #'+caixaCount )
    let textNodeValue = document.createTextNode(' Valor Total: R$' + totalValue);
    pDeParagrafo.appendChild(pedidoNumber);
    pDeParagrafo.style.fontWeight="bold";
    caixa.appendChild(pDeParagrafo);
    caixa.appendChild(textNodeValue);
    caixa.appendChild(ingredientes);
    document.getElementById('pedidos').appendChild(caixa);

    caixaCount++;
}