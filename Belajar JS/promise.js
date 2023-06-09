// Promise (Object penentu keberhasilan/gagalnya sebuah event asynchronous di masa yang akan datang)
// janji (terpenuhi / ingkar)
// states (fulfilled/ rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

/* // Contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve('Janji ditepati!');
  } else {
    reject('Ingkar janji');
  }
});

janji1
  .then((response) => console.log('OK! : ' + response))
  .catch((response) => console.log('Not OK! : ' + response)); */

/* // Contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve('Ditepati setelah beberapa waktu!');
    }, 2000);
  } else {
    setTimeout(() => {
      resolve('Tidak ditepati setelah beberapa waktu!');
    }, 2000);
  }
});

console.log('mulai');

// cara 1
// console.log(janji2.then(() => console.log('janji2')));

// cara 2
janji2
  .finally(() => console.log('Selesai menunggu!'))
  .then((response) => console.log('OK! : ' + response))
  .catch((response) => console.log('Not OK! : ' + response));

console.log('selesai'); */

// Promise.all() (Digunakan untuk menjalankan bbrp Promise sekaligus)
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: 'Avengers',
        sutradara: 'Aa',
        pemeran: 'Bb, CC',
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: 'Batam',
        suhu: 25,
        kondisi: 'Cerah',
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
