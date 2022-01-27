function hugeSalary(array){
    salaryfilter=array.filter(item =>item.salary>5000)
                       .map(isim =>isim.firstname+" "+isim.lastname)
    return "GELIRI 5000 DEN FAZLA OLAN AILE RESILERININ ISIM VE SOYISIMLERI: "+salaryfilter
    
 }
 
 function boyNumber(array){
    let bynum=array.filter(child => child.gender=="boy")
                   .map(child => child.name)
    return "ERKEK COCUKLARIN ISIMLERI:"+" "+bynum+"------ERKEK COCUKLARIN SAYISI: "+bynum.length
 }

 function girlNumber(array){
    let bynum=array.filter(child => child.gender=="girl")
                   .map(child => child.name)
    return "KIZ COCUKLARIN ISIMLERI:"+" "+bynum+"------KIZ COCUKLARIN SAYISI: "+bynum.length
 }

 function childrenYears(array){
    chilyears=array.filter(item=> item.age<8)
                   .sort((a, b) => (a.age < b.age) ? 1 : -1)
                   .map(child=> child.name+" yasi :"+child.age)
                   
                  // .map(item =>item.childrens[0].name+" "+item.childrens[0].age)
                   
   return chilyears
}

function childrenOverEightYear(){
    families.map(family => {
        family.childrens.map(child => {
            if (child.age > 8) {
                console.log('cocuk  adi:'+"----"+ child.name+" ----"+ 'anne adi :', family.partner)
    
            }
        });
      });
}