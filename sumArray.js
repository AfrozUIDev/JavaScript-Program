// const sum = (a, b) => a + b;
// console.log(sum(5, 5));

// function sum (a,b){
//     return (a+b)
// }
// console.log(sum(5,5));

// const arr=[1,2,3,4]
// const result=arr.reduce((acc,cur)=>acc+cur)
// console.log(result);


const arr = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  console.log(sum);
}
