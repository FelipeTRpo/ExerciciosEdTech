const a = [10,8,4,5];

function mutiply(x,y,w,z){
let result = x*y*w*z;
return result;
}

const showme = mutiply(...a);

console.log(showme);