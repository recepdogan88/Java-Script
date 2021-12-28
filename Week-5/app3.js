let yedek =["Kaporta5", "Ak3ü",  "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"]

let sonuc =yedek
           .map((item)=>item.toUpperCase())
           .map((item)=>item.replace(/[1-9]/g,""))
           .map((item)=>item.trim())
           .map((item)=>item.split("").reverse().join(""))
           .map((item)=>item+"KEREMAG_")
           .map((item)=>item+new Date())

console.log(sonuc)
