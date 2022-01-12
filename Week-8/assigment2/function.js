function stockover(){
    let stock=fishFarm.filter(fish=>fish.stockVolumeInKg>500)
    .map(fish=>fish.fishType)
    return stock 
}

function fishpricebetween(){
    let price=fishFarm.filter(fish=>fish.price >8 &&fish.price >13)
                       .map(fish=> fish.fishType)
        return price
}