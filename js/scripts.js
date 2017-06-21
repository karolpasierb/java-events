var add = document.getElementById("addElem");
var list = document.getElementById("list");

add.addEventListener("click", function() {
var newElem = document.createElement("li");
var aktualnaLiczba = document.getElementsByTagName("li").length;
var array = ["item", aktualnaLiczba];
newElem.innerHTML = array.join("");
list.appendChild(newElem);
});

