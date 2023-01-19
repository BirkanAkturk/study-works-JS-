// Dinamik Element Oluşturma

const cardBody = document.querySelectorAll(".card-body")[1];
const listGroup = document.querySelector(".list-group");

const link= document.createElement("a");
link.id="goBlogWebsite";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://enesbayram.net";
link.target="_blank";
link.innerHTML="Kişisel Websiteme Git";

cardBody.appendChild(link);

console.log(link);


{/* <li class="list-group-item d-flex justify-content-between">Todo 4
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li> */}


const todo= document.createElement("li");
const todoLink= document.createElement("a");
const i = document.createElement("i");

todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML="Todo 5";

todoLink.className="delete-item"
todoLink.href="#";

i.className="fa fa-remove";


todoLink.appendChild(i);
todo.appendChild(todoLink);
listGroup.appendChild(todo);
console.log(listGroup);