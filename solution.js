let arr=[1,2,3,4,5,6];
function removeItem(num){
    let result=[];
 for(let i=0;i<arr.length;i++){
     if(i!==num){
         result.push(arr[i])
     }
 } 
 return result;
}
console.log(removeItem(2));
