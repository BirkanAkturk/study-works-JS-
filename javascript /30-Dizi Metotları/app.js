//    Dizi Metotları


//     Push Metot : Dizinin sonuna eleman ekler ve dizi uzunluğunu number olarak return eder.
let arabalar = ["bmw","toyota","renault", "mercedes","porsche"];
console.log(arabalar.length);
console.log(arabalar);


let diziUzunluk= arabalar.push("opel");
console.log(diziUzunluk);
console.log(arabalar);
//-------------------------------

//    Unshift Metot : Dizinin başına eleman ekler ve dizi uzunluğunu number olarak return eder.

arabalar.unshift("hundai");
console.log(arabalar);
//-------------------------------


//   Pop Metot : Dizinin sonundaki elemanı siler ve sildiği elemanı return eder.

let a= arabalar.pop();
console.log(arabalar);
console.log(a);
console.log(typeof a);

//--------------------------------


//   Shift Metot : Dizin başındaki elemanı siler ve siidiği elemanı return eder.

let silinenEleman= arabalar.shift();
console.log(arabalar);
console.log(silinenEleman);


//--------------------------------


//  Splice Metot : Diziye eleman ekler ve siler. ilk yere kaçıncı indise ekleme yapılacağı girilir. ikinci yere silinecek eleman sayısı girilir. üçüncü yere eklenecek eleman yazılır. silinen elemanı return eder.

arabalar.splice(2,2,"hundai"); // 2. indisden başlayıp 2 eleman sil ve 2. indise elemanı ekle anlamına gelir.
console.log(arabalar);

//--------------------------------



// toString Metot : Obje olan diziyi string olarak return eder.

let stringArabalar= arabalar.toString();

console.log(stringArabalar);
console.log(typeof arabalar);
console.log(typeof stringArabalar);


//-----------------------------------


//  Join Metot : Dizi elemanları arasına ayırıcı ekler ve string olarak return eder.

stringArabalar= arabalar.join("-");
console.log(stringArabalar);

//-------------------------------



// Concat Metot :  İki diziyi birleştirip return eder eder.

let tofaslar= ["şahin", "doğan", "kartal"];

let birlestirilmisDizi= arabalar.concat(tofaslar);
console.log(birlestirilmisDizi);

//---------------------------



// Slice Metot : Belirtilen indisten başlayıp ayrı kopya bir dizi oluşturur:

let ayriDizi= arabalar.slice(2);
console.log(ayriDizi);


//----------------------------



//   Reverse Metot : Dizinin elemanlarını tersten yazar.

arabalar.reverse();
console.log(arabalar);


//-----------------------------


//   Split Metot : Bir string elemanı belirtilen bir ayırıcı ile ayırır dizi olaral return eder.


let isimler = "Ali,Veli,Ahmet";
let ayır= isimler.split(",");
console.log(ayır);

//-------------------------


//   IndexOf Metot : aratılan elemanın kaçıncı indiste yer aldığını return eder.

let yer=  arabalar.indexOf("bmw");
console.log(yer);

//---------------------------



// Includes Metot: aratılan eleman dizide yer alıyorsa true, yer almıyorsa false olarak return eder (boolean).

let sonuc= arabalar.includes("porsche");
console.log(sonuc);


//--------------------------





