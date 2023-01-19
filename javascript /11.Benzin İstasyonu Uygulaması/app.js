//Dizel İstasyonu Uygulaması

/*
1-Benzin:22.25
2-Dizel:24.53
3-LPG:11.1

Gelen müşteriden alınacak bilgiler;
1- Yakıt tipi
2- Yüklenecek yakıt litresi
*/

let dizel = 24.53, benzin = 22.25, lpg = 11.1 ;
const yeniSatir = ("\r\n");

let yakitTipi = prompt("1-Benzin"+yeniSatir+"2-Dizel"+yeniSatir+"3-LPG"+yeniSatir+ "lütfen yakıt tipini seçiniz");


if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){
    let yakıtLitresi = Number(prompt("lütfen kaç lire almak istdeğinizi giriniz"));
let bakiye = Number(prompt("lütfen bakiyenizi giriniz"));


if(yakitTipi=="1"){
    //Benzin
    let ödenecek= benzin*yakıtLitresi;
    if(ödenecek<=bakiye){
        alert("yükleme yapıldı" + yeniSatir + "kalan tutarınız: "+(bakiye-ödenecek)+yeniSatir+"tutar: "+ödenecek)
    }
    else if(ödenecek>bakiye){
        alert("yeterli bakiye yok"+yeniSatir+"eksik bakiye: "+(ödenecek-bakiye));
    }
}
else if(yakitTipi=="2"){
    //Dizel
    let ödenecek=dizel*yakıtLitresi;
    if(ödenecek<=bakiye){
        alert("yükleme yapıldı" + yeniSatir + "kalan tutarınız: "+(bakiye-ödenecek)+yeniSatir+"tutar: "+ödenecek)
    }
    else if(ödenecek>bakiye){
        alert("yeterli bakiye yok"+yeniSatir+"eksik bakiye: "+(ödenecek-bakiye));
    }
}
else if(yakitTipi=="3"){
    //LPG
    let ödenecek=lpg*yakıtLitresi;
    if(ödenecek<=bakiye){
        alert("yükleme yapıldı"+yeniSatir+ "kalan tutarınız: "+(bakiye-ödenecek)+yeniSatir+"tutar: "+ödenecek)
    }
    else if(ödenecek>bakiye){
        alert("yeterli bakiye yok"+yeniSatir+"eksik bakiye: "+(ödenecek-bakiye));
    }
}
}else{
    alert("lütfen geçerli bir yakıt tipi seçiniz");}