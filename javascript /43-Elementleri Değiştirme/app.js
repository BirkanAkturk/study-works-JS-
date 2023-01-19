//  Element Değiştirme

const cardBody = document.querySelectorAll(".card-body")[1];

const newText = document.createElement("h2");
newText.textContent="Todo Listesi Yeni";

cardBody.replaceChild(newText,cardBody.childNodes[1]);

console.log(cardBody.childNodes)
