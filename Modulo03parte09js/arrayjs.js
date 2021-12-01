let numArray = 0;

function memorySave(){
    let numOne = document.getElementById("primeiro-num").value;
    let numTwo = document.getElementById("segundo-num").value;
    let numThree = document.getElementById("terceiro-num").value;
    let numFour = document.getElementById("quarto-num").value;
    numArray = [numOne, numTwo, numThree, numFour];
    document.getElementById('numeros-memoria').innerHTML="Sua sequência armazenada na memória é : " + numArray;
}

function reverseVector(){
    let anwserArray = [numArray[3],numArray[2],numArray[1],numArray[0]]
    document.getElementById('resposta').innerHTML="O reverso da sequencia armazenada é: " + anwserArray;

}

function numericOrder(){
    let anwserArray = [0,0,0,0];
    let compArray = [numArray[0],numArray[1],numArray[2],numArray[3]]
    for(i=0;i<4;i++){
        for(j=0; j < compArray.length ;j++){
            if(compArray[j] >= compArray[i]){
                let num = compArray[j];
                compArray[j] = compArray[i]
                compArray[i] = num;
            }
        }
    }
    document.getElementById('resposta').innerHTML="Sua sequencia armazenada ordenada é: " + compArray;
}