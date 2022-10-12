// 1). ==============================================>> forEach Methos
// const getSum = (nums) => {
//   let sum = 0;
//   nums.forEach((item) => (sum = sum + item));
//   console.log(sum);
// };
// console.log(getSum([50, 90, 30, 40]));

// 2). ==============================================>> reduce Methos symple form
// const getSum = (nums) => {
//   return nums.reduce((acc, curr) => acc + curr);
// };
// console.log(getSum([50, 90, 30, 40]));

// 3). ==============================================>> reduce method arrow function (spread operator)
// array to Element
// const result = (marks) => marks.reduce((acc, curr) => acc + curr);
// console.log(result([70, 67, 98, 75]));

// 4). ==============================================>> reduce method with rest operator(element to array)
// const result = (...marks) => marks.reduce((acc, curr) => acc + curr);
// console.log(result(70, 67, 98, 75));

// 5). ==============================================>> Closure run in html
// The variable of outer function is access within inner functionis
// function OuterFunction() {
//   const name = "Jasmin";
//   const city = "Hydrabad";
//   function InnerFunction() {
//     const empid = 228;
//     console.log(name + " is from " + city + " her Employee ID is " + empid);
//   }
//   InnerFunction();
// }

// 5). ==============================================>> Find Big number
// const arr = [11, 7, 8, 23, 5, 10];
// console.log(arr.reduce((acc,curr)=>acc>curr?acc:curr)); =======> if and else

// ===============================================================> reduce Math()
// const result = arr.reduce((acc, curr) => Math.max(acc, curr));
// console.log(result);
// const result1 = arr.reduce((acc, curr) => Math.min(acc, curr));
// console.log(result1);

//=================================================================> to find position of number in array
// const result=arr[arr.length-3]
// console.log(result);
function calculateDaysBetweenDates(begin, end) {}
