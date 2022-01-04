/*
1-Dizileri her seferinde random olarak siralayacak random fonksiyonu olusturuldu.
2-Bu fonksiyon dizilere result fonksiyonu icersinde ve sort methodunun parametresi olarak uygulandi..
3-Result fonksiyonu icersinde diziler fonksiyon her calistiginda random edildikten 
sonra 5 item i yazdirmak icin for dongusu uygulandi.
*/

const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];
const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly",
                     "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"]


function random() {  
    return 0.5 - Math.random();
}  
 

function result(){
    groupList.sort(random);
    personalList.sort(random); 
    for(let i=0;i<5;i++){
     console.log(groupList[i]+" "+personalList[i])
    }
}
 result()