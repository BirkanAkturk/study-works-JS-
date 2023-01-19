// let var const


/*
var/let/const  degiskenIsmi = deger

let sayi = 10 ;

*/
// var: her zaman function scope Ram bellekte çok fazla yer kaplar
// let/const: block scope özelliğine sahiptir ( sadece yazıldığı süslü parantez içerisinden erişilebilir)

function selamVer(){
    var selam= "Herkese Selam";
    console.log(selam);

    if(true){
        var a=10;
        let b=12;
        console.log(b);
      
    }
    console.log(a);
}

selamVer();

/* let ve const arasındaki fark

const (constant): değişmez sabit. */