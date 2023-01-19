//Çoklu İf Kullanımı

/*let isim = prompt("lütfen isminizi giriniz");
let tckn = prompt("lütfen tcnizi giriniz");

kontrolEt (isim, tckn);

function kontrolEt(isim, tckn){
    if(isim != "" ){
        if(tckn.length == 11 ){
            console.log("başarılı girildi")
        }
        else{
            console.log("lütfen tcnizi 11 karakterli giriniz")
        }
    }
    else{
        console.log("lütfen isim yerini boş bırakmayınız")
    }
}*/

// farklı bir yol

let isim = prompt("lütfen isminizi giriniz");
let tckn = prompt("lütfen tcnizi giriniz");

kontrolEt (isim, tckn);

function kontrolEt( isim, tckn){
    if(isim == "" ){
        console.log("lütfen isim yerini boş bırakmayınız");
        return;
    }
    if(tckn.length != 11){
            console.log("lütfen tcnizi 11 karakterli giriniz");
            return;
    }
    console.log("başaraılı")
}