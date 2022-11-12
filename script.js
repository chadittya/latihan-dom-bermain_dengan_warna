// 1.button ubahwarna
const button = document.querySelector("button");
button.addEventListener("click", function () {
  //   if (document.body.toggleAttribute("class")) {
  //     document.body.setAttribute("class", "bg-biru-muda");
  //   } ini codingku yang cuma 1 baris VVV
  document.body.classList.toggle("bg-biru-muda");
});

// 2. button acak warna
// cara saya untuk random bgcolor
// const btnRandomBGC = document.getElementById("btnRandomBGC");
// btnRandomBGC.addEventListener("click", function () {
//   const randomBGColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomBGColor;
//   console.log(randomBGColor);
// });

const btnRandomBGColor = document.createElement("button");
const txtBtnRandomBGColor = document.createTextNode("Random BG Color");
btnRandomBGColor.appendChild(txtBtnRandomBGColor);
btnRandomBGColor.setAttribute("type", "button");
// document.body.appendChild(btnRandomBGColor); // caraku insert button
button.after(btnRandomBGColor);

btnRandomBGColor.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1); //randomizer warna R pada RGB
  const g = Math.round(Math.random() * 255 + 1); //randomizer warna G pada RGB
  const b = Math.round(Math.random() * 255 + 1); //randomizer warna B pada RGB
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// 3. slider warna
// const sMerah = document.querySelector("input[name=sMerah]");
// const sHijau = document.querySelector("input[name=sHijau]");
// const sBiru = document.querySelector("input[name=sBiru]");
// sMerah.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });
// sHijau.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });
// sBiru.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// });

const SWarna = document.getElementsByClassName("sWarna"); //tangkap semua slider, sebelumnya dikasih class sWarna untuk semua slider
//cek event value masing-masing slider dengan loop
for (let i = 0; i < SWarna.length; i++) {
  SWarna[i].addEventListener("input", function () {
    const r = SWarna[0].value; //menangkap value r
    const g = SWarna[1].value; //menangkap value g
    const b = SWarna[2].value; //menangkap value b
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    // console.log(r, g, b); //cek console rgb
  });
}

// 4. event mouse
document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  // console.log(event.clientX);
  // ukuran browser
  // console.log(window.innerWidth);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
