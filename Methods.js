// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map((item))            ==> []
// forEach((item))        ==> iterable/outside of []
// filter((item))         ==> []
// filter((item,index))   ==> []
// sort((acc,cur))        ==> []
// reduce((acc,cur))      ==> single value

// 1) find even number from arr=[1,2,3,4,5,6,7,8,9,10]
// const result = arr.filter((item) => item % 2 === 0);
// console.log(result);
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

// 3) Remove Dublicate
// let arr1=[1,2,3,6,5,6,9,8,5,6,4,2,65,4,6,4,65,2,5,]
// const result = [...new Set(arr)];
// const result=arr.filter((item,index)=>arr.indexOf(item)===index) // Remove dublicate
// const result = arr.filter((item, index) => arr.indexOf(item) != index); // Give dublicate
// console.log(result);

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
// const bigNum = (num) => {
//   let result = num.split("");
//   result.unshift("+91");
//   return result.join("");
// };
// console.log(bigNum("7756903575"));

// ----------------------------------------------
// =====>> sum of mobile number

// const sum = (num) => {
//   let result = num.split("");
//   return result.reduce((acc, curr) => Number(acc) + Number(curr));
// };
// console.log(sum("7756903575"));

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
let arr = [
  [1, 2],
  [3, 4],
  [5, [6, [7, 8], 9]],
  [10, 11, 12],
];

// let flattend = [].concat(...arr);
// console.log(flattend);
// console.log(arr,flat(2));

function cunstomFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item) & (depth > 0)) {
      result.push(...cunstomFlat(item, depth - 1));
    } else result.push(item);
  });
  return result;
}
console.log(cunstomFlat(arr, 3));
