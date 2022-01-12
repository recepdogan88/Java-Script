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

const fishFarm = [ 
    { 
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 01, 01),    // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway", 
        season: "Winter", 
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 12, 12),    // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan", 
        season: "Winter", 
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    { 
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),    
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom", 
        season: "Spring", 
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    { 
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),   
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland", 
        season: "Summer", 
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    { 
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),    
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France", 
        season: "Autumn", 
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Bluefish", 
        price: 13.70,
        entryDate: new Date(2021, 10, 11),  
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy", 
        season: "Winter", 
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    { 
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),    
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE", 
        season: "Summer", 
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    { 
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),  
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt", 
        season: "Summer", 
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    { 
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),   
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam", 
        season: "Summer", 
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),    
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain", 
        season: "Winter", 
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },  
]

//1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
//console.log(stockover())
 //2)Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?


//console.log(fishpricebetween())

//3)Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?

function bernAndWinter(){
    let winter=fishFarm.filter(fish=>fish.season="Winter")
    return winter     
 }
 
//console.log(bernAndWinter())

let winter=fishFarm.filter(fish=>fish.season=="Winter")
 let bern=winter.map(fishes=>{
    fishes.saleLocations.map(fish=>{
        if(fish==="BE"){
          return  console.log(fishes.fishType)
        }
    })
})

console.log("--------------------------------")
console.log("SON KULLANMA TARIHINE GORE SIRALAMA")

//4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

let sortedObjectbydate=fishFarm.sort(function (a, b) {
    if (a.entryDate > b.entryDate) return -1;
    if (a.entryDate < b.entryDate) return 1;
    return 0;
  });
 

  function sortbyDate(){
  dates=sortedObjectbydate.map(fish=>fish.fishType)
  return dates
}
console.log(sortbyDate())

//5-Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.

function EuropaCountry(){
 let Europacountry=fishFarm.filter
 (fish =>fish.originCountry=="Norway"||fish.originCountry=="Spain"||fish.originCountry=="GREECE"
 ||fish.originCountry=="France"||fish.originCountry=="Italy"||fish.originCountry=="Poland")
  return Europacountry
}
let eucountry=EuropaCountry()

function EuandPrice(){
 let cheapfish=[]
 eucountry.map(item=>{
     if(item.price<10){
      cheapfish.push(item.fishType)
     }
 })
  return cheapfish.sort()
}
console.log(EuandPrice())



//6) Toplam balik stoku ne kadardir?

function stockAmount(){
 const sonuc = fishFarm.reduce((accumulator, fishstock) =>  accumulator + fishstock.stockVolumeInKg ,0) ;
 return sonuc
}

console.log("-------------------")
console.log("TOPLAM STOK MIKTARI = "+stockAmount()+" KG")

//7) En pahali olan balik hangisidir?

let mostexpensive = fishFarm.reduce((max, min) => max.price > min.price ? max : min);
console.log("-------------------")
console.log("EN PAHALI BALIK :"+mostexpensive.fishType) 

//8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?

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
 console.log("---------------")
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
console.log("TICINO STOK MIKTARI"+ticinoStockTotal)

//11)Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

let summerSeason=fishFarm.filter(item=>item.season=="summer")
                         .map(item=>{
                             
                         })



