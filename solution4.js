//slice method
let arr=[1,2,3,4,5,6];
function removeItem(num){
    
 return arr.slice(0,num).concat(arr.slice(num + 1));;
}
console.log(removeItem(2));
