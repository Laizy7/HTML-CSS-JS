var penumpang = ['Aa', undefined, 'Bb'];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // jika ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + ' sudah ada di dalam angkot');
      }
      // jika kursi sebelumnya terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan kesalahannya
    console.log('tidak valid karena angkot sedang kosong');
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // hapus penumpang jika sama
      if (namaPenumpang == penumpang[i]) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log('Penumpang tidak dapat ditemukan');
        return penumpang;
      }
    }
  }
};
