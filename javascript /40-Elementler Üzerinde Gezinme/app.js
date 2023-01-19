// Elementler Üzerinde Gezinme


const todo = document.querySelector(".list-group-item")
const todoList = document.querySelector(".list-group");
const card = document.querySelector(".card");

let value;

value=todo;
value=todoList;
value=card;
value=todoList.children
todoList.children[3].textContent="Değişti";
 
// value= Array.from(todoList.children);
// value.forEach(function(todo){
//     console.log(todo.textContent)
// });

// ÇOCUKTAN ANNEYE ERİŞMEK


// value =todo.parentElement.parentElement.parentElement.parentElement;

let ul= todo.parentElement;
let cardBody= ul.parentElement;
let cardElement= cardBody.parentElement;
let row = cardElement.parentElement;
let container= row.parentElement;



// console.log(container);

// kardeşler arasında gezinme

value= todoList.children[0];
value= todoList.children[0].nextElementSibling;

const todoLastChild= document.querySelector(".list-group-item:nth-child(4)");

value= todoLastChild.previousElementSibling;

//

value= row.children[0].children[3].children[0];
value.textContent="Todo Listesi Başlığı Değişti";

value= container.children[0].children[0].children[3].children[2].children[2];

value.textContent="todo3 değişti";
value.style.backgroundColor="purple";
value.style.color="#fff";
value.style.fontWeight="bold";


console.log(value);


