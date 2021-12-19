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
    const reversed=yedek.reverse
    return reversed
}

console.log(reverse())