let operation = 0;
let valueShow = " ";
let valueCalc = 0;
let valueCalcMem = 0;
let pressedOperator = 0;

// function to choose whitch operator the calculator will use, 0 = /, 1 = *, 2 = -, 3 = +.
function chooseOperator(operatorClick){
    if(pressedOperator===0){
        operation = 0;
        let counter= 0;
            for(i=0;i<operatorClick;i++){
                counter++;
        }
        operation = counter ;
        console.log(operation);
        pressedOperator =1;
        let valueBox = document.getElementById('result-box');
        valueShow =""
        valueBox.innerHTML= valueShow;

    }
    else{
        letsDoIt();
        operation = 0;
        let counter= 0;
            for(i=0;i<operatorClick;i++){
                counter++;
        }
        operation = counter ;
        console.log(operation);
    }
     
}

function chooseNumber(chosenNumber){
    if(pressedOperator===0){
        //function part dedicated to show the typed number
        let valueBox = document.getElementById('result-box');
        valueShow = valueShow + chosenNumber;
        valueBox.innerHTML= valueShow;
        //transformation string to number
        valueCalc= parseFloat(valueShow);
    }
    else{
        //function part dedicated to show the typed number
        let valueBox = document.getElementById('result-box');
        valueShow = valueShow + chosenNumber;
        valueBox.innerHTML= valueShow;
        //transformation string to number
        valueCalcMem= parseFloat(valueShow);
        
    }
}

function letsDoIt(){
    if(operation === 0){
        let result = valueCalc/valueCalcMem;
        valueShow = result.toString();
        let valueBox = document.getElementById('result-box');
        valueBox.innerHTML= valueShow;
        valueCalc = result;
        //initial condition
        operation = 0;
        valueShow = " ";
        valueCalcMem = 0;
        pressedOperator = 0;
    }
    if(operation === 1){
        let result = valueCalcMem * valueCalc;
        valueShow = result.toString();
        let valueBox = document.getElementById('result-box');
        valueBox.innerHTML= valueShow;
        valueCalc = result;
        //initial condition
        operation = 0;
        valueShow = " ";
        valueCalcMem = 0;
        pressedOperator = 0;
    }
    if(operation === 2){
        let result = valueCalc - valueCalcMem;
        valueShow = result.toString();
        let valueBox = document.getElementById('result-box');
        valueBox.innerHTML= valueShow;
        valueCalc = result;
        //initial condition
        operation = 0;
        valueShow = " ";
        valueCalcMem = 0;
        pressedOperator = 0;
    }
    if(operation === 3){
        let result = valueCalcMem + valueCalc;
        valueShow = result.toString();
        let valueBox = document.getElementById('result-box');
        valueBox.innerHTML= valueShow;
        valueBox.innerHTML= valueShow;
        valueCalc = result;
        //initial condition
        operation = 0;
        valueShow = " ";
        valueCalcMem = 0;
        pressedOperator = 0;
    }
}
function clearCalc(){
    let valueBox = document.getElementById('result-box');
    valueBox.innerHTML= "";
    operation = 0;
    valueShow = " ";
    valueCalc = 0;
    valueCalcMem = 0;
    pressedOperator = 0;
}