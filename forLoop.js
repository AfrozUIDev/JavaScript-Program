// for (i = 0; i < 10; i++) {

// }
// i=0 - intial value
// i<10 - condition
// i++ - increament

// for (i = 1; i <= 10; i++) {
//     console.log(i*5);
// }

// const array = [10, 20, 30];
// for (i = 0; i < array.length; i++) {
//   console.log(array[i] * 5);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 1; i < arr.length; i++) {
//         arr[i]%2!=0
//     }
//     console.log(arr);

// const result = arr.map((item) => (item % 2 != 0 ? item * 5 : item));
// console.log(result);

// ===========================================>> Hoisting
// console.log(a);
// a = 40;

// var a = 30;
// console.log(a);
// a = 40;
// b = a;
// console.log(b);
// console.log(a);

// ===========================================>> Closure

function outer() {
  var a = 10;
  function inner() {
    return a + 20;
  }
  inner();
}
console.log(outer);
