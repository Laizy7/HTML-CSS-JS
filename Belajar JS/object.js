// Membuat Object

/* // Object Literal
var mhs = {
  nama: 'Aa',
  nrp: '001',
  email: 'aa@gmail.com',
  jurusan: 'IT',
}; */

/* // Function Declaration
function buatObjectMhs(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMhs('Aaa', '003', 'aaa@gmail.com', 'TI'); */

/* // Constructor
function Mhs(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mhs('A4', '004', 'a4@gmail.com', 'TIL'); */

// ============ Versi Terbaru ============

/* // Object Literal
let mhs1 = {
  nama: 'Aa',
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

let mhs2 = {
  nama: 'Bb',
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
}; */

/* // Function Declaration
function Mhs(nama, energi) {
  let mhs = {};
  mhs.nama = nama;
  mhs.energi = energi;

  mhs.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  mhs.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };

  return mhs;
}

let aa = Mhs('Aa', 10);
let bb = Mhs('Bb', 15); */

/* // Constructor Function
function Mhs(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };
}

let aa = new Mhs('Aa', 10); */

/* // Object.create Function
const methodMhs = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

function Mhs(nama, energi) {
  let mhs = Object.create(methodMhs);
  mhs.nama = nama;
  mhs.energi = energi;

  return mhs;
}

let aa = Mhs('Aa', 10);
let bb = Mhs('Bb', 15); */

// =========== Prototype ===========
// function Mhs(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mhs.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`Halo ${this.nama}, selamat makan!`);
// };

// Mhs.prototype.main = function (jam) {
//   this.energi -= jam;
//   console.log(`Halo ${this.nama}, selamat bermain!`);
// };

// Mhs.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   console.log(`Halo ${this.nama}, selamat tidur!`);
// };

// let aa = new Mhs('Aa', 10);

// Versi Class
class Mhs {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  }

  main(jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  }

  tidur(jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  }
}

let aa = new Mhs('Aa', 10);
