// Beden Kitle Endeksi

let kilo = Number(prompt("lütfen kilonuzu giriniz"));
let boy = Number(prompt("lütfen boyunuzu metre cinsinden giriniz"));
let sonuc = kilo/(boy**2);

if(sonuc<18.5){
    console.log("ideal kilonun altında", sonuc);
}
else if(sonuc>=18.5 && sonuc<25){
     console.log("ideal kilonun altında", sonuc);
}
else if(sonuc>=25 && sonuc<30){
    console.log("ideal kiloda", sonuc);
}
else if(sonuc>=30 && sonuc<40){
    console.log("ideal kilonun çok üzerinde (obez)", sonuc);
}
else if(sonuc>=40){
    console.log("ideal kilonun çok üzerinde (morbid obez)", sonuc);
}