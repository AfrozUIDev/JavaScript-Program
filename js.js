// 1).
// arr=[1,2,3,4,5,6,7,8,9] find it sum

// let arr=[1,1,1,1,1,1]
// let sum = arr.reduce((x,y)=>x+y)
// console.log(sum);

// 2).
// setTimeout(bye, 3000);
// console.log("hello");

// function bye() {
//   console.log("Happy birtday");
// }

// 3).
// var time = (bye, 3000);
// console.log("hello");

// clearTimeout(time);

// function bye() {
//   console.log("Happy birtday");
// }

// 4).
// var count=0
// var intID=setInterval(counter, 1000)
// clearTimeout(time);

// function counter(){
//     console.log(++count);
// }

// 5).
// function x() {
//   const a = 7;
//   function y() {
//     console.log(a);
//   }
//   y(); //call y
// }
// x(); //call x

// 6). Rest Operator
// const student = {
//   name: "Afroz",
//   age: 26,
//   address: "Belgaum",
// };

// let studentOne = { ...student, name: "Arbaz" };
// console.log(studentOne);

const student = {
  name: "Afroz",
  age: 26,
  address: "Belgaum",
};
// let studentOne = { ...student, name: "Arbaz" };
// const { name, ...rest } = student;
// console.log(student);
// console.log(studentOne);

// const { ...rest } = student;
// console.log(rest);

// 7). Currying

// const curry =(a)=>{
//     return(b)=>{
//     return a*b
//     }
//     }
//     console.log(curry(3)(4))

// 8).

// 5431 => 5 + 4 + 3 + 1 => 13
// 13 => 1 + 3 => 4

// function addData(data) {
//   let convertToString = "" + data;
//   let converttoArray = convertToString.split("").map((data) => {
//     return parseInt(data);
//   });
//   let finaloutput = converttoArray.reduce((a, b) => a + b);
//   if (finaloutput > 10) {
//     addData(finaloutput);
//   } else console.log(finaloutput);
// }
// addData(45898);
// 4589 => 4 + 5 + 8 + 9 => 26
// 26 => 2 + 6 => 8
