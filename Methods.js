// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map((item))            ==> []
// forEach((item))        ==> iterable/outside of []
// filter((item))         ==> []
// filter((item,index))   ==> []
// sort((acc,cur))        ==> []
// reduce((acc,cur))      ==> single value

// //////////////////////////////////////////////////////////////

// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-5.php

// //////////////////////////////////////////////////////////////

// 1) find even number from arr=[1,2,3,4,5,6,7,8,9,10]
// const result = arr.filter((item) => item % 2 === 0);
// console.log(result);
// ---------------------------------------------- which is "odd" & "even"
// for (var i=0; i<=15; i++) {
//     if (i === 0) {
//             console.log(i +  " is even");
//     }
//     else if (i % 2 === 0) {
//             console.log(i + " is even");
//     }
//     else {
//             console.log(i + " is odd");
//     }
// }
// ----------------------------------------------
// for(var i=0; i<arr.length; i++){
//     if(arr[i]%2 == 0){
//       console.log(arr[i]);
//     }
//   }
// ----------------------------------------------
// const result = arr.map((item) => (item % 2 != 0) * item * 2 || item);
// console.log(result);
// ----------------------------------------------
// let sum = 0;
// const result = arr.forEach((item) => (sum = sum + (item % 2 === 0))); //====> this show how many item are aven
// console.log(result);
// ----------------------------------------------
// let sum=0
// for (i=0; i<arr.length; i++)
// sum=(item[i]%2===0)
// console.log(arr[i]);
// console.log(sum);

// //////////////////////////////////////////////////////////////

// 2) find biggest number
// const result = arr.reduce((acc, curr) => (acc > curr ? acc : curr));
// console.log(result);
// ----------------------------------------------
// const result = arr.reduce((acc, curr) => Math.max(acc, curr));
// console.log(result);
// ----------------------------------------------
// let sum = 0;
// const result = arr.forEach((item) => {
//   if (sum < item) sum = item;
// });
// console.log(sum);
// ----------------------------------------------
// var result=Math.max.apply(Math,arr)
// console.log(result);
// ----------------------------------------------
// let result=Math.max(...arr)
// console.log(result);
// ----------------------------------------------

// //////////////////////////////////////////////////////////////

// 3) Remove Duplicate
// let arr1=[1,2,3,6,5,6,9,8,5,6,4,2,65,4,6,4,65,2,5,]
// let arr1=["a","b","a"]
// const result = [...new Set(arr1)];
// const result = arr.filter((item, index) => arr.indexOf(item) === index); // Remove ++++++++++++++++++++++duplicate
// const result = arr.filter((item, index) => arr.indexOf(item) != index); // Give duplicate
// console.log(result);

// ----------------------------------------------

// ==>Remove Duplicate using for Loop
// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10]
// let result = []
// for (let i = 0; i < arr.length; i++) {
//   if (!result.includes(arr[i])) {
//     result.push(arr[i])
//   }
// }
// console.log(result)

// ----------------------------------------------

// function Duplicate(abc){
//     let result=[]
//     for(let i of abc){
//         if(result.indexOf(i)===-1){
//             result.push(i)
//     }
//     }
//     console.log(result)
// }
// Duplicate([2,5,3,6,2,5,2,5,9,2,5,])

// ----------------------------------------------

// How many time Duplicate repeated
// let arr = [1,3,6,9,3,1,7,4,2,6,1,8,0,2,3]
// let arr1={}
// arr.forEach((item)=>{
//     arr1[item]=arr1[item]?arr1[item]+1:1;
// })
// console.log(arr1)

// ----------------------------------------------

// var arr = [
//   [1, 2, 2, 3],
//   [5, 3, 6, 6],
//   [5, 3, 8, 8, 4, 5],
// ];

// ----------------------------------------------

// var a = [].concat(...arr);
// b = a.filter((item, i) => a.indexOf(item) != i);
// console.log(b);

// ----------------------------------------------
// var result = [];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     if (result.indexOf(arr[i][j]) == -1) {
//       result.push(arr[i][j]);
//     }
//   }
// }
// console.log(result);

// ----------------------------------------------

// function findDuplicate(arr) {
//   let result = [];
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (temp.indexOf(arr[i][j]) === -1) {
//         temp.push(arr[i][j]);
//       } else {
//         result.push(arr[i][j]);
//       }
//     }
//   }
//   return result;
// }
// console.log(
//   findDuplicate([
//     [1, 2, 2, 3],
//     [5, 3, 6, 6],
//     [5, 3, 8, 8, 4, 5],
//   ])
// );

// //////////////////////////////////////////////////////////////

// 4) Rever Method (Split Method)
// const arr1="My name is Afroz"

// const result=arr1.split(" ").reverse().join(" ").split("").reverse().join("")
// console.log(result);

// //////////////////////////////////////////////////////////////

// 5) sort method
// let arr1=[1,2,3,6,5,6,9,8,5,6,4,2,65,4,6,4,65,2,5,]
// const result=arr1.sort((acc,curr)=>acc>curr?1:-1)
// console.log(result);

// //////////////////////////////////////////////////////////////

// 6) Rest operator - reduce with vanilla function
// function smallNum(...rest) {
//   return rest.reduce((acc, curr) => (acc < curr ? acc : curr));
//   return rest.reduce((acc, curr) => (acc > curr ? curr : acc));
// }
// console.log(smallNum(9, 2, 7, 1));

// //////////////////////////////////////////////////////////////
// 7) Biggest number from mob number
// const bigNum=(num)=>{
//     return num.split("").reduce((acc,curr)=>acc>curr?acc:curr)
// }
// console.log(bigNum("7756903575"));

// ----------------------------------------------
// =====>> add +91 in mob number
// const add = (num) => {
//   let result = num.split("");
//   result.unshift("+91");
//   return result.join("");
// };
// console.log(add("7756903575"));

// ----------------------------------------------
// =====>> sum of mobile number

// const sum = (num) => {
//   let result = num.split("");
//   return result.reduce((acc, curr) => Number(acc) + Number(curr));
// };
// console.log(sum("7756903575"));

// ----------------------------------------------
// Find sum of two numbers from array

// var arr=[9,2,4,6,1]
// var a=[]
// for(i=0;i<arr.length;i++){
// for(j=0;j<arr.length;j++){
// if(arr[i]+arr[j]==13){
// a.push(arr.indexOf(arr[j]))
// a.push(arr.indexOf(arr[i]))
// }
// }
// }
// console.log(a)
// ////////////////////////////////////////////////////////////////
// 9)
// const data = [
//     { name: "Rahul", age: 15, city: "Nanded", married: "yes" },
//     { name: "Soniya", age: 19, city: "Pune", married: "No" },
//     { name: "Raju", age: 16, city: "Kolhapur", married: "No" },
//     { name: "Baburao", age: 43, city: "Solapur", married: "yes" },
//     { name: "Sham", age: 29, city: "Kolhapur", married: "No" },
//     { name: "Ravi", age: 19, city: "Pune", married: "No" },
//   ];

// const result=data.filter((item)=>item.age>19)
// const result=data.filter((item)=>item.city.includes("Pune"))
// const result=data.filter((item)=>item.married.includes("yes"))
// const result=data.filter((item)=>item.married==="yes")
// const result=data.filter((item)=>item.city==="Pune")
// const result = data.map((item) => item.name.toUpperCase());
// console.log(result);

// data.forEach((item)=>item.age>19?
// item.retired=true:
// item.retired=false
// )
// console.log(data);

// =========================================>> adding extra key if condition pass
// for (i=0; i<data.length; i++ ){
//     data[i].age>20?
//     data[i].retired=true:
//     data[i].retired=false
// }
// console.log(data);

// ======================================>> changing city: Pune to Mumbai
// const value changing from reference.. we can change inside value of const
// data.forEach((item)=>item.city==="Pune"?
// item.city="Mumbai":
// ""
// )
// console.log(data);

// const products = [
//   { title: "Adidas", size: "7", Color: "red" },
//   { title: "Adidas", size: "8", Color: "black" },
//   { title: "Adidas", size: "9", Color: "blue" },

//   { title: "Adidas", size: "7", Color: "red" },
//   { title: "Reebok", size: "8", Color: "white" },
//   { title: "Reebok", size: "8", Color: "Red" },
//   { title: "Reebok", size: "9", Color: "Blue" },
//   { title: "nike", size: "9", Color: "red" },
//   { title: "Flash", size: "7", Color: "blue" },
//   { title: "R&B", size: "8", Color: "black" },
//   { title: "ads", size: "7", Color: "red" },
// ];

// const result = products.filter(
//   (item) => item.title.includes("Adidas") && item.Color.includes("red")
// );
// const result = product.filter(
// (item) => item.title === "Adidas" && item.Color === "red" && item.size === "7"
// );
// console.log(result);

// ////////////////////////////////////////////////////////////////

// 10) concating arrays and accending
// const arr=[1,3,4,2,6]
// const arr1=[7,8,9,10]
// const concated=(arr.concat(arr1))
// const result=concated.sort((acc,curr)=>acc>curr?1:-1)
// console.log(result)

// ////////////////////////////////////////////////////////////////

// 11) Find the lengthy word
// const biggerWord = (str) => {
//   const result = str
//     .split(" ")
//     .reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
//   console.log(result);
// };
// console.log(biggerWord("I AM FROM MAHARASHTRA"));

// ////////////////////////////////////////////////////////////////

// 12) Flatten the array
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, [6, [7, 8], 9]],
//   [10, 11, 12],
// ];

// function flatten(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(
//   flatten([
//     [1, 2],
//     [3, 4],
//     [5, [6, [7, 8], 9]],
//     [10, 11, 12],
//   ])
// );

// -------------------------------------------------------
// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, [6, [7, 8], 9]],
//   [10, 11, 12],
// ];
// var result = [];
// for (var i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (var j = 0; j < arr[i].length; j++) {
//       if (Array.isArray(arr[i][j])) {
//         for (var k = 0; k < arr[i][j].length; k++) {
//           result.push(arr[i][j][k]);
//         }
//       } else {
//         result.push(arr[i][j]);
//       }
//     }
//   } else {
//     result.push(arr[i]);
//   }
// }
// console.log(result);
// -------------------------------------------------------
// let flattend = [].concat(...arr);
// console.log(flattend);
// console.log(arr,flat(2));

// function cunstomFlat(arr, depth = 1) {
//   let result = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item) & (depth > 0)) {
//       result.push(...cunstomFlat(item, depth - 1));
//     } else result.push(item);
//   });
//   return result;
// }
// console.log(cunstomFlat(arr, 3));

// ////////////////////////////////////////////////////////////////

// var arr=[[[1, [1.1]], 2, 3], [4, 5]];

//  outpu==> [1, 1.1, 2, 3, 4, 5]
// -------------------------------------------------------
// var arr=[[[1, [1.1]], 2, 3], [4, 5]]
// // console.log(arr.length)
// var x=[]
// var y=[]
// var z=[]
// for(var i=0;i<arr.length;i++){
// 	if(Array.isArray(arr[i])){
// 	z=x.concat(...arr[i])
//     	if(Array.isArray(z)){
//     	    y=y.concat(...z)
//     	}
// 	}
// }
// console.log(y)

// -------------------------------------------------------

// arr=[[[1, [1.1]], 2, 3], [4, 5]]

// c=[].concat(...arr)
// d=[].concat(...c)
// e=[].concat(...d)
// console.log(e)

// -------------------------------------------------------

// var arr=[[[1, [1.1]], 2, 3], [4, 5]]
// const result=arr.reduce((acc,cur)=>acc.concat(cur)).reduce((acc,cur)=>acc.concat(cur))
// const a=[].concat(...result)
// console.log(a)

// -------------------------------------------------------

// function flatten(arr) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         result = result.concat(flatten(arr[i]));
//       } else {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }

//   console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]]));

// ////////////////////////////////////////////////////////////////
// 13) star inc dec
// function increase(rows){
//     for (let i=0; i<=rows; ++i){
//         const result="* ".repeat(i)
//         console.log(result)
//     }
// }
// increase(5)
// function decrease(rows){
//     for (let i=rows; i>=0; --i){
//         const result="* ".repeat(i)
//         console.log(result)
//     }
// }
// decrease(5)
// -------------------------------------------------------
// var x,y,chr;
// for(x=1; x <=6; x++)
// {
//    for (y=1; y <x; y++)
//      {
//     chr=chr+("*");
//       }
//  console.log(chr);
//  chr='';
// }

// ////////////////////////////////////////////////////////////////

// 14) Pallindrom

// function IsPallindrom(num) {
//   const temp = num.toString().split("").reverse().join("") * 1;
//   return (result = num === temp ? true : false);
// }
// console.log(IsPallindrom(121));

// function IsPallindrom1(num) {
//   const temp = num.toString().split("").reverse().join("");
//   return (result = num === temp ? true : false);
// }
// console.log(IsPallindrom1("MADAM"));

// ////////////////////////////////////////////////////////////////

// 15)  "Tushar Sagar Frank Tedd Mark Rahul Rohan Rohit Amir Akash"

// Take a single character as an input from user. Parse the above string and print names which have maximum occurences
// of the character entered by the user.

// Example 1 - if user enters 'a', your output should be "Sagar Akash"
// Example 2 - if user enters 'd', your output should be "Tedd"

// Answer=>
// var string="Tushar Sagar Frank Tedd Mark Rahul Rohan Rohit Amir Akash sanjana"
// var str1=string.toLowerCase()
// // console.log(str1)
// var str=str1.split(" ")
// // console.log(str)
// function result(a){
// for (i=0;i<str.length;i++){
//  number=str[i].match(/a/g)
//  if(number){
//  number1=str[i].match(/a/g).length
//  if(number1){
// //  if(number1>=2){
// //  if(number1>=3){
//  console.log(str[i])
//  }
//  }
// }
// }
// result('a')
//keep grinding yourself

// ////////////////////////////////////////////////////////////////

//16) write code to remove nested array without using flat method
// let arr = [
//     1,
//     2,
//     3,
//     [4, 5, [5, 6], 7],
//     7,
//     8,
//     9,
//     9,
//     10,
//     [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10],
//   ];
//   const result = arr.flat(Infinity);
//   console.log(result);

// ////////////////////////////////////////////////////////////////

// 17) write a code for palindrome function

// var str = "madam";
// const result = str.split("").reverse().join("") === str;
// console.log(result);

// --------------------------------------------

// function palindrome(str) {
//     let result = str.split("").reverse().join("");
//     if (result === str) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(palindrome("madam"));

// ////////////////////////////////////////////////////////////////

// 18) setTimeout
// setTimeout(bye, 1000);
// console.log("hello");
// function bye() {
//   console.log("Good Buy");
// }

// ////////////////////////////////////////////////////////////////

// 19) Closure function

// function outerFunction(){
//     var a = 10;
//     function innerFunction(){
//         var b = a +20;
//         console.log(a);
//     }
//     innerFunction();
// }
// outerFunction();

// ////////////////////////////////////////////////////////////////

// 20) Add extra key in object
// var arr = [
//   { id: 1, type: "A" },
//   { id: 2, type: "B", content: ["a", "b", "c"] },
//   { id: 3, type: "C", content: [1, 2, 3] },
//   { id: 4, type: "B", content: ["a", "b", "c"] },
// ];

// function xyz(a, b, c) {
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i].id == a && arr[i]["type"] == b) {
//       arr[i].content.push(c);
//     }
//   }
//   console.log(arr);
// }
// xyz(2, "B", "z");
