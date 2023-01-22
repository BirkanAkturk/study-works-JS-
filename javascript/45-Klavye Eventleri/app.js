//     Klavye Eventleri

// keypress: harf ve saylarda tetiklenen eventtir.

// keydown : hepsinde çalışır.

// keyup : tuştan elini kaldırdığında çalışan eventtir.

// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.type)
// console.log(e.key) // bastığın harfi verir.
// }


// let inputTodo= document.querySelector("#todoName");

// inputTodo.addEventListener("keypress",run);

// function run(e){
//     console.log(e.key)
// }


// let inputTodo= document.querySelector("#todoName");

// inputTodo.addEventListener("keydown",run);

// function run(e){
//     console.log(e.key)
// }

// document.addEventListener("keydown",run);

// function run(e){
//     if(e.keyCode==116){ // F5 tuşunun assis kodu.
//         alert("sayfa yenilemesi engellendi!")
        
//     }
//     console.log(e.key)
//     e.preventDefault(); // varsayılan tuş özelliklerini engeller.
    
// }


// let inputTodo= document.querySelector("#todoName");

// inputTodo.addEventListener("keyup",run);

// function run(e){
//     console.log(e.target.value);
// }

let cardName= document.querySelectorAll(".card-title")[0];
let inputTodo= document.querySelector("#todoName");

inputTodo.addEventListener("keyup",run);

function run(e){
    cardName.textContent=e.target.value
}
    
