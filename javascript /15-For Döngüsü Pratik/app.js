//      For Döngüsü Pratik


//1den 10a kadar yazdırma
/*
for(let i=1; i<=10; i++){
    console.log(i); 
}
*/

//0dan 10a 2şerli saydırma
/*
for(let i=0; i<=10; i+=2){
    console.log(i); 
}
*/


//teklere birkan çiftlere aktürk yazdırma
/*
for(let i=1; i<=10; i++){
    if(i%2==1){
        console.log(i+" Birkan");
    }
    else{
        console.log(i+" Aktürk");
    }
}
*/

//50den 1e kadar yazdır ve toplamlarını bul yazdır

let toplam=0;

for(let i=50; i>=1; i--){
    toplam+=i;
    console.log(i);
}

console.log("Toplam: "+ toplam);
