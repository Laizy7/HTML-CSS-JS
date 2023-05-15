// Spread Operator

/* // memecah iterables menjadi single element
// const mhs = ['Aihhh', 'Aduhhh', 'Ahhss'];
// const dosen = ['Anto', 'Ando', 'Aduh'];
// const org = [...mhs, ...dosen];

// dengan concat
// const org = mhs.concat(dosen);

// penambahan elemen lain di tengah2
// const org = [...mhs, 'Adu', ...dosen];

// console.log(org); */

/* // meng-copy array
const mhs = ['Aihhh', 'Aduhhh', 'Ahhss'];

// -- cara yg salah --
// const mhs1 = mhs;
// mhs1[0] = 'Adu';

// -- cara yg benar --
const mhs1 = [...mhs];
mhs1[0] = 'Adu';

console.log(mhs); */

// const liMhs = document.querySelectorAll('li');

// cara 1
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// cara 2
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const namas = document.querySelector('.namas');
const huruf = [...namas.textContent].map((h) => `<span>${h}</span>`).join('');
namas.innerHTML = huruf;
