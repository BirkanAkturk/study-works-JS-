//     Ürün Arama Uygulaması



let urun1 = {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6219
}

let urun2 = {
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15475
}

let urun3 = {
    isim: "LENOVO V15",
    kategori: "Teknoloji",
    fiyat: 10999
}

let urun4 = {
    isim: "ACER Gaming",
    kategori: "Teknoloji",
    fiyat: 13999
}

let urun5 = {
    isim: "LENOVO V14",
    kategori: "Teknoloji",
    fiyat: 4399
}

let urun6 = {
    isim: "LENOVO Ideapad",
    kategori: "Teknoloji",
    fiyat: 4510
}


let urunler= [urun1,urun2,urun3,urun4,urun5,urun6];

let filtreliUrunler= [];

let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz");

getFiltreliUrunler(urunler);
printFiltreliUrunler(filtreliUrunler);

function getFiltreliUrunler(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun);
        }
    });
}

function printFiltreliUrunler(urunler){
    urunler.forEach(function(urun){
        console.log("-----------------------------");
        console.log("|"+urun.isim+"|"+urun.fiyat+"|"+urun.kategori);
        console.log("-----------------------------");
    })
}