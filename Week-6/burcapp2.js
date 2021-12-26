let entNumber= document.querySelector("#input1")
let btn= document.querySelector("#btn1")
let years=[]

let btnClick=btn.addEventListener("click",btnclick);
function btnclick(){
    let getValue=Number(entNumber.value)
    if(isNaN(getValue)){
       alert("lutfen rakama giriniz")
    }else if (getValue.length<5){
      alert("")
    }
    years.push(getValue)
    console.log(years) 
    calculating()
   
    entNumber.value=""
    
}

let calculating=function calculate(year){
  years.map((year,index)=>{
       if(year%12==0){
           return console.log("Metal"+" "+"Monkey")
       }if(year%12==1){
           return console.log("Metal"+" "+"Cock")
       }if(year%12==2){
           return console.log("Water"+" "+"Dog")
       }if(year%12==3){
        return console.log("Water"+" "+"Boar")
      }if(year%12==4){
        return console.log("Wood"+" "+"RAT")
      }if(year%12==5){
        return console.log("Wood"+" "+"OX")
      }if(year%12==6){
        return console.log("Fire"+" "+"Tigger")
      }if(year%12==7){
        return console.log("Fire"+" "+"Rabbit")
      }if(year%12==8){
        return console.log("Earth"+" "+"Dragon")
      }if(year%12==9){
        return console.log("Earth"+" "+"Snake")
      }if(year%12==10){
        return console.log("Earth"+" "+"Snake")
      }if(year%12==10){
        return console.log("Metal"+" "+"Horse")
      }if(year%12==11){
        return console.log("Metal"+" "+"Sheep")
      }
    })
}

