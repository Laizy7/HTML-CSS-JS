/* // forEach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["A", "B", "C", "D"];

angka.forEach(function (e) {
  console.log(e);
});

nama.forEach(function (e, i) {
  console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
}); */

/* // map (mengembalikan nilai dari array)
var angka = [1, 2, 5, 3, 6, 8, 4];
var angka2 = angka.map(function (e) {
  return e * 2;
});

console.log(angka2.join(" - ")); */

/* // sort (mengurutkan dari yang terendah)
var angka = [1, 2, 20, 10, 5, 3, 6, 8, 4, 7];
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(" - ")); */

// filter (menghasilkan nilai dalam bentuk array)
var angka = [1, 2, 20, 10, 5, 3, 6, 8, 4, 7];
var angka2 = angka
  .filter(function (e) {
    return e > 5;
  })
  .sort(function (a, b) {
    return a - b;
  });
console.log(angka2.join(" - "));

/* // find (menghasilkan 1 nilai pertama pada array) 'tidak dapat menggunakan method join
var angka1 = [1, 2, 5, 3, 10, 8, 4, 7];
var angka3 = angka1.find(function (x) {
  return x > 3;
});
console.log(angka3); */
