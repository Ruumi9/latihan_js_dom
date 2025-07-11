// Add event listener
// const card = document.querySelector("div.card");
// const close = document.querySelector(".close");
// close.addEventListener("click", () => {
//   card.style.display = "none";
// });

// DOM Traversal
const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", (e) => {
//     // close[i].parentElement.style.display = "none";
//     // console.log(e.target);a
//     e.target.parentElement.style.display = "none";
//   });
// }

close.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    e.parentElement.style.display = "none";
  });
});

const nama = document.querySelector(".nama");
// nama.parentElement.parentElement;
// nextSibling tidak mengbaikan enter
// console.log(nama.nextSibling);
// nextElementSibling akan mengabaikan enter
// console.log(nama.nextElementSibling);
