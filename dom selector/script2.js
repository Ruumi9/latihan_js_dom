// DOM Selection
// document.querySelector()
// -> Element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
const li2 = document.querySelector("#b li:nth-child(2)");
li2.style.backgroundColor = "orange";
// const p = document.querySelector("p");
// p.innerHTML = "INI JS";

// document.querySelectorAll()
// -> NodeList
const p = document.querySelectorAll("p");
p[2].style.color = "lightblue";
