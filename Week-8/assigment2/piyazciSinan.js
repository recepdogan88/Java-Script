/*
1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
6) Toplam balik stoku ne kadardir?
7) En pahali olan balik hangisidir?
8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
*/


//1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
console.log("1) Stok miktari 500 kg uzerinde olan baliklarin isimleri")
console.log(stockover())
 

//2)Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?

console.log("2)Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar")
console.log(fishpricebetween())

//3)Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?

console.log("3)Sadece Bern'de ve kis sezonu satilan baliklar")

let winter=fishFarm.filter(fish=>fish.season=="Winter")
 let bern=winter.map(fishes=>{
    fishes.saleLocations.map(fish=>{
        if(fish==="BE"){
          return  console.log(fishes.fishType)
        }
    })
})




//4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

let sortedObjectbydate=fishFarm.sort(function (a, b) {
    if (a.entryDate > b.entryDate) return -1;
    if (a.entryDate < b.entryDate) return 1;
    return 0;
  });
 

console.log("4)Son kullanma tarihlerine gore baliklari siralayiniz.") 
console.log(sortbyDate())

//5-Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.


function euAndlowPrive(){
    let eu=fishFarm.filter(item => euCountries.includes(item.originCountry)&&item.price<10)
    .map(item=>item.fishType)
    .sort()
    return eu
}

console.log("5-Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklar")
console.log(euAndlowPrive())



//6) Toplam balik stoku ne kadardir?

function stockAmount(){
 const sonuc = fishFarm.reduce((accumulator, fishstock) =>  accumulator + fishstock.stockVolumeInKg ,0) ;
 return sonuc
}

console.log("6) Toplam balik stoku ne kadardir?")
console.log("TOPLAM STOK MIKTARI = "+stockAmount()+" KG")

//7) En pahali olan balik hangisidir?

let mostexpensive = fishFarm.reduce((max, min) => max.price > min.price ? max : min);
console.log("7) En pahali olan balik hangisidir?")
console.log("EN PAHALI BALIK :"+mostexpensive.fishType) 

//8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
console.log("8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?")
function longestDay() {
    let longestDays = 0;
    
     fishFarm.map(item => {
     if(item.durationInDays > longestDays) {
       longestDays = item.durationInDays;
        }
    });
  
    return longestDays
  }
 let longestDurationday=longestDay()
 
 function country(){
     fishFarm.map(fish =>{
         if(fish.durationInDays==longestDurationday){
             console.log(fish.originCountry)
         }
     })
 }
 country()

 //9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
 allprices=[]
 let winterandautoumn=fishFarm.filter(fish=>fish.season=="Winter"||fish.season=="Autumn")
 let romende=winterandautoumn.map(fishes=>{
    fishes.saleLocations.map(fish=>{
        if(fish=="BS"||fish=="GE"||fish=="VD"){
           
          return  allprices.push(fishes.price)
        }
    })
    
})

const result=allprices.reduce((sum,item) =>sum+item,0)/allprices.length
console.log("9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?")
console.log("ROMENDEDE SATILAN BALIKLARIN ORTALAMA FIYATI :"+result)

//10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
function ticinoStockAmount(){
    let ticino=[]
    fishFarm.map(fish=>{
        fish.saleLocations.map(location =>{
            if(location=="TI"){
               ticino.push(fish.stockVolumeInKg)
            }
        })
    })
    return ticino
}
let ticinostock=ticinoStockAmount()
let ticinoStockTotal=ticinostock.reduce((sum,item)=>sum+item)
console.log("10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?")
console.log("TICINO STOK MIKTARI : "+ticinoStockTotal)

//11)Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

function zurichSale(){
   let zurich=[]
   fishFarm.map(item=>{
        item.saleLocations.map(city=>{
            if(city=="ZH"){
                zurich.push(item)
            }
        })
    })
    return zurich
}
saleZurich=zurichSale()

let sumgramAverage=saleZurich.filter(item=>item.season="summer"&&!euCountries.includes(item.originCountry))
                                .reduce((accumulator,item)=> accumulator+item.itemWeightInGrams,0)

console.log(sumgramAverage)


