const data = [
  { name: "Rahul", age: 15, city: "Nanded", married: "yes" },
  { name: "Soniya", age: 19, city: "Pune", married: "No" },
  { name: "Raju", age: 16, city: "Kolhapur", married: "No" },
  { name: "Baburao", age: 43, city: "Solapur", married: "yes" },
  { name: "Sham", age: 29, city: "Kolhapur", married: "No" },
  { name: "Raju", age: 29, city: "Mumbai", married: "No" },
  { name: "Ravi", age: 19, city: "Pune", married: "No" },
  { name: "Raju", age: 26, city: "Goa", married: "yes" },
];

// const result=data.filter((item)=>item.age>19)
// const result=data.filter((item)=>item.city.includes("Pune"))
// const result=data.filter((item)=>item.married.includes("yes"))
// const result=data.filter((item)=>item.married==="yes")
// const result=data.filter((item)=>item.city==="Pune")
// const result = data.map((item) => item.name.toUpperCase());

const result=data.filter((item)=>item)
console.log(result);

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
// console.log(result);
