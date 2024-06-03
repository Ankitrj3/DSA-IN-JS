// insertion in array
let arr = [10,234,21,34,12];
function Insert(arr,index){
    for(let i=0;i<arr.length;i++){
       arr.splice(index,1);
    }
    return arr;
}
Insert(arr,2);