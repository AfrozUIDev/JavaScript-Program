const arr = [6, 5, 4, 3, 2, 1];
const result = arr.sort((acc, curr) => (acc > curr && acc ? 1 : -1));
console.log(result);
