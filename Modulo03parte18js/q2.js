const array = [[1,2,3],[4,5,6],[7,8,9]]
let i = 0;
let j = 0;
function showArray(_arr){
    console.log(_arr[i][j]);
    if(j<_arr[0].length-1){
        j++;
        showArray(_arr);
    }
    if(i<_arr.length-1){
        i++;
        j=0;
        showArray(_arr);
    }
    return false
}
showArray(array);