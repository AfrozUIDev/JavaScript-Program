// 1) what will be output
// console.log(2 + "2");
// console.log(2 - "2");

// 2) remove dublicate
// let nums=[1,2,1,3]
// console.log([...new Set(nums)])
// const result=arr.filter((item,index)=>arr.indexOf(item)===index)

// 3) show var or show let
// let func = function () {
//     {
//         let l = "let";
//         var v = "var";
//     }
//     console.log(v);
//     console.log(l);
// }
// func();

// let func = function () {
//     {
//         (function () {
//         let l = "let";
//         var v = "var";
//         })();
//     }
//     console.log(v);
//     console.log(l);
// }
// func();

// 4) what will be out put
// console.log(5 < 6 < 7);
// console.log(7 > 6 > 5);

// 5)
// let a= () => arguments; // anonymous function
// console.log(a('hi'));

// let a= (...n) => {return n}; // reguler function
// console.log(a('hi'));

// 6)
// let question = () => {
//   return;
//   {
//     message: "hi";
//   }
// };
// console.log(question());

// let answer = () => {
//   return {
//     message: "hi",
//   };
// };
// console.log(answer());

// 7)
// console.log(Math.max())
// console.log(Math.max(1,2,3,5))

// function smallNum(...rest) {
//   return rest.reduce((acc, curr) => (acc > curr ? acc : curr));
//   // return rest.reduce((acc,curr)=>acc>curr?curr:acc)
// }
// console.log(smallNum(9, 2, 7, 1));
