// Decimal to Binary Uygulaması

let decimal= Number(prompt("Lütfen dönüştürmek istediğiniz sayıyı giriniz"));

let binary= convert(decimal);
alert(reverse(binary));

function convert(decimal){
    let yaz="";
    while(true){
        yaz+= (decimal%2).toString();
        decimal= Math.floor(decimal/2)
        if(decimal==1){
            yaz+=1
            break;
        }
    }
    return yaz;
}

function reverse(binary){
let a="";
    for(let i= (binary.length-1); i>=0; i--){
        a+=binary.charAt(i);
    }
    return a;
}
