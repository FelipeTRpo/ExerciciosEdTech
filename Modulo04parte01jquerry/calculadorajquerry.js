let sinal = "";
let num1 = 0;
let num2 = 0;
let numCheck = true;
let sinCheck = true;

$('.btn-sinal').on('click',function(){
    if(sinCheck){
        sinal = $(this).val();
        sinCheck = false;
        numCheck = false;
        $('#result-box').html(" ");
        num2 = num1;
        num1 = 0;
    }else{
        solve();
        sinal = $(this).val();

    }
        
    console.log(sinal);
})

$('.btn-numero').on('click',function(){
    if(numCheck){
        num1 = num1*10 + parseFloat($(this).val());
        $('#result-box').html(num1)
    }else{
        num1 = num1*10 + parseFloat($(this).val());
        $('#result-box').html(num1)
    }
});

$('.btn-clear').on('click',function(){
    sinal = "";
    num1 = 0;
    num2 = 0;
    numCheck = true;
    sinCheck = true;
    $('#result-box').html(" ");
});

$('.btn-igual').on('click',solve);

function solve(){
    let result = 0;
    console.log(sinal + num1 + num2)
    if(sinal==="dividir"){
        result = num2/num1;
    }
    if(sinal==="multiplicar"){
        result = num2*num1;
    }
    if(sinal==="menos"){
        result = num2-num1;
    }
    if(sinal==="mais"){
        result = num2+num1;
    }
    $('#result-box').html(result);
    num1 = 0;
    num2 = result;
    sinCheck = false;
    numCheck = false;
}