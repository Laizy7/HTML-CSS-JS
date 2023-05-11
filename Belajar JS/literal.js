// Template Literals / Template Strings

/* // Embededded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('Halo!')}`);

// const x = 10;
// console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`); */

/* // HTML Fragments
const mhs = {
  nama: 'Aa',
  umur: 33,
  nrp: '001',
  email: 'aa@gmail.com',
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
 */

/* // Tagged Templates
const nama = 'Aa';
const umur = 33;

function coba(strings, ...values) {
  // let result = '';
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ''}`;
  // });

  // return result;

  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ''}`,
    ''
  );
}

const str = coba`Halo, saya ${nama}, umur ${umur} tahun.`;
console.log(str); */

// Highlight
const nama = 'Aa';
const umur = 33;
const email = 'aa@gmail.com';

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ''}</span>`,
    ''
  );
}

const str = highlight`Halo, saya ${nama}, umur ${umur} tahun dan email saya ${email}`;

document.body.innerHTML = str;
