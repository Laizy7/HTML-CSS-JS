/* // 1. HTML Fragments
const mhs = {
  nama: 'Aa',
  umur: 33,
  nrp: '001',
  email: 'aa@gmail.com',
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`; */

/* // 2. Looping
const mhs2 = [
  {
    nama: 'Aa',
    email: 'aa@gmail.com',
  },
  {
    nama: 'Bb',
    email: 'bb@gmail.com',
  },
  {
    nama: 'Cc',
    email: 'cc@gmail.com',
  },
];

const el = `<div class="mhs">
    ${mhs2
      .map(
        (m) =>
          `<ul>
            <li>${m.nama}</li>
            <li>${m.email}</li>
           </ul>`
      )
      .join('')}
</div>`; */

// 3. Conditionals
/* // ternary
const lagu = {
  judul: 'Aih',
  artis: 'Ahh',
  feat: 'Bah',
};

const el = `<div class="lagu">
    <ul>
        <li>${lagu.artis}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
    </ul>
</div>`; */

// 4. Nested
// HTML Fragments bersarang

const mhs = {
  nama: 'Aa',
  semester: 5,
  mataKuliah: ['MTK', 'RPL', 'PBO'],
};

function cetakMatKul(mataKuliah) {
  return `
  <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join('')}
  </ol>`;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester : ${mhs.semester}</span>
  <h4>Mata Kuliah :</h4>
  ${cetakMatKul(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
