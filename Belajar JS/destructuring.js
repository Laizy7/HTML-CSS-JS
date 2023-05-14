// Destructuring Variable / Assignment

// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Aa'];

// const [salam, satu, dua, nama] = perkenalan;

/* // skipping items
const [salam, , , nama] = perkenalan; */

// console.log(nama);

/* // swap items
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b); */

/* // return value pada function
function coba() {
  return [1, 2];
}

const [a, b] = coba();
console.log(a); */

/* // Rest Parameter
const [a, ...values] = [1, 2, 3, 4, 5];
console.log(a); */

/* // Destructuring Object
const mhs = {
  nama: 'Aa',
  umur: 20,
};

const { nama, umur } = mhs;
console.log(nama); */

/* // Assignment tanpa deklarasi object
({ nama, umur } = { nama: 'Aa', umur: 20 });

console.log(umur); */

/* // Assign ke variabel baru
const mhs = {
  nama: 'Aa',
  umur: 20,
};

// ubah variabel nama -> n, umur -> u
const { nama: n, umur: u } = mhs;
console.log(n); */

/* // Memberikan Default Value
const mhs = {
  nama: 'Aa',
  umur: 20,
};

const { nama, umur, email = 'email@default.com' } = mhs;
console.log(email); */

/* // Memberi nilai default + assign ke variabel baru
const mhs = {
  nama: 'Aa',
  umur: 20,
};

const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
console.log(e); */

/* // Rest Parameter
const mhs = {
  nama: 'Aa',
  umur: 20,
  email: 'aa@gmail.com',
};

const { nama, ...value } = mhs;
console.log(value); */

/* // Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: 'Aa',
  umur: 20,
  email: 'aa@gmail.com',
};

// function getIdMhs(mhs) {
//   return mhs.id;
// }

// cara baru
function getIdMhs({ id, nama }) {
  return id + nama;
}

console.log(getIdMhs(mhs)); */

// Destructuring Function

/* function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}

const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// Jika ada opsi yang tidak ada return [a + b, a - b, a * b];
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
console.log(tambah); */

/* function kalkulasi1(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { bagi, tambah, kali, kurang } = kalkulasi1(6, 2);
console.log(tambah); */

// Destructuring function arguments
const mhs1 = {
  nama: 'Aa',
  umur: 20,
  email: 'aa@gmail.com',
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90,
  },
};

/* // function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama}, umur ${umur} tahun.`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur)); */

/* // == cara lain ==
function cetakMhs(mhs1) {
  return `Halo, nama saya ${mhs1.nama}, umur ${mhs1.umur} tahun.`;
}
console.log(cetakMhs(mhs1)); */

/* // == Jika ada variabel berarray ==
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, umur ${umur} tahun dan UAS saya ${uas}`;
}

console.log(cetakMhs(mhs1)); */
