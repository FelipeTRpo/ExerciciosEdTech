let result = 1;
function fatorial(_numero){
    let num = _numero;
    result = result*num;
    num--;
    if(num!==1){
    fatorial(num);
    }
    return result
}
let resultado = fatorial(10);
console.log(resultado);