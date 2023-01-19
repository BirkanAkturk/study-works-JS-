// ATM Uygulaması

/*
1-Bakiye
2-Para Çekme
3-Para Yatırma
4-Çıkış
 */

 let yeniSatir= "\r\n";
 let bakiye = 1000;

 let metin= "1-Bakiye"+yeniSatir+
"2-Para Çekme"+yeniSatir+
"3-Para Yatırma"+yeniSatir+
"4-Çıkış"+yeniSatir+ "lütfen 1 ile 4 arasında bir değer giriniz ";

let secim= prompt(metin);

switch(secim){
    case "1":
    alert("bakiyeniz: "+ bakiye);
    break;

    case "2":
    let cekilecekTutar= Number(prompt("lütfen çekmek istediğiniz tutarı giriniz"));

    if(cekilecekTutar<=bakiye){
        alert("kalan bakiyeniz: "+(bakiye-cekilecekTutar));
    }
    else{
        alert("çekmek istediğniz tutar bakiyenizden fazla olamaz"+yeniSatir+"bakiyeniz: "+bakiye);
    }
    break;

    case "3":
    let yatirilacakTutar=Number(prompt("lütfen yatırmak istediğiniz tutarı giriniz"));
    alert("güncel bakiyeniz: "+(bakiye+yatirilacakTutar)+yeniSatir+"yatırdığınız tutar: "+yatirilacakTutar);
    break;

    case "4":
    alert("çıkışınız gerçekleşti");
    break;

    default:
    alert("lütfen 1 ile 4 arasında bir değer giriniz");
    break;

}