const array = [16, 9, 100, 25, 36, 4, 81, 49, 64, 121];
console.log("------Sum of numbers------");

let sum = 0;
let len = array.length;

for (let index = 0; index < len; index++) {
  sum = sum + array[index];
}

console.log("Sum = ", sum);

//Average
console.log("-------Average------");
let average = sum / len;
console.log("Average= ", average);

//Square
console.log("-----Square-----");
for (let index = 0; index < len; index++) {
  let sqr = array[index] * array[index];
  console.log("Square of ", array[index], " is = ", sqr);
}

//square root
console.log("-----Square Root-----");

for (let index = 0; index < len; index++) {
  let squareRoot = Math.sqrt(array[index]);
  console.log("Square root of ", array[index], " is ", squareRoot);
}

//finding the largest number

console.log("-----Largest number-----");

let max = array[0];
for (let index = 0; index < len; index++) {
  if (array[index] > max) max = array[index];
}

console.log("The largest number is: ", max);

//finding the largest number

console.log("----Smallest number------");

let min = array[0];
for (let index = 0; index < len; index++) {
  if (array[index] < min) min = array[index];
}

console.log("The smallest number is = ", min);
