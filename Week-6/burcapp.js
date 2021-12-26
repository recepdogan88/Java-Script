let yil=Number(prompt("dogum yilinizi giriniz",""))
let son=yil%10

let hayvan=["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"]
let element =["Metal", "Water", "Wood", "Fire", "Earth"]


function burchesap(){
    if(isNaN(yil)){
        return alert("lutfen sayi giriniz veya bosluk birakmayiniz")
    }if(yil.length>4){
        return alert("lutfen sayi giriniz veya bosluk birakmayiniz")   
    }
if(son==0){
    return  alert(hayvan[0]+" "+element[0])
}
if(son==1){
    return  alert(hayvan[1]+" "+element[0])
}
if(son==2){
    return  alert(hayvan[2]+" "+element[1])
}
if(son==3){
    return  alert(hayvan[3]+" "+element[1])
}if(son==4){
    return  alert(hayvan[4]+" "+element[2])
}if(son==5){
    return  alert(hayvan[5]+" "+element[2])
}if(son==6){
    return  alert(hayvan[6]+" "+element[3])
}if(son==7){
    return  alert(hayvan[7]+" "+element[3])
}if(son==8){
    return  alert(hayvan[8]+" "+element[4])
}if(son==9){
    return  alert(hayvan[9]+" "+element[4])
}
}

burchesap()

//alert("lutfen sayi giriniz veya bosluk birakmayiniz")