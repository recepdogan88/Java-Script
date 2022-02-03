/*
ANALIZ
1-
a-Stockover fonksiyonu olusturuldu.
b-Filter methodu ile 500 uzeri baliklar filtrelendi.
c-Filtrelenen objeler map ile gezilerek isimler alindi ve consolda yazdirildi.
2-
a-fishpricebetween fonksiyonu olusturuldu.
b-Fiyati 8 den buyuk ve 13 den kucuk olacak sekilde iki kosul ile filter methodu ile filtrelendi.
c-Daha sonra suzulen objeler map ile gezilerek isimler console a yazdirildi.
3-
a-Once winter degiskenine sadece kis sezonunda satilan baliklar filtrelendi.
b-Winter degiskeni icinde icinde ic ice map kullanilarak location dizisi icerisnde 2BE" kosulu yazildi.
c-Bu kosul saglandiginda bir ust donguden balik isimleri alindi ve console a yazdirildi.
5-
a-euAndlowPrive fonksiyonu olusturldu.
b-Icinde avrupa ulkelerinin oldugu eucountries dizisi olusturldu.
c-Filter methodunun icinde includes methodu ile ab ulkerinin oldugu dizi ile karsilarildi.
d-Ikinci kosul olarak filter methoduna 10 fr dan kucuk olanlar methodu yazildi.
e-Filtrelenen objeler map ile gezilerek isimler alindi.
f-Daha sonra sort methodu ile alfabetik siraya dizildi ve ekrana yazdirildi.
6-
a-stockAmount() fonksiyonu icinde reduce methodu ile butun balik stoklari toplandi.
7-
a-reduce((max, min) methodu ile fiyatlar icindeki en yuksek rakam bulundu.
b-Bulunan rakama sahip olan balik ismi yazdirildi.
8-
a-longestDay() fonksiyonu icinde longestDays degiskeni 0 esitlendi.
b-En buyuk rakami bulmak icin ic ice map ile gezilerek her durationInDays longestday degiskeni ile
kiyaslandi.Buyuk olan longestday degiskenine atanarak devam edildi.
c-En son elemana kadar bu kiyaslama yapildi eger degiskenden kucuk ise bir sonraki elemana gecildi.
d-Bu degisken son dongude bize bu objenin en buyuk durationdays iteminin rakamini verdi.
e-Daha sonra bu rakama sahip olan balik ismi yazdirildi.
9-
a-winterandautoumn degiskeni icinde fisharm dizisinin icindeki ojjelerin icindeki season u kis ve sonbahar olanlar
filter methodu ile suzuldu.
b-Daha sonra filtrelenen dizi iciresinde map ile donulerek icinde if kosulu ile romende bolgelerindeki sehirler
yazildi.
c-Daha onceden olusturulan allprices dizisi icine push edildi.
d-allprices dizisi icerisnde reduce methodu ile toplama yapildi.
10-
a-ticinoStockAmount fonksiyonu icerisinde ic ice map ile ticino kantonu kosulunu saglayan balik objeleri
onceden olusturulan ticino dizisi icine push edildi.
b-ticinoStockAmount fonksiyonu ticinostock degiskenine atandi.
c-ticinostock degiskenin iceriseki stok miktari reduce methodu ile toplanarak ticinoStockTotal degiskenine atandi.
d-ticinoStockTotal degiskeni ekrana yazdirildi.
11-
a-zurichSale fonksiyonu icinde map methodu icinde zurich kosulunu saglayan objeler onceden olusturlan bos zurich
dizisi icerisine atildi.
b-summerAndexceptAb fonksiyonu icerisine zurichSale fonksiyonu parametre olarak atandi.
c-Summer ve AB ulkeleri dizisinde olmam kosulu(includes ile) saglayan objeler filtrelenerek sumgram degiskenine atandi.
d-Sumgram dizisinde reduce methodu ile gramajlar toplandi ve dizinin uzunluguna bolunerek ortalama bulundu.

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

console.log("5-Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklar")
console.log(euAndlowPrive())

//6) Toplam balik stoku ne kadardir?

console.log("6) Toplam balik stoku ne kadardir?")
console.log("TOPLAM STOK MIKTARI = "+stockAmount()+" KG")

//7) En pahali olan balik hangisidir?

let mostexpensive = fishFarm.reduce((max, min) => max.price > min.price ? max : min);
console.log("7) En pahali olan balik hangisidir?")
console.log("EN PAHALI BALIK :"+mostexpensive.fishType) 

//8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?

console.log("8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?")
let longestDurationday=longestDay()
 
country()

//9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?

allprices=[]
let winterandautoumn=fishFarm.filter(fish=>fish.season=="Winter"||fish.season=="Autumn")
let romende=winterandautoumn.map(fishes=>{
    fishes.saleLocations.map(fish=>{
        if(fish=="NE"||fish=="GE"||fish=="VD"||fish=="BE"){
           
          return  allprices.push(fishes.price)
        }
    })
    
})

const result=allprices.reduce((sum,item) =>sum+item,0)/allprices.length
console.log("9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?")
console.log("ROMENDEDE SATILAN BALIKLARIN ORTALAMA FIYATI :"+result)

//10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?

let ticinostock=ticinoStockAmount()
let ticinoStockTotal=ticinostock.reduce((sum,item)=>sum+item)
console.log("10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?")
console.log("TICINO STOK MIKTARI : "+ticinoStockTotal)

//11)Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

console.log("11)Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramaji")
console.log(summerAndexceptAb(zurichSale()))

