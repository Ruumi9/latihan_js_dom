function getPilihanComp() {
  const comp = Math.random();
  if (comp < 0.34) {
    return "gajah";
  }
  if (comp >= 0.34 && comp < 0.67) {
    return "orang";
  }
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) {
    return "SERI!";
  }
  if (player == "gajah") {
    return comp == "orang" ? "MENANG!" : "KALAH!";
  }
  if (player == "orang") {
    return comp == "gajah" ? "KALAH!" : "MENANG!";
  }
  if (player == "semut") {
    return comp == "orang" ? "KALAH" : "MENANG!";
  }
}

function putar() {
  const gambar = ["gajah", "semut", "orang"];
  const imgComp = document.querySelector(".img-komputer");
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    if (i == gambar.length) {
      i = 0;
    }
    imgComp.setAttribute("src", "img/" + gambar[i++] + ".png");
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach((i) => {
  i.addEventListener("click", () => {
    const info = document.querySelector(".info");
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = i.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    putar();

    info.innerHTML = "";
    setTimeout(() => {
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

      info.innerHTML = hasil;
    }, 1000);
  });
});

// pGajah.addEventListener("click", () => {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// pSemut.addEventListener("click", () => {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// pOrang.addEventListener("click", () => {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
