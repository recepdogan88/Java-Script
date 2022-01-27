let main=document.querySelector(".battery")
let bottom=document.querySelector(".bottom")
let middle=document.querySelector(".middle")
let toptop=document.queryCommandValue("top")

let pilSeviyesi=0
function doldur(){
  pilSeviyesi=pilSeviyesi+33
  if(pilSeviyesi>99){
    pilSeviyesi=99
  }
  paint()
}


function paint(){
  if ( pilSeviyesi=== 0) {
    bottom.style.background = "white";
    middle.style.background = "white";
    toptop.style.background = "white";
} 
  else if ( pilSeviyesi ==33) {
    bottom.style.background = "red";
    middle.style.background = "white";
    toptop.style.background = "white";
}
  else if(pilSeviyesi==66){
   middle.style.background = "orange";
   bottom.style.background = "orange";
   main.style.background = "white";
}
  else if(pilSeviyesi==99){
    bottom.style.background = "green";
    middle.style.background = "green";
    main.style.background = "green";
}
}

function bosalt(){
  pilSeviyesi=pilSeviyesi-33
  if(pilSeviyesi<0){
    pilSeviyesi=0
  }
  paint()
}

