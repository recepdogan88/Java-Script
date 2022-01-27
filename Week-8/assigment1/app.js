const families = [
    {
       firstname: "Ahmet",
       lastname: "Kurnaz",
       partner: "Sevil",
       childrens: [
          {
             name: "Efe",
             age: 8,
             gender: "boy",
          },
          {
             name: "Ece",
             age: 6,
             gender: "girl",
          },
       ],
       salary: 4000,
    },
    {
       firstname: "Kemal",
       lastname: "Can",
       partner: "Elif",
       childrens: [
          {
             name: "Naz",
             age: 11,
             gender: "girl",
          },
          {
             name: "Kadir",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 6000,
    },
    {
       firstname: "Zakir",
       lastname: "Cemal",
       partner: "Nida",
       childrens: [
          {
             name: "Hasan",
             age: 2,
             gender: "boy",
          },
          {
             name: "Hüseyin",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 5500,
    },
    {
       firstname: "Murat",
       lastname: "Demirtas",
       partner: "Simay",
       childrens: [
          {
             name: "Oktay",
             age: 15,
             gender: "boy",
          },
          {
             name: "Gülsüm",
             age: 13,
             gender: "girl",
          },
       ],
       salary: 5300,
    },
    {
       firstname: "Umut",
       lastname: "Ilicak",
       partner: "Ayse",
       childrens: [
          {
             name: "Bilal",
             age: 8,
             gender: "boy",
          },
       ],
       salary: 3000,
    },
    {
       firstname: "Durmus",
       lastname: "Demir",
       partner: "Nur",
       childrens: [
          {
             name: "Meral",
             age: 4,
             gender: "girl",
          },
       ],
       salary: 7000,
    },
  ];


/*
--------1.Assigment: Maasi 5000'in üzerinde olan ailelerin listesi. 
                     Listede aile babasinin isimleri ve soy isimleri isim sirasina göre listelenmeli.

ANALIZ
1-HugeSalary fonksiyonu icerisinde filter ile obje icerisnde gezilip maasi 5000 uzerinde olan aileler filtrelendi.
2-Daha Sonra map filtrelelenen ailelerin icerisinde map ile dolasilip baba isim ve soyisimler yazdirilidi.


*/

console.log(hugeSalary(families))

/*
------2.Assigment:Toplam erkek cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.

ANALIZ
1-Diger assigmentlarda kullanilmak icin(2,3 ve 4.assigment) cocuklarin tum bilgileri map ile daha onceden olusturulmus children
isimli bos arraye atildi.
2-boyNumber fonksiyonu olusturuldu.
2-Children isimli arrayin icerindeki cocuklarin bilgilerinin oldugu objelerde filter ile child.gender="boy" denilerek erkek
cocuklar filtrelendi.
3-Filtrelenen erkek cocuklari map ile gezilerek isimleri alindi.
4-Erkek cocuklari bir diziye atilmis oldugu icin diziadi.length ile erkek cocuk sayisi cikarildi.
*/

let children=[]
 families.map(family => {
   family.childrens.map(child => {
    children.push(child) 
   });
 });

 
 console.log(boyNumber(children))

 /*
 -------3. Toplam kiz cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.

 ANALIZ
 1-1girlNumber fonks. olusturuldu.
 2-Bir onceki assigmentta olusturulan icinde cocuklarin bilgileri olan objelerin atildigi dizide filter ile bu sefer
 kiz cocuklari suzuldu.
 3-Map ile suzulen objelerden cocuk isimleri alindi ve dizi boyutu yazildi.
 */
 
 
 console.log(girlNumber(children))

 /*
--------4-Yasi 8'den kücük cocuklarin sayisi. Cocuklar yaslarina göre büyükten kücüge göre siralanmali.

ANALIZ
1-ChildrenYears fonksiyonu olusturuldu.
2-Ikinci sssigmentta olusturulan children dizinin icinden 8 yasindan kucuk olan cocuklar filtrelendi.
3-Filtrelenen cocuklar sort methodu ile buyukten kucuge siralandi.
4-Daha sonra map ile gezilerek cocuklarin isimleri ve yaslari yazdirildi.
 */


let undereightChildrens=childrenYears(children)
console.log("Yaslarina gore 8 yasindan kucuklerin buyukten kucuge siralanmasi"+undereightChildrens)

/*
--------5-Yasi 8'den büyük cocuklarin annelerinin isimlerinin isim sirasina göre listelenmeli.

ANALIZ
1-ChildrenOverEightYear fonksiyonu olusturuldu.
2-Const=families dizisi icersindeki objelerde map ile gezildi.
3-Map icerisinde tekrar map ile childrens dizinin icerisnide gezildi.
4-If kosulu ile cocuk yasi eger 8 den buyukse cocuk adi anne adi alindi.
5-Fonksiyonun icerisinde console.log a yadir denildi.
 */


childrenOverEightYear()

