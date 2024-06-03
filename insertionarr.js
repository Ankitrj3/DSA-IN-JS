// insertion in array
let arr = [10,234,21,34,12];
function Insert(arr,index,element){
    for(let i=0;i<arr.length;i++){
    //    arr.splice(index,0,element);
    let arr1 = [];
    if(arr[i]===index){
        arr1.push(element);
    }
       arr1.push(arr[i]);
    }
    return arr1;
}
Insert(arr,2,33);