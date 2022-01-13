//ASSIGMENT 1
function stockover(){
    let stock=fishFarm.filter(fish=>fish.stockVolumeInKg>500)
                      .map(fish=>fish.fishType)
    return stock 
}

//ASSIGMENT 2
function fishpricebetween(){
    let price=fishFarm.filter(fish=>fish.price >8 &&fish.price >13)
                       .map(fish=> fish.fishType)
        return price
}

//ASSIGMENT 4

function sortbyDate(){
    dates=sortedObjectbydate.map(fish=>fish.fishType)
    return dates
  }

//ASSIGMENT 5
function euAndlowPrive(){
    let eu=fishFarm.filter(item => euCountries.includes(item.originCountry)&&item.price<10)
                   .map(item=>item.fishType)
                   .sort()
    return eu
}

//ASSIGMENT 6

function stockAmount(){
    const sonuc = fishFarm.reduce((accumulator, fishstock) =>  accumulator + fishstock.stockVolumeInKg ,0) ;
    return sonuc
}

//ASSIGMENT 8

function longestDay() {
    let longestDays = 0;
    
     fishFarm.map(item => {
     if(item.durationInDays > longestDays) {
       longestDays = item.durationInDays;
        }
    });
  
    return longestDays
}

function country(){
    fishFarm.map(fish =>{
        if(fish.durationInDays==longestDurationday){
            console.log(fish.originCountry)
        }
    })
}

//ASSIGMENT 10

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

//ASSIGMENT 11

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

function summerAndexceptAb(pArray){
    let sumgram=pArray.filter(item=>item.season="summer"&&!euCountries.includes(item.originCountry))
    let average= sumgram.reduce((accumulator,item)=> accumulator+item.itemWeightInGrams,0) /sumgram.length  

    return average
}