
function removePElement(arr,element){
    let j = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== element){
            arr[j] = arr[i];
            j++;
        }
    }
    return j;
}
let arr = [10,23,12,34,22];
let val = 23;
let endval = removePElement(arr,23);

console.log(arr.slice(0,endval));