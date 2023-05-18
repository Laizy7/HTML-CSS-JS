// == Callback ==

/* // -- Synchronous Callback --
// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function tampilPesan(callback) {
//   const nama = prompt('Nama: ');
//   callback(nama);
// }

// tampilPesan(halo);

// Cara lain
function tampilPesan(callback) {
  const nama = prompt('Nama: ');
  callback(nama);
}

tampilPesan((nama) => alert(`Halo ${nama}`)); */

// Contoh lain
// const mhs = [
//   { nama: 'Aa', nim: '01', prodi: 'TPL' },
//   { nama: 'Bb', nim: '02', prodi: 'SI' },
//   { nama: 'Cc', nim: '03', prodi: 'TIF' },
// ];

// mhs.forEach((m) => console.log(m.nama));

// -- Asynchronous Callback --
// function getData(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');

// getData(
//   'data/mhs.json',
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );

// console.log('selesai');

// Cara lain dengan JQuery
console.log('mulai');
$.ajax({
  url: 'data/mhs.json',
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log('selesai');
