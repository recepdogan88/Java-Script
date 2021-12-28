/*
1-Propmt ile dogum yili alindi.
2-Burchesap fonksiyonu tanimlandi.
3-Girilen deger sayi degilse uyari yazildi.
4-Girilen deger 4 rakamdan fazla ise uyari yazildi.
5-IF kosullari ile tarihe gore burclar yazildi.
6-Yazilan fonksiyon cagrildi.
*/

let yil=prompt("dogum yilinizi giriniz","DOGUM YILINIZI GIRINIZ")
let hayvan=["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"]
let element =["Metal", "Water", "Wood", "Fire", "Earth"]


function burchesap(yil){
if(isNaN(yil)){
        return alert("lutfen sayi giriniz veya bosluk birakmayiniz")
}if(yil.length>4){
        return alert("lutfen sayi giriniz veya bosluk birakmayiniz")   
}
if(yil%12==0){
    return  alert(yil+" "+hayvan[0]+" "+element[0])
}
if(yil%12==1){
    return  alert(yil+" "+hayvan[1]+" "+element[0])
}
if(yil%12==2){
    return  alert(yil+" "+hayvan[2]+" "+element[1])
}
if(yil%12==3){
    return  alert(yil+" "+hayvan[3]+" "+element[1])
}
if(yil%12==4){
    return  alert(yil+" "+hayvan[4]+" "+element[2])
}
if(yil%12==5){
    return  alert(yil+" "+hayvan[5]+" "+element[2])
}
if(yil%12==6){
    return  alert(yil+" "+hayvan[6]+" "+element[3])
}
if(yil%12==7){
    return  alert(yil+" "+hayvan[7]+" "+element[3])
}
if(yil%12==8){
    return  alert(yil+" "+hayvan[8]+" "+element[4])
}
if(yil%12==9){
    return  alert(yil+" "+hayvan[9]+" "+element[4])
}
if(yil%12==10){
    return  alert(yil+" "+hayvan[10]+" "+element[0])
}
if(yil%12==11){
    return  alert(yil+" "+hayvan[11]+" "+element[0])
}
}

burchesap(yil)
