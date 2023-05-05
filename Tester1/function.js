/* // Self-Run Function
(function () {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
})(); */

/* // Arrow Function
let sayHi = (nama) => {
  console.log('Hi ' + nama);
};

sayHi('nama');

let sayNama = (nama, waktu) => {
  console.log(`Selamat ${waktu}, ${nama}`);
};

sayNama('Aa', 'Pagi');

//Implisit Return
let sayHii = (nama) => `Halo, ${nama}`;
console.log('Ren');

let sayHW = () => `Hello World!`;
console.log(sayHW()); */

/* // Contoh Kasus
// let mhs = ['Aa', 'Bb', 'Cc'];

// let jumlahHuruf = mhs.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// Arrow Function
// let jumlahHuruf = mhs.map((nama) => nama.length);
// console.log(jumlahHuruf);

// Balikin dalam bentuk Object
// let jumlahHuruf = mhs.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf); */

// Konsep this pada Arrow Function

/* // Constructor function
// const Mhs = function () {
//   this.nama = 'Aa';
//   this.umur = 33;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const aa = new Mhs(); */

/* // Arrow function
// const Mhs = function () {
//   this.nama = 'Aa';
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const aa = new Mhs(); */

/* // Object Literal
// Note: Arrow function tidak memiliki konsep this
const Mhs1 = {
  nama: 'Aa',
  umur: 33,
  sayHello: function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  },
}; */

/* // Contoh kasus penggunaan Arrow function
const Mhs = function () {
  this.nama = 'Aa';
  this.umur = 33;
  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  };

  // Arrow function digunakan untuk this mengarah ke scope di atas (bukan global)
  setInterval(() => {
    console.log(this.umur++);
  }, 500); // Menambah umur setiap 0.5 detik
};

const aa = new Mhs(); */
