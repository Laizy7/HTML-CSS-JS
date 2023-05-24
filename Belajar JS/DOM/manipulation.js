// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Lzyyy</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Hayuu!</p></div>';

// Menambah atribut yang belum ada pada elemen
const judul1 = document.getElementsByTagName('h1')[0];
judul1.setAttribute('name', 'Atrib');

// *Fungsi Attribute lainnya -> getAttribute, removeAttribute

// element.classList
const p2 = document.querySelector('.p2');
p2.classList.add('label');

// => element.classList.add, remove, toggle, item, contains, replace('', '')

// Buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
//  Simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// Menghapus class <a></a>
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);
