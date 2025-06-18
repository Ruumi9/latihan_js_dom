// InnerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Rahmat</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello World";

// element.style.<propertiesCSS>
// const judul = document.querySelector("#judul");
// judul.style.color = "Lightblue";
// judul.style.backgroundColor = "salmon";

// element.setAttribute
const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("name", "text");
const a = document.querySelector("section#a a");
a.setAttribute("id", "instagram");
// console.log(a.getAttribute("href"));
// a.removeAttribute("href");

const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label");
p2.classList.add("labels");
p2.classList.remove("labels");
p2.classList.toggle("labels");
p2.classList.toggle("labels");
// document.body.style.backgroundColor = "lightblue";
// classList.toggle();
// Jika ada akan dihapus classnya, jika tidak ada akan ditambahkan classnya
document.body.classList.toggle("biru-muda");
document.body.classList.toggle("biru-muda");

// classList.item(angka)
// Menampilkan class dengan urutan ke berapa, diawali dari 0
console.log(p2.classList.item(2));

// classList.contain('namaClass')
// Menampilkan boolean, apakah classnya ada atau tidak
console.log(p2.classList.contains("p2"));

// classList.replace('classSebelum','classSesudah')
// Mengubah class
p2.classList.replace("p2", "p4");
