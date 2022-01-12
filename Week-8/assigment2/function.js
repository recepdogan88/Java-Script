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
euCountries = [
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden"
]
