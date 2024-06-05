function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                continue;
            }
            if(arr[i]+arr[j]==target){
                console.log("[",i,j,"]")
            }
        }
    }
    
}
let arr = [12,34,23,1];
twoSum(arr,13);