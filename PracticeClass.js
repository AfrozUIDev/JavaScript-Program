// 1) MAHARASHTRA - number of alphabets
// let a = "MAHARASHTRA";
// let b = a.split("");
// let c = [];
// b.forEach((item) => {
//   c[item] = c[item] ? c[item] + 1 : 1;
// });
// console.log(c);


// 1)
// const arr = ["car", "cat", "bat", "car", "bat", "cat", "bat"];
// const obj = {};
// arr.forEach((item) => (obj[item] = obj[item] ? obj[item] + 1 : 1));
// console.log(obj);

// 2)
// str="I am from Maharashtra in India"
// const result=str.split(" ").reduce((acc,cur)=>acc.length>cur.length?acc:cur)
// console.log(result)

// 3)
// const arr=[[1,3,5],[4,5,7],[2,6,9]]
// //==> [81,25,1]
// const result=arr.map((item, ind)=>item[ind]**2).reverse()
// console.log(result)

// 4)
// for(let i=0; i<10; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000*i)
// }

// 5)
// let arr=[1,2,3,4,5]

// setTimeout(()=>{
//     console.log(1)
// },1000)
// setTimeout(()=>{
//     console.log(2)
// },2000)
// setTimeout(()=>{
//     console.log(3)
// },3000)
// setTimeout(()=>{
//     console.log(4)
// },4000)
// setTimeout(()=>{
//     console.log(5)
// },5000)

// 6)Trace the output

// for (var i = 1; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// for (let i = 1; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// 7) Find Prime Nomber [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

// function prime(n) {
//   if (n != n) {
//     return `${n} is not a prime number`;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return `${n} is not a prime number`;
//     }
//   }
//   return `${n} is a prime number`;
// }
// console.log(prime(4));

// 8) Basic Interview Questions

// let a = "10"
// let b = 2

// console.log(a + b)
// console.log(a - b)
// console.log(a && b)
// console.log(a || b)
// console.log(a | b)
// console.log(a & b)

// 9) Time
// let time = 13;

// if (time >= 7 && time < 12) {
//   console.log("good moring");
// } else if (time > 12 && time <= 18) {
//   console.log("good afternoon");
// } else if (time > 19 && time <= 24) {
//   console.log("good eveing");
// } else {
//   console.log("good night");
// }

// 10) Remove dublicate
// const arr = [2, 5, 1, 2, 5, 2, 3, 7, 2, 9];
// function reverse(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(reverse(arr));

// 11) Second highest number
// const arr = [2, 2, 6, 5, 56, 5, 5, 18, 54, 5, 1, 35, 3, 9, 46, 2];
// let temp;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr[1]);
/////////////////////////////////////////////////////////////////////////////////////

// var string="Tushar Sagar Frank Tedd Mark Rahul Rohan Rohit Amir Akash sanjana"
// var str1=string.toLowerCase()
// // console.log(str1)
// var str=str1.split(" ")
// // console.log(str)
// /* console.log(str) */
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