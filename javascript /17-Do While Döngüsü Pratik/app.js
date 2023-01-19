//-Do While Döngüsü Pratik
//1den 10a kadar saydırma
/*
let sayac=1;

do {
    console.log(sayac);
    sayac++;
} while (sayac<=10);
*/


//1den 20ye kadar olan tek sayıların toplamını bulma

let sayac=1;
let toplam=0;

do {
    if(sayac%2==1){
    console.log(sayac);
    toplam+=sayac;
    }
    
    
   
    sayac++;

} while (sayac<=20);
console.log("toplam: "+toplam);