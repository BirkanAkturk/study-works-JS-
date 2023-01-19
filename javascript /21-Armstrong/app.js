///    Armstrong

let sayi= prompt("lütfen bir sayı giriniz");
let toplam=0;

for(let i=0; i<sayi.length; i++){
    let rakam=Number(sayi.charAt(i));
    toplam+= rakam**3;

}
if(sayi==toplam){
    alert("sayı armstrongtur");
}
else{
    alert("sayı armstron değildir");
}