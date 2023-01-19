///    Parametreli Metot Oluşturma


function yazdir(isim, soyisim){
    console.log(isim+" "+soyisim);
}

yazdir("Birkan", "Aktürk");

yazdir("Öykü", "Aktürk");



function us(sayi, derece){
    console.log(sayi**derece);

}

us(5,3);





let yas = Number(prompt("lütfen yaşınızı giriniz"));

function kontrolEt(yas){
    if(yas>=18){
        alert("Ehliyet alabirsiniz");
    }
    else{
        alert("Ehliyet alamazsınız");
    }
}

kontrolEt(yas);