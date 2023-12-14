//filter method
let arr=[1,2,3,4,5,6];
function removeItem(arr,num){
 return arr.filter((item)=> item != num);
}
console.log(removeItem(arr,3));
