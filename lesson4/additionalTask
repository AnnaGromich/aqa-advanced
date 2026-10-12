let arr1 = [6,2,1,8,10];
let arr2 = [1,1,11,2,3];
function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 1) {
    return 0;
  }
  
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }

    let sumFinal = sum - Math.min(...array) - Math.max(...array);
    return sumFinal;
    
}

console.log(sumArray(arr1));
console.log(sumArray(arr2));