let arr = [12,34,21,56,11];
function minmax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i=1;i<=arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }else if(arr[i]<min){
            min = arr[i];
        }
    }
    return [min,max];
}

console.log(minmax(arr));