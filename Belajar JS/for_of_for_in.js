// == for..of == (digunakan untuk looping object iterable, seperti array, string, Map, Set)

// -- Array --
// const mhs = ['Aa', 'Bb', 'Cc'];

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// -- String --
// const nama = 'Aa';
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ['Aa', 'Bb', 'Cc'];
/* // parameter i adalah index karena parameter ke-2
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }); */

/* // versi for..of
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
} */

/* // Nodelist
const liNama = document.querySelectorAll('.nama');

// liNama.forEach((n) => console.log(n.textContent));

// versi for..of
for (n of liNama) {
  console.log(n.innerHTML);
} */

/* // arguments
function jumlah() {
  let i = 0;
  for (a of arguments) {
    i += a;
  }
  return i;
}

console.log(jumlah(1, 2, 3, 4, 5)); */

// == for..in == (digunakan untuk looping object literal)

const mhs = {
  nama: 'Aa',
  umur: 20,
  nim: '2022',
};

for (m in mhs) {
  //untuk mengambil index
  console.log(m);
  // untuk mengambil value
  console.log(mhs[m]);
}
