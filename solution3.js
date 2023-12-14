//splice method
let arr=[1,2,3,4,5,6];
function removeItem(arr,num){
    arr.splice(num,1);
 return arr;
}
console.log(removeItem(arr,2));
