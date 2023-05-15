// Rest Parameter

/* function func(a, ...myArgs) {
  // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
  // return myArgs;

  // cara jadiin array
  return Array.from(arguments);
}

console.log(func(1, 2, 3, 4, 5)); */

/* function jumlah(...angka) {
  //   let total = 0;
  //   for (let a of angka) {
  //     total += a;
  //   }
  //   return total;

  return angka.reduce((a, b) => a + b);
}

console.log(jumlah(1, 2, 3, 4, 5)); */

/* // array destructuring
const grup1 = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee'];
const [ketua, wakil, ...anggota] = grup1;
console.log(wakil); */

/* // object destructuring
const team = {
  pm: 'Aku',
  frontEnd1: 'Dia',
  frontEnd2: 'Saya',
  backEnd: 'Anto',
  ux: 'Ahh',
  devOps: 'Ente',
};

const { pm, ...myTeam } = team;
console.log(myTeam); */

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));
console.log(filterBy('string', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));
