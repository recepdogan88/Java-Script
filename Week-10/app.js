let students=[]
let studentList=document.getElementById("table-body")
let inputValue=document.querySelectorAll(".form-control")

const formPerson = document.getElementById("form-person");
document.querySelector(".total-students").innerHTML=0
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
let newStudent={}

if(event.target["name"].value==""||!/^[a-zA-Z]*$/g.test(event.target["name"].value)){
    alert("...")
}
else{
        newStudent={
        id: uuidv4(),
        name: event.target["name"].value,
        surname:event.target["surname"].value,
        age:event.target["age"].value
        
    }
}

students.push(newStudent);
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
let x=getFromLocalStorage("students")