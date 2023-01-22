// Input Eventleri

// focus : inputa girdiğinde çalışır.
// blur : inputtan çıktığında çalışır.
// copy : inputun içinden kopyalama yapıldığında çalışır.
// paste : inputa yapıştırma yapıldığında çalışır.
// cut :
// select :


const todoName= document.querySelector("#todoName");

todoName.addEventListener("focus", run);
todoName.addEventListener("blur", run);
todoName.addEventListener("copy", run);
todoName.addEventListener("paste", run);
todoName.addEventListener("cut", run);
todoName.addEventListener("select", run);


function run(e){
    console.log(e.type+" ("+e.target.value+")");
    
}