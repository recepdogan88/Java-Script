/*
1-Take the two numbers that the user wants to compare.
2-Assign these variables as numbers.
3-Create conditions to sort from largest to smallest.
4-Write the terms of equality.
*/

//Two numbers that the user wanted to compare were received.
let value1 = prompt("Enter a Value", "Please enter the first number");
let value2 = prompt("Enter a Value", "Please enter the second number");
let value3 = prompt("Enter a Value", "Please enter the third number");

//These variables are assigned as numbers.
let x = parseInt(value1);
let y = parseInt(value2);
let z = parseInt(value3);

//Sort from smallest to largest
if (x > y && y > z) {
  alert(x + ">" + y + ">" + z);
  console.log(x + ">" + y + ">" + z);
} else if (z > x && x > y) {
  alert(z + ">" + x + ">" + y);
  console.log(z + ">" + x + ">" + y);
} else if (y > z && z > x) {
  alert(y + ">" + z + ">" + x);
  console.log(y + ">" + z + ">" + x);
} else if (y > x && x > z) {
  alert(y + ">" + x + ">" + z);
  console.log(y + ">" + x + ">" + z);
} else if (x > z && z > y) {
  alert(x + ">" + z + ">" + y);
  console.log(x + ">" + z + ">" + y);
} else if (z > y && y > x) {
  alert(z + ">" + y + ">" + x);
  console.log(z + ">" + y + ">" + x);
}

//Condition that some of the numbers are equal.
else if (x == y && x < z) {
  alert(x + "=" + y + "<" + z);
  console.log(x + "=" + y + "<" + z);
} else if (x == y && z < x) {
  alert(z + "<" + x + "=" + y);
  console.log(z + "<" + x + "=" + y);
} else if (x == z && z < y) {
  alert(x + "=" + z + "<" + y);
  console.log(x + "=" + z + "<" + y);
} else if (x == z && z > y) {
  alert(y + "<" + x + "=" + z);
  console.log(y + "<" + x + "=" + z);
} else if (y == z && z < x) {
  alert(y + "=" + z + "<" + x);
  console.log(y + "=" + z + "<" + x);
} else if (x < y && y == z) {
  alert(x + "<" + y + "=" + z);
} else if (x == y && y == z) {
  alert(x + "=" + y + "=" + z);
  console.log(x + "=" + y + "=" + z);
} else {
  alert("Please enter numbers");
}
