/*
1. Parca isimleri büyük harflere cevrilecektir. +++
2. Parca isimlerinden sayilar cikartilacaktir.
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir. +++
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)
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
    const reversed=yedek.reverse
    return reversed
}

console.log(reverse())

let dateday= new Date()
function date2(){
    
    let date1=yedek.map((item,index) => {
        return item+dateday
    })
    return date1
}
console.log(date2())