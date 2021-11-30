let timesEraseBoard = 0;

function writeBlackboard(){
    let textToWrite = document.getElementById('frase-usada').value;
    let timesToWrite = document.getElementById('quantidade-frase').value;
    let arrayText = textToWrite.split('');
    console.log(arrayText.length);
    arrayText.push(' ');
    arrayText.push('\u3164','\u3164','\u3164');
    let i =0
    let j =0
    
    while(i<timesToWrite){
        //let textNode = document.createTextNode(textToWrite+"\t");
        //document.getElementById('caixa-escrito').appendChild(textNode);
        // arrayText.forEach((letra,i) => {
        //     setTimeout(function(){
        //         let letraNode = document.createTextNode(letra);
        //         document.getElementById('caixa-escrito').appendChild(letraNode);
        //     }, 80*i);
        // })
        typeWriter(arrayText);
        
        let outBox = document.getElementById('quadro-negro');
        let innerBox = document.getElementById ('caixa-escrito');
        if(innerBox.offsetHeight > outBox.offsetHeight){
            document.getElementById('caixa-escrito').innerHTML = " ";
            timesEraseBoard++;
    }
    let lines = (document.getElementById('caixa-escrito').offsetHeight)/25;
    let totalLines =lines + timesEraseBoard*11;
    document.getElementById('linhas-escritas').innerHTML = "Foram escritas " + totalLines + " linhas";
    document.getElementById('quadro-apagado').innerHTML = "O quadro foi apagado " + timesEraseBoard +" vezes";
    i++;
    }


}
function typeWriter(arrayText2){
    let j=0;
    while(j<arrayText2.length){
        let letra = arrayText2[j];
        document.getElementById('caixa-escrito').innerHTML += letra;
        j++
        

        // setTimeout(() => {
        //     console.log('teste')
        // } , 75*i);
        
    }
}
