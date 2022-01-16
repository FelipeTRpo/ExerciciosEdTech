const a = [1,2,3,4,6,7,8,9,0];
const b = [5,6,7,8];

function conc(x,y){
    let xy = [...x,...y];
    return xy;
}

const ab = conc(a,b);

console.log(ab)