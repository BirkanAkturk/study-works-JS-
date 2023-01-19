//     Mükemmel Sayı Uygulaması
//    6   -   28    -    496

let sayi= Number(prompt("lütfen bir sayı giriniz"));

let sonuc= kontrolEt(sayi);
alert(sonuc);

function kontrolEt(sayi){
    let toplam= 0;
    for(let i=1; i<=sayi; i++){
        if(sayi%i==0){
            toplam+=i
        }
    }
    if(toplam%sayi==0){
        return "girdiğiniz sayi mükemmeldir";
       
    }
    else{
        return "girdiğiniz sayı mükemmel değidir";
         
    }
}