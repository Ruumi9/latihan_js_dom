// DOM SELECTION
// document.getElementById() -> element

const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "black";
judul.innerHTML = "Ini Judul";

// document.getElementsByTagName()
// -> HTML Collection
const p = document.getElementsByTagName("p");
// Cara Biasa
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";
// Looping
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName()
// -> HTML Collection
const p1 = document.getElementsByClassName("p1")[0];
p1.style.fontFamily = "Sans";
p1.innerHTML = "Ini Diubah dari JS";
