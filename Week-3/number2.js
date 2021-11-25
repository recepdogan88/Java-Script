/*
1-Take the three numbers that the user wants to compare.
2-Assign these variables as numbers.
3-Create conditions to sort from largest to smallest.
4-Write the terms of equality.
*/

//Two numbers that the user wanted to compare were received.
let Enteredvalue1 = prompt("Enter a Value", "Please enter the first number");
let Enteredvalue2 = prompt("Enter a Value", "Please enter the second number");
let Enteredvalue3 = prompt("Enter a Value", "Please enter the third number");

//These variables are assigned as numbers.
let x = parseInt(Enteredvalue1);
let y = parseInt(Enteredvalue2);
let z = parseInt(Enteredvalue3);

//Sort from largest to smallest
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

  //Warn if user has not entered a number
} else {
  alert("Please enter number");
}
