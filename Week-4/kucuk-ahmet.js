/*
1-Set the target number randomly.
2-Assign the variable to propm to get the predictions.
4- Since there are four rights, loop 4 times.
5-If the number is small, enter large.
6-If the number is large, it is small.
7- If the number is known, print the number of guesses and the score.
8- When four rights are finished, print out that your right is over and finish the loop.
*/

//variables has been assigned
number = Math.round(Math.random() * 10 + 1);
guess = parseInt(
  prompt("Enter Prediction: ", "Enter 1 number between 1 and 10")
);
//Since there are four rights, loop 4 times
for (let right = 0; right < 4; right++) {
  if (guess != number && right == 3) {
    alert("You have no right. The number kept : " + number);
    break;
  }
  //warns if the guessed number is large, enter a smallerer number
  else if (guess > number) {
    alert("Go back");
  }
  //warns if the guessed number is small, enter a larger number
  else if (guess < number) {
    alert("Further");
  }
  //if the answer is correct,write down the score and what you know in the rhythm and end loop.
  else if (guess == number) {
    alert(
      right + 1 + ".GUESS" + " " + " BINGO" + " " + "Score:" + 100 / (right + 1)
    );
    break;
  }

  guess = parseInt(
    prompt("Enter Prediction: ", "Enter 1 number between 1 and 10")
  );
}

//------SECOND SOLUTİON--------

/* 
for (let i = 0; i < 4; i++) {
  if (tahmin != sayı && i > 2) {
    alert("hakkınız kalmadı");
  } else if (tahmin > sayı) {
    alert("küçük sayı girin");
  } else if (tahmin < sayı) {
    alert("büyük sayı girin");
  } else if (tahmin == sayı) {
    alert(i + 1 + ". hakkınızda bildiniz." + "puanınız:" + 100 / (i + 1));
  }
  tahmin = parseInt(prompt("Tahmini Giriniz: "));
}
var sayi,
  tahmin,
  hak = 1,
  sayi = Math.round(Math.random() * 10 + 1);
do {
  tahmin = parseInt(prompt("Tahmini Giriniz: "));
  if (tahmin < sayi) {
    alert("Daha büyük bir sayı giriniz.");
  }
  if (tahmin > sayi) {
    alert("Daha küçük bir sayı giriniz.");
  }
  if (tahmin == sayi) {
    alert("Tebrikler bildiniz. Tuttuğum sayı: " + sayi);
    alert(hak + ". hakkınızda bildiniz." + "puanınız:" + 100 / hak);
  }
  hak++;
} while (tahmin != sayi && hak < 5);
if (hak > 4) {
  alert("Hakkınız kalmadı. Tutulan sayı : " + sayi);
}
*/
