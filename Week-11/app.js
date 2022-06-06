/*
1-Dom uzerinden ipput elemanlarina ulasildi.
2-Personrender fonksiypnu ile table olarak varolan person listesindeki ksiler render edildi.
3-Render edilirken ikona onclick uygulandi.
4-Onclick uygulayarak ikona tiklarin h2 basliginin icine parametre olarak atanan id ile uyusan person un 
adi ve soyadi yazdirildi.
5-Checkanswer butonuna uygulanan fonksiyonda toplam soru sayisi 10 oldugunda alert ile oyun bitti diye yazdirildi.
6-addnewperson fonksiyonu ile yeni inputa yeni girilen ksii eklendi.
7-Daha sonra person listesine push edilip tabloya render edildi.
8-generatenumbers fonksiyonu icinde her seferinde iki tane 1 den 10 kadaar random sayi olusturuldu.
9-
*/


const TOPLAM_SORU_SAYISI=4
let soru=0
let puan = 0
let puanElement=document.getElementById("point")
let inputName=document.getElementById("input-name")
let inputSurname=document.getElementById("input-surname")
let userName=document.getElementById("user-name")
let sorusayisi=document.getElementById("soru-sirasi")
let firstinput=document.getElementById('question')
let secondinput=document.getElementById('answer')

function soruSayisi(){
 sorusayisi.innerHTML=`
 Toplam Soru : ${soru}/${TOPLAM_SORU_SAYISI}
 `
}
soruSayisi()

document.getElementById('main').classList.add('yil')
//d-none

//

function personrender(array,index){
    table.innerHTML=array.map(person=>{
        return ` <tr>
        <td>${person.name}</td>
        <td>${person.surname}</td>
        <td>${person.point}</td>
        <td><i class="fas fa-angle-double-right" onclick="username('${person.id}')"></i></td>
      </tr> 
        `
    }).join("")
}
personrender(person)

let selectedPerson;
function username(pId){
    let selectedPerson=person.filter(person=>person.id==pId)
    console.log(selectedPerson)
    selectedPerson[0].point=puan
    personrender(person)
    userName.dataset.id=selectedPerson[0].id
    userName.innerHTML=`
    ${selectedPerson[0].name} ${selectedPerson[0].surname}
    `
   
}

function addNewPerson(){
    
 let newStudent={
      id: Math.random(),
      name: inputName.value,
      surname:inputSurname.value,
      point:0
      
}
    person.push(newStudent)
    personrender(person) 
    inputName.value=""
    inputSurname.value=""
}

let x, y;
  
function generateNumbers() {
    function getRandom() {
        return Math.floor((Math.random() * 10) + 1);
    }
    x = getRandom();
    y = getRandom();
}
function genQuestion() {
    soru++
    soruSayisi()
    generateNumbers();
    firstinput.value = x + " * " + y;
    secondinput.value = '';
    
}

function checkAnswer() {
    
    if(x * y === +document.getElementById('answer').value){
      puan++
    }
    else{
        alert("yanlis")
    }
    if(soru== TOPLAM_SORU_SAYISI){
        soru=1
        gameOverAlert()
        puan=0
        soruSayisi()
        result(puan)
        personrender(person)
        puan=0
    }
    
    result(puan)
    genQuestion()
}

genQuestion()



function result(number){
    puanElement.innerHTML= `toplam puaniniz :`+number
}

function resultPuan(){
    return `
    PUANINIZ : ${puan}
    `
}

  
function result(number){
    puanElement.innerHTML= `toplam puaniniz :`+number
}

function gameOverAlert(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'GAME OVER!!!',
        footer: resultPuan()
      })
}

function starttime(){
    let random=Math.floor(Math.random() * person.length)
    console.log(random)
    let competitor=person[random]
    console.log(competitor)
    competitor[0].point=point+puan
    personrender(person)
}

function time(){
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished Sayfayi yenileyiniz";
        gameOverAlert()
       soru=1
       puan=0
       soruSayisi()
       result(puan)
       selectedPerson[0].point=puan
      } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      }
      timeleft -= 1;
    }, 1000);
}









// const getFromLocalStorage = (pKey) => {
//         return JSON.parse(localStorage.getItem(pKey));
// };
    
// const setToLocalStorage = (pKey, pValue) => {
//         return localStorage.setItem(pKey, JSON.stringify(pValue));
// };
    
//<span class="input-group-text" id="inputGroup-sizing-default">${randomNumber()}*${randomNumber()}</span>


