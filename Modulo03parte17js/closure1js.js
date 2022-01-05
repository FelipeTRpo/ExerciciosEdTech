let timesFive = (function(){
    let theNumber = 0;
    console.log(theNumber)
    return function(){
        theNumber = document.getElementById('numero').value;
        theNumber *=5
        console.log(typeof(theNumber))
        document.getElementById('resposta').innerHTML = 'seu numero x5 é '+theNumber;
    }
})()


