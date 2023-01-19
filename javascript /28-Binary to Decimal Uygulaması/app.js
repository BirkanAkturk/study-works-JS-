//    Binary to Decimal Uygulaması

let binary= prompt("lütfen 10luk sisteme çevirmek istediğiniz sayıyı giriniz");

let sonuc= convert(binary);
alert(sonuc);


function convert(binary){
    let decimal=0;
    let ust=0;
    for(let i=(binary.length-1); i>=0; i--){
        decimal+= binary.charAt(i)*Math.pow(2,ust);
        ust++;
    }
    return decimal;
}
