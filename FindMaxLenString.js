let mystring = ["ankit","robin","mom","dad","akancha"];


function largestString(mystring){
    let largest = "";
    for(let i=0;i<mystring.length;i++){
        const currentString = mystring[i];
        if(currentString.length > largest.length){
            largest = currentString;
        }
    }
    return largest;
}

console.log(largestString(mystring));