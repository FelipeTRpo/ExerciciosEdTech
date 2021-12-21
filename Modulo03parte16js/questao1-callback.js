function openThis(gimmeFunc){
    let printThis = 'Hello world';
    gimmeFunc(printThis);
}
function callback(arg){
    console.log(arg);
}
openThis(callback);