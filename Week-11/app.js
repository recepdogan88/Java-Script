let person=[{
    id:1,
    name:"Alper",
    surname:"Sanli",
    point:10
},
{
    id:2,
    name:"Turgut",
    surname:"Erdem",
    point:7
}]

const TOPLAM_SORU_SAYISI=10
let soru=0
let puan = 0
let puanElement=document.getElementById("point")
let inputName=document.getElementById("input-name")
let inputSurname=document.getElementById("input-surname")
let userName=document.getElementById("user-name")
let sorusayisi=document.getElementById("soru-sirasi")


function soruSayisi(){
 sorusayisi.innerHTML=`
 Toplam Soru : ${soru}/${TOPLAM_SORU_SAYISI}
 `
}
soruSayisi()

document.getElementById('murat').classList.add('yil')
//d-none



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

function username(pId){
    let selectedPerson=person.filter(person=>person.id==pId)
    userName.dataset.id=selectedPerson[0].id
    return userName.innerHTML=`
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
    document.getElementById('question').value = x + " * " + y;
    document.getElementById('answer').value = '';
    document.getElementById('total').value = '';
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
        
        soruSayisi()
        let id = userName.dataset.id
        let competitor=person.filter(item=>item.id=id)
        let newpuan=competitor[0].point+puan
        competitor[0].point=newpuan
        personrender(person)
        puan=0
        

    }
    result(puan)
    
}
genQuestion()




  
function result(number){
    puanElement.innerHTML= `toplam puaniniz :`+number
}
















// const getFromLocalStorage = (pKey) => {
//         return JSON.parse(localStorage.getItem(pKey));
// };
    
// const setToLocalStorage = (pKey, pValue) => {
//         return localStorage.setItem(pKey, JSON.stringify(pValue));
// };
    
//<span class="input-group-text" id="inputGroup-sizing-default">${randomNumber()}*${randomNumber()}</span>


