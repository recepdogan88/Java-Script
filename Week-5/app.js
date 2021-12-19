/*
1-The array containing the animals is created.
2-To find the number of feet is started by saying counter=o.
3-All array elements are visited with the for loop.
4-When the array element is chicken, the counter is given two beats by setting a condition.
5-With another condition, it increases the counter by 4 when it visits all the other animals, if it is a pig, it does not.
6-The last counter variable is printed to the console.
*/

let animals=["domuz","inek","tavuk","inek","koyun","domuz","tavuk","inek"]
let legs=0
for(let i=0;i<animals.length;i++){
   if(animals[i]=="tavuk"){
      legs+=2
   }
   else if(animals[i]!=="domuz"){
      legs+=4
   }
}
console.log(legs)