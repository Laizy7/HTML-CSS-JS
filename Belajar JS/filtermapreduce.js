const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3

// filter
const newAngka = angka.filter((a) => a >= 3);
console.log(newAngka);

// map
// kalikan semua angka dengan 2
const newAngka1 = angka.map((a) => a * 2);
console.log(newAngka1);

// reduce(accumulator, currentValue)
// jumlahkan seluruh elemen pada array
const newAngka2 = angka.reduce((a, b) => a + b);
console.log(newAngka2);

// Method Chaining
// Cari angka > 5
// Kalikan 3
// Jumlahkan
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((a, b) => a + b);
console.log(hasil);
