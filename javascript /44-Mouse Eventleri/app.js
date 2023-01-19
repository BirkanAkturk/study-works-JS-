//   Mouse Eventleri


// DOMContentLoaded
// load
// click
// dblclick
// mouseover
// mouseout
// mouseenter
// mouseleave

// document.addEventListener("DOMContentLoaded",run);

// function run(){
//     alert("Sayfa Yüklendi");
// }

// window.addEventListener("load",write);

// function write(){
//     console.log("Sayfa Yüklendi");
// }


// const cardTitle = document.querySelectorAll(".card-title")[1];

// cardTitle.addEventListener("dblclick",run);

// function run(e){
//     console.log(e.type);
// }


const todo1= document.querySelectorAll(".list-group-item")[0];

todo1.addEventListener("mouseover",run);

function run(e){
    todo1.style.backgroundColor="red";
    console.log(e.type);

}

todo1.addEventListener("mouseout",turn);

function turn(e){
    todo1.style.backgroundColor="white";
    console.log(e.type);
}