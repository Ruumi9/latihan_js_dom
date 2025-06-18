// DOM Manipulation
// Membuat atau menghapus sebuah element
// Buat Element baru dengan document.createElement()
const pBaru = document.createElement("p");
const textUntukPBaru = document.createTextNode("Paagraf Baru");
// Simpan tulisan kedalam paragraf/element dengan appendChild(isiNya)
pBaru.appendChild(textUntukPBaru);
// Simpan PBaru Diakhir Section #a dengan appendChild
// -> Simpan ke akhir dari element parent
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const itemBaru = document.createElement("li");
const isiList = document.createTextNode("Ini Item Baru");
itemBaru.appendChild(isiList);
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
// Isi item baru dengan insertBefore(itemBaru, element setelah item baru)
ul.insertBefore(itemBaru, li2);

// Menghapus element dengan parentNode.removeChild(element)
const link = sectionA.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// Menggati element dengan parentNode.replaceChild(nodeBaru, nodeLama)
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const isiH2 = document.createTextNode("Ini Judul Baru");
h2Baru.appendChild(isiH2);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
itemBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
