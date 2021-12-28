let entNumber= document.querySelector("#input1")
let btn= document.querySelector("#btn1")
let years=[]
let parag=document.querySelector("#parag")
let hayvan=["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"]
let element =["Metal", "Water", "Wood", "Fire", "Earth"]

let btnClick=btn.addEventListener("click",btnclick);
function btnclick(){
    let getValue=entNumber.value
    if ('^\\d{4}$'){
      alert("Lutfen 4 haneli dogum yilinizi giriniz")
    }else{
    years.push(getValue)
    calculating()
    }
   
    entNumber.value=""
}

let calculating=function calculate(year){
  years.map((year,index)=>{
    parag.innerHTML=""
      if(year%12==0){
           return parag.innerHTML=` ${year} Metal Monkey`
      }if(year%12==1){
           return parag.innerHTML=` ${year} Metal Chock`
      }if(year%12==2){
           return parag.innerHTML=` ${year} Water Dog`
      }if(year%12==3){
        return parag.innerHTML=` ${year} Water Boar`
      }if(year%12==4){
        return parag.innerHTML=` ${year} Wood Rat`
      }if(year%12==5){
        return parag.innerHTML=` ${year} Wood Ox`
      }if(year%12==6){
        return parag.innerHTML=` ${year} Fire Tigger`
      }if(year%12==7){
        return parag.innerHTML=` ${year} Fire Rabbit `
      }if(year%12==8){
        return parag.innerHTML=` ${year} Earth Dragon`
      }if(year%12==9){
        return parag.innerHTML=` ${year} Earth Snake`
      }if(year%12==10){
        return parag.innerHTML=` ${year} Metal Horse`
      }if(year%12==11){
        return parag.innerHTML=` ${year} Metal Sheep`
      }
    })
}

//if(isNaN(getValue)|| getValue==""){
 // alert("lutfen rakama giriniz")
//}