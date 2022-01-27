/*
1-Students adinda bos bir dizi olusturuldu.
2-Form elemanlarin submit event uygulandi.
3-addStudents fonksoyonunda name ve surname inputuna yalnizca harf girilmesi icin daha once olusturlan 
letterOnlyCheck fonks. cagrildi.
4-Yas inputu icin onkeypress eventi uygulandi ve inputuna uzerine gelindiginde harf veya baska birsey girilmesi onlendi.
5-Verilerin kontrolunden sonra veriler students objesine konuldu ve students dizisine push edildi.
6-Veriler diziye push edildikten sonra local storage a kaydedildi.
7-Kaydedilen verilerden sonra daha once olusturulan listRender fonksiyonu cagrilirak render edildi.
8-Silme isleminin yapilmasi icin studentdelete fonksiyonu olusturuldu.
9-Onclick ile cagirilan fonksiyonda parametre olarak objenin id si alindi.
10-Bu id ye sahip olan obje local storage dan filter yontemi ile alindi.(FILTER ILE BU OBJE DISINDAKI OBJELER ALINMIS OLDU.)
11-Silinmis objenin cikarilmis haliyle local storage daki dizi render edildi.
*/



let students=[]
let studentList=document.getElementById("table-body")
let firstname=document.querySelector(".input-name")
let lastname=document.querySelector(".input-lastname")
let age=document.querySelectorAll(".input-age")

const formPerson = document.getElementById("form-person");
document.querySelector(".total-students").innerHTML=`${students.length}`
formPerson.addEventListener("submit",addStudents)

function listrender(array){
 studentList.innerHTML=array.map((student,index)=>{
     return `
     <tr>
     <td>${student.name}</td>
     <td>${student.surname}</td>
     <td>${student.age}</td>
     <td><i class="far fa-trash-alt" onclick="studentdelete('${student.id}')"></i></td>
   </tr>
 `
 }).join("")
}

function addStudents(event){
event.preventDefault();
lettersOnlyCheck(firstname)
lettersOnlyCheck(lastname)

let newStudent={
  id: uuidv4(),
  name: event.target["name"].value,
  surname:event.target["surname"].value,
  age:event.target["age"].value
  
}
students.push(newStudent)
setToLocalStorage("students", students);
listrender(getFromLocalStorage("students"));
 
}

function studentdelete(pId){
students = getFromLocalStorage("students");
students = students.filter((person) => person.id !== pId)
setToLocalStorage("students", students);
listrender(getFromLocalStorage("students"));
}


const getFromLocalStorage = (pKey) => {
    return JSON.parse(localStorage.getItem(pKey));
  };

const setToLocalStorage = (pKey, pValue) => {
    return localStorage.setItem(pKey, JSON.stringify(pValue));
  };

listrender(getFromLocalStorage("students"))



const showConfirmAlert = (pId) => {
  Swal.fire({
    title: "Silmek istediginize emin misiniz?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!",
  }).then((result) => {
    if (result.isConfirmed) {
      studentdelete(pId);
      Swal.fire("Person basariyla silindi!", "", "success");
    }
  });
};



//inputlarin validationi yapildi.

function lettersOnlyCheck(name)
{
   var regEx = /^[A-Za-z]+$/;
   if(name.value.match(regEx))
     {
      return true;
     }
   else
     {
     alert("Please enter letters only.");
     return false;
     }
}    

function validateNumber(e) {
  const pattern = /^[0-9]$/;

  return pattern.test(e.key )
}