/* veri tipleri:

1-string
2-number
3-boolean
4-null
5-undefined
6-object
7-function  */

let isim="birkan";
console.log(isim);
console.log(typeof isim);

let sayi1=10;
console.log(sayi1);
console.log(typeof sayi1);


//booelan: true ve false dan oluşur.

let a=5;
let b=2;
console.log(5<2); //ekranda false yazar.

let c=10;
let d=5;
let sonuç=c+d;
console.log(sonuç<18); // ekranda true yazar.

let n=null; // boş
console.log(n);

// undefined

let u;
console.log(u);

// object

let insan={
    isim:"Birkan",
    soyisim:"Aktürk",
    yas:25,
}
console.log(insan);
console.log(typeof insan);

let rakamlar=[1,2,3,4,5];
console.log(typeof rakamlar);

//function

let func=function(){
    console.log("merhaba");
}
func();
console.log(typeof func);

