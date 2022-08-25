const arr = "I Am Arbaz";

const result1 = arr.split(" ").reverse().join(" ");
console.log(result1);
// ==> Arbaz Am I

const result2 = arr.split("").reverse().join("");
console.log(result2);
// ==> zabrA mA I

const result3 = arr.split(" ").reverse().join(" ").split("").reverse().join("");
console.log(result3);
// ==> I mA zabrA

// from direct
function reversestr(str) {
  return str.split("").reverse().join("");
}
console.log(reversestr("Afroz"));


