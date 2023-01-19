// var  let  const

/*  scope (kapsam)

- Global scope
- Function scope
- Block scope

*/

var degisken=10 // Global scope

console.log(degisken);

function method1(){
    var a=5; // function scope
    console.log(a);

    if(true){
        var b=6; // block scope
        console.log(b);
        
    }

    while(true){

    }

    for(let i=0; i<=0 ; i++){

    }
}