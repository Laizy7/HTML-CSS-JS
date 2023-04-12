/* var s = '';
for (var i = 1; i < 10; i++) {
    for (var j = 1; j % i != 0; j++) {
        s += '*';
    }

    s += '\n';
    s += '\t';
}

console.log(s); */

/* const maxOrder = 7; // The highest order of the triangle
for (let order = 1; order <= maxOrder; order += 2) {
    let row = '';
    for (let i = 0; i < (maxOrder - order) / 2; i++) {
        row += ' '; // Add left padding
    }
    for (let j = 0; j < order; j++) {
        row += '*'; // Add asterisks
    }
    console.log(row);
} */

/* // ===== {Program Tebak-Tebakan =====

var ulangi = true;

while (ulangi) {
    var kesempatan = 3;

    while (kesempatan != 0) {
        const comp = Math.floor(Math.random() * 10) + 1;
        var user = prompt('Tebak angka dari 1 - 10' + '\nSisa kesempatan ' + kesempatan);

        var hasil;
        if (user != comp) {
            hasil = (user > comp) ? 'Nilai ketinggian' : 'Nilai kerendahan';
            kesempatan--;

            if (kesempatan == 0) {
                hasil = 'Kamu Gagal! Angkanya adalah ' + comp;
            } else {
                user;
            }
        } else {
            hasil = 'Tebakan benar! Jawabannya adalah ' + comp;
            kesempatan = 0;
        }

        alert(hasil);
    }

    ulangi = confirm('lagi?');
}

alert('ty'); */

/* function tambah() {
    var hasil = 0;

    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1, 2, 3);
console.log(coba); */