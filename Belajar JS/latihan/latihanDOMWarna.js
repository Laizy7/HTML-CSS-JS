const tUbahWarna = document.getElementById('tUbahWarna');
// tUbahWarna.onclick = function () {
//   document.body.classList.toggle('biru-muda');
// };
tUbahWarna.addEventListener('click', function () {
  document.body.removeAttribute('style');
  document.body.classList.toggle('biru-muda');
});

// == Ubah warna dengan tombol ==
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
  // -- Mengatur yang diperlukan -- //
  document.body.removeAttribute('class');
  sMerah.value = 128;
  sHijau.value = 128;
  sBiru.value = 128;
  // ------------------------------ //

  // Math.random() mengacak dari 0 -> 1, cara agar mengacak dari 0 -> 255:
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  // metode concat
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  console.log(document.body.style.backgroundColor);
});

// == Ubah warna dengan Scroller ==
const sMerah = document.querySelector('input[name=sMerah]');
// console.log(sMerah.value);
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
  console.log(sMerah.value);
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

/* // == Ubah warna dengan posisi kursor mouse ==
document.body.addEventListener('mousemove', function (e) {
  // Mengetahui posisi mouse
  //   console.log(e.clientX);
  // Mengetahui ukuran browser
  //   console.log(window.innerWidth);

  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerWidth) * 255);
  document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 100)';
}); */
