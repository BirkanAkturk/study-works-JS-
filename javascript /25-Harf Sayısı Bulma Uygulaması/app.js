///     Harf Sayısı Bulma Uygulaması

let metin= "şuanda istanbulda javascript öğreniyorum.";
let harf= prompt("lütfen bir harf giriniz");

let sonuc= bul(harf);
alert("metinde geçen harf sayısı: "+ sonuc);


function bul(harf){
    let toplam= 0;
    for(let i=0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
    return toplam;
}