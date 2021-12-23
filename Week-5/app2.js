/*
1. KEREMAG- will be added to the beginning of each element in the array with the addName function.
2. All letters will be written in uppercase with the upperCase function.
3. With the reverse function, the elements will be reversed.
4. The date will be added with the date2 function. 
5. The numbers in the array will be removed with the removedNumber function.
*/



let yedek =["Kaporta5", "Ak3ü",  "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"]

function addName() {
    let result=yedek.map((item, index) => {
        return "KEREMAG_"+item;
         });
        return result
    }
console.log(addName())

function upperCase(){
    const uppercased = yedek.map(name => name.toUpperCase());
    return uppercased
}
console.log(upperCase())

function reverse(){
   let reversed=yedek.reverse
    return  reversed
}

console.log(yedek.reverse())

let dateday= new Date()
function date2(){
    
    let date1=yedek.map((item,index) => {
        return item+dateday
    })
    return date1
}
console.log(date2())

function removedNumber(){
   let removedNumberyedek=yedek.map(element =>element.replace(/\d+/g, '' ))
   return removedNumberyedek
}
console.log(removedNumber())

