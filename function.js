// vanilla ES5      =======> Syntax
// function name(){

// }

// fat arrow        =======> Syntax
// const name1 = () => {
//   return 5;
// };

// ===========================================>> Type of function:-parametrised and non parametrised
// 1) =========================================>> non-parametrised - pure function:- It always give same value
// function add() {
//  // function declare
// }
// console.log(add()); // function calling
// pure function:- It always give same value

// 2) ============================================>> parametrise - need to pass arrgument - user will give parameter
// function biggerNum(num1, num2) {
//   if (num1 > num2) {
//     console.log("Num1", num1, "is greater");
//   } else {
//     console.log("Num2", num2, "is greater");
//   }
// }
// console.log(biggerNum(30, 5));

// Rest operator convert nums in array
// function biggerNum(...nums) {
//   return nums;
// }
// console.log(biggerNum(30, 5, 50, 69, 85));

// function biggerNum(...nums) {
//   return nums.reduce((acc,curr)=>acc>curr?acc:curr); // acc - accumlator, curr - current
// }
// console.log(biggerNum(30, 5, 50, 69, 85));

// =================================================>> Rest operator - reduce with vanilla function
// function smallNum(...rest) {
//   return rest.reduce((acc, curr) => (acc < curr ? acc : curr));
//   // return rest.reduce((acc,curr)=>acc>curr?curr:acc)
// }
// console.log(smallNum(9, 2, 7, 1));

// =================================================>> Rest operator - reduce with arrow function
// const smallNum1 = (...rest) => {
//   // return rest.reduce((acc, curr) => (acc < curr ? acc : curr));
//   // return rest.reduce((acc,curr)=>Math.min(acc,curr))     =======>> Array ki built in method hai
//   //   for (let i = 0; i < rest.length; i++)
//   //   return "Hello"
//   // console.log("Hello");
//   for (let i = 0; i < rest.length; i++) {
//     for (let j = 1; j < rest.length - 1; j++) {
//       if (rest[i] < rest[j]) console.log(rest[i]);
//     }
//   }
// };
// // console.log(smallNum1(9, 2, 7, 1));
// smallNum1(9, 2, 7, 1);

// ====================================================>> Reverse Method

// Split method conver string to array

// const reversfun = (str) => {
//   // return str.split("").reverse().join("")   // word reverse
//   // return str.split(" ").reverse().join(" ")   // sentence reverse
//   return str.split("").reverse().join("").split(" ").reverse().join(" "); // sentence reverse on its place
// };
// console.log(reversfun("PDAC is in Nanded"));

// ====================================================>> Biggest number from mob number
// const bigNum=(num)=>{
//     return num.split("").reduce((acc,curr)=>acc>curr?acc:curr)
// }
// console.log(bigNum("7756903575"));

// ====================================================>> add +91 in mob number
// const bigNum = (num) => {
//   let result = num.split("");
//   result.unshift("+91");
//   return result.join("");
// };
// console.log(bigNum("7756903575"));

// ====================================================>> sum of mobile number

// const sum = (num) => {
//   let result = num.split("");
//   return result.reduce((acc, curr) => Number(acc) + Number(curr));
// };
// console.log(sum("7756903575"));

// ====================================================>> Find the lengthy work

// const biggerWord = (str) => {
//   const result = str
//     .split(" ")
//     .reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
//   console.log(result);
// };
// console.log(biggerWord("I AM FROM MAHARASHTRA"));

// ====================================================>> Remove Dublicate from array

// const arr = [2, 5, 2, 6, 2, 4, 5, 4];
// const result = [...new Set(arr)];
// const result=arr.filter((item,index)=>arr.indexOf(item)===index) // Remove dublicate
// const result = arr.filter((item, index) => arr.indexOf(item) != index); // Give dublicate
// console.log(result);

// Map((item))            ==> []
// forEach((item))        ==> iterable/outside of []
// filter((item))         ==> []
// filter((item,index))   ==> []
// sort((acc,cur))        ==> []
// reduce((acc,cur))      ==> single value

// ====================================================>> Remove Dublicate from array
// const names = [
//   "Pune",
//   "Mumbai",
//   "Bombay",
//   "Goa",
//   "Bangalore",
//   "Bider",
//   "Nanded",
//   "Nagpur",
// ];
// const result = names.filter((item) => item.startsWith("B")); // startsWith is a string method
// console.log(result);
// ----------------------------------
// const result = names.filter((item) => item.startsWith("B"));
// console.log(result);
// let all = result.map((item) => item.toUpperCase());
// console.log(all);
// ----------------------------------
// const result = names
//   .filter((item) => item.startsWith("B"))
//   .map((item) => item.toUpperCase());
// console.log(result);

// ====================================================>> Concat two arrays

// const names = ["Raj", "Sam", "Meena"];
// const cities = ["Mumbai", "Nanded", "Bangalore"];
// const result = [...cities, ...names];
// const result = cities.concat(names);
// console.log(result);

// ====================================================>> Time function
// ====================================================>> Time function

// It will print only once after given time
// setTimeout(()=>{
//     console.log("hello");
// },1000)

// ----------------------------------

// It will printing for given time till we clear interval
// setInterval(()=>{
//     console.log("hello");
// },1000)

// ----------------------------------

// It will stop setInterval
// const time = setInterval(() => {
//   console.log("hello");
// }, 1000);
// setTimeout(() => {
//   clearInterval(time);
// }, 5000);

// ----------------------------------

// var has Global scope it will print 10 at 10 times
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// // ==> var i = 10 10 10 ... 10 time

// // let has block scop it will print 0-9
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// // ==> var i = 0 to 9 time

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i); // 2nd exicution
//   }, 0);
//   console.log(i * 2); // 1st exicution
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i); // merge with 2nd exicution
//   setTimeout(() => {
//     console.log(i); // 2nd exicution
//   }, 0);
//   console.log(i * 2); // 1st exicution
// }

// ====================================================>> sum without array

// const nums = [2, 4, 5, 7, 8, 10, 2];
// let sum = 0;
// for (i = 0; i < nums.length; i++) {
//   sum = sum + nums[i];
// }
// console.log(sum);

// ====================================================>> find Vovels

// let str = "someting";
// const result=str.match(/[aeiou]/gi)
// console.log(result);

// ====================================================>> Hoisting

// function sayHi(){
//     var name="Baburao"
//     let age=28
//     console.log(name);
//     console.log(age);
// }
// sayHi()

// ====================================================>> post & pre Increments

// let number = 0;
// console.log(number++); //==> 0     post increment
// console.log(++number); //==> 2     pre increment
// console.log(number); //==> 2
