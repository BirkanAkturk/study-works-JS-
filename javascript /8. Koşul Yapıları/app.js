// koşul yapıları

/*
let not= 45 ;

if(not>50){
    console.log("Geçtiniz, notunuz: " + not);
}
else{
    console.log("Kaldınız, notunuz: " + not);
} 
*/


/*let yas = Number(prompt("yaşınızı giriniz:")); // Number: string yapıyı number yapısına dönüştürür.
let para = Number(prompt("bütçenizi giriniz:"));
if(yas>=18 && para>=3500){
    alert("ehliyet alabilirsiniz...")
}
else{
    alert("ehliyet alamazsınız...")
}*/

// ortalama hesaplama

// vize1, vize2, final

let vize1 = Number(prompt("vize1 notunuzu giriniz: "));
let vize2 = Number(prompt("vize2 notunuzu giriniz: "));
let final = Number(prompt("final notunuzu giriniz: "));

let ortalama = vize1*0.3 + vize2*0.3 + final*0.4

if(ortalama>=60&&final>=60){
    alert("geçtiniz");
    console.log("geçtiniz", "ortalamanız: " + ortalama) ;

}
else{
    alert("kaldınız");
    console.log("kaldınız", "ortalamanız: " + ortalama) ;
}
