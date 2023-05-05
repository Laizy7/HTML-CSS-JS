// 2.1 Execution Context, Hoisting & Scope

// var nama = 'Abc';
// var username = '@abc';

// function cetakURL(username) {
//   //   console.log(arguments);
//   var igURL = 'http://instagram.com/';
//   return igURL + username;
// }

// console.log(cetakURL('@bca'));

// Latihan

function satu() {
  var nama = 'Abc';
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = 'Global';
satu();
dua('Tes');
console.log(nama);
