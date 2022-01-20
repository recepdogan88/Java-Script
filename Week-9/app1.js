/*
1-Html ve css ile 3 dive bolunmus batarya olusturuldu.
2-Bolunen uc dive backgroundlarini degistirebilmek icin dom uzerinden ulasildi.
3-Butonlara event listener ile fonksiyon olusturuldu.
4-Doldur butonu icin counter=0 degiskeni atandi ve doldur fonksiyonu icinde her bir butona basildiginda bir arttirildi.
5-Eger sayi 3 u gecerse butonu inacrtive etmesi ve sayisi 0 a esitlemesi yazildi.
6-Counter sayisinin durumuna gore divlere background verecek battery fonksiyonu olusturldu.
7-Olusturulan fonksiyon doldur butonunda cagrildi.
8-Bosalt butonu icin fonksiyon olusturuldu ve doldur butonunda artirilan degisken bu buttonda azaltildi.
9-Bosalt butonuna basilinca azalan counter sayisi eger 0 dan kucuk olursa 0 a esitlenmesi yazildi.
*/

let main=document.querySelector(".battery")
let bottom=document.querySelector(".bottom")
let middle=document.querySelector(".middle")
let toptop=document.queryCommandValue("top")

document.getElementById("btn1").addEventListener("click",doldur)
document.getElementById("btn2").addEventListener("click",bosalt)

let counter=0
function doldur(){
  counter++
  if(counter>3){
      counter=3
      buttonDoldur.disabled = true
      bosaltButton.disabled=false
  }
  
  battery()
}

function bosalt(){
    counter--
    if(counter<0){
      counter=0
     }
    battery()
}

function battery(){
    if ( counter=== 0) {
      bottom.style.background = "white";
      middle.style.background = "white";
      toptop.style.background = "white";
  } 
    else if ( counter==1) {
      bottom.style.background = "red";
      middle.style.background = "white";
      toptop.style.background = "white";
  }
    else if(counter==2){
     middle.style.background = "orange";
     bottom.style.background = "orange";
     main.style.background = "white";
  }
    else if(counter==3){
      bottom.style.background = "green";
      middle.style.background = "green";
      main.style.background = "green";
  }
}
// if(counter2>2){
    //     counter=0
    //     bosaltButton.disabled=true
    //     buttonDoldur.disabled = false
    // }