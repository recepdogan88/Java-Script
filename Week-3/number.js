/*
1-Take the two numbers that the user wants to compare.
2-Assign these variables as numbers.
3-As a first condition, make the first number less than the second number.
4-If the condition is met, show it in the browser and console.
5-As the second condition, the first number is greater than the second number.
6-If the condition is met, show it in the browser and console.
7-Write the case where both numbers are equal.
8-When both numbers are equal, show that the two numbers are equal in the browser and console.
9-If the user does not enter a number and presses enter, 'Please enter a number' is warned.
*/

//Two numbers that the user wanted to compare were received.
let EnteredValue1 = prompt("Enter a Value", "Please enter the first number");
let EnteredValue2 = prompt("Enter a Value", "Please enter the second number");

//These variables are assigned as numbers.
let EnteredNumber1 = Number(EnteredValue1);
let EnteredNumber2 = Number(EnteredValue2);

//Write number1<number2 as a first condition
if (EnteredNumber1 < EnteredNumber2) {
  alert(EnteredNumber1 + "<" + EnteredNumber2);
  console.log(EnteredNumber1 + "<" + EnteredNumber2);

  //Write number1>number2 as a second condition
} else if (EnteredNumber1 > EnteredNumber2) {
  alert(EnteredNumber1 + ">" + EnteredNumber2);
  console.log(EnteredNumber1 + ">" + EnteredNumber2);

  //Equality of numbers
} else if (EnteredNumber1 === EnteredNumber2) {
  alert(EnteredNumber1 + "=" + EnteredNumber2);
  console.log(EnteredNumber1 + "=" + EnteredNumber2);

  //Warn if user has not entered a number
} else {
  alert("PLEASE ENTER NUMBER");
}
