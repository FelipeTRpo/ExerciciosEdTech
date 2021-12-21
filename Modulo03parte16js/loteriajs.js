let numeros = [];
let counter = 0;
let interval;
function limpar() {
    for(let i = 0; i<6;i++){
        document.getElementById('numero'+i).innerHTML=""
    }
}
function sortearNumeros(){
    limpar()
    counter = 0;
    numeros = [];
    interval = setInterval(chooseNumber,1000);
}
function chooseNumber(){
    if(counter<6){
        let theNum = Math.floor(Math.random()*60 + 1 );
        let verificator = 0;
        while(verificator == 0){
            verificator = 1;
            numeros.forEach(function (element){
                if (element == theNum){
                    verificator = 0
                    theNum = Math.floor(Math.random()*60 + 1 );
                }
            })
        }
        numeros.push(theNum)
        document.getElementById('numero'+counter).innerHTML=numeros[counter];
        counter++; 
    }
    if(counter == 6){
        clearInterval(interval);
    }
}