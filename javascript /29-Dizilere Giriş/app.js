//    Dizilere Giriş

let numbers=[0,1,2,3,4,5,"Birkan",7,8,9];

console.log(numbers[6]);

numbers[9]="Aktürk";
console.log(numbers[9]);

let isimler=["Birkan","Serkan","Öykü"];
console.log(isimler);
console.log(isimler[2]);


function topla(){
    console.log(15);
}

let personal1={
    name:"Birkan",
    surname:"Aktürk",
    age:24

}

let personal2={
    name:"Öykü",
    surname:"Aktürk",
    age:11

}

let rakamlar = [0,1,2,3,4,5,6,7,8,9];

let personalArray = [personal1,personal2,1,true,rakamlar];
console.log(personalArray[4][5]); // Eğer 4. indisteki dizi ise o dizinin 5. indis elemanını çağır anlamına gelir.




//  FOREACH DÖNGÜSÜ


let names = ["Birkan", "Öykü", "Serkan", "Arzu", "İlkin"];
names.forEach(function (name){
    console.log(name)
});

for(let i=0; i<=names.length-1; i++){
    console.log(names[i])
} // foreach örneğiyle aynı



