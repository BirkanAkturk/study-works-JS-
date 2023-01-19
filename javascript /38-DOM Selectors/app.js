//    DOM Selectors




const button = document.getElementById("todoAddButton");
console.log(button);
console.log(button.id);
console.log(button.getAttribute("id"));// üstteki kod ile birebir aynı 

console.log(button.className);
console.log(button.getAttribute("class"));// üstteki kod ile birebir aynı

const classListesi= button.classList; // cllasList bir arraydir. (Dizi)
console.log(classListesi);
console.log(classListesi[3]);
classListesi.forEach(function(className){
    console.log(className);
})


// let buttonText1= button.textContent;
// let buttonText2=  button.innerHTML;//? üstteknden farkı html etiketlerini algılıyor olmasıdır.
// console.log(buttonText1);
// console.log(buttonText2);

// button.innerHTML="<b>Todo Ekleyin</b>";
// button.textContent="<b>Todo Ekleyin</b>";



const todoList= document.getElementsByClassName("list-group-item");
console.log(todoList);

let todoListArray= Array.from(document.getElementsByClassName("list-group-item"));//Diziye çevirme kodu.

todoListArray.forEach(function(todo){
    console.log(todo)
});



const forms= document.getElementsByTagName("form");
console.log(forms);
console.log(forms[0].id);

const formsList= Array.from(document.getElementsByTagName("form"));
formsList.forEach(function(form){
    console.log(form.id)
});

//        querySelector   -   querySelectorAll (class  veya tagi birden fazla kullandın ve hepsini çağırmak istiyorsan bunu kullanmalısın.)


const clearButton= document.querySelector("#todoClearButton"); // css'teki gibi seçilir.
console.log(clearButton);


const liList= document.querySelectorAll(".list-group-item");
console.log(liList);

console.log(liList[2]);

const liListArray= Array.from(document.querySelectorAll("li:nth-child(even)"));// even: çift sayıları etkiler
// odd: tek sayıları etkiler
liListArray.forEach(function(li){
    li.style.backgroundColor="lightgrey"
});






