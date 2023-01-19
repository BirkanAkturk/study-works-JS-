// TYT Puan Hesaplama

/* 
1-Türkçe: 40
2-Matematik: 40
3-Sosyal Bilgiler: 20
4- Fen Bilimleri: 20

100 puanı ÖSYM veriyor.
okul puanı max 60.
 */

 let turkceDogru, turkceYanlis =0;
 let matDogru, matYanlis =0;
 let sosyalDogru, sosyalYanlis =0;
 let fenDogru, fenYanlis =0;
 let okulPuan, puan=0;
 let dogruSayisi, yanlisSayisi=0;

 let yeniSatır = "\r\n";
 let metin = "lütfen yapmak istediğiniz seçimi giriniz:"+yeniSatır+ "1-Puan Hesaplama"+yeniSatır+ "2-Çıkış";

 let secim = prompt(metin);

 switch(secim){
     case "1":
     okulPuan= Number(prompt("okul puanınız"));

     matDogru=Number(prompt("matematik doğru sayınız"));
     matYanlis=Number(prompt("matematik yanlış sayınız"));

     turkceDogru=Number(prompt("Türkçe doğru saınız"));
     turkceYanlis=Number(prompt("Türkçe yanlış saayınız"));

     sosyalDogru=Number(prompt("Sosyal doğru sayınız"));
     sosyalYanlis=Number(prompt("Sosyal yanlış sayınız"));

     fenDogru=Number(prompt("Fen doğru sayınız"));
     fenYanlis=Number(prompt("Fen yanlış sayınız"));

    dogruSayisi= matDogru+turkceDogru+fenDogru+sosyalDogru;
    yanlisSayisi= turkceYanlis+matYanlis+sosyalYanlis+fenYanlis;

    puan= (dogruSayisi-yanlisSayisi/4)*4+okulPuan +100;

    alert("TYT Puanınız: "+puan);
     break;

     case "2":
     alert("sistemden çıkış yapılmıştır...");
     break;

     default:
     alert("lütfen geçerli aralıkta değer giriniz");
     break;
 }