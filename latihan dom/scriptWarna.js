const tUbahWarna = document.getElementById("tUbahWarna");
// let body = document.getElementById("body");
tUbahWarna.addEventListener("click", () => {
  //   body.style.backgroundColor = "lightblue";
  // document.body.style.backgroundColor = "lightblue";
  document.body.classList.toggle("biru");
});

const tAcakWarna = document.createElement("button");
const textTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ", " + b + ")";
});
sHijau.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ", " + b + ")";
});
sBiru.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ", " + b + ")";
});

document.body.addEventListener("mousemove", (e) => {
  // Posisi Mouse
  //   clinetX
  //   console.log(e.clientX);
  //   ukuran Browser
  //   console.log(window.innerWidth);
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
