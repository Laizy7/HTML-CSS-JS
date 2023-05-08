// Ambil semua elemen video dan jadikan array
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang JS Lanjutan
let jsLanjut = videos
  .filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))
  // Ambil durasi video
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':');
    // Jadikan semuanya ke detik
    return parts[0] * 60 + parts[1] * 1;
  })
  // Jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// Ubah format ke jam menit detik
const jam = Math.floor(jsLanjut / 3600);
const menit = Math.floor((jsLanjut % 3600) / 60);
const detik = jsLanjut % 60;

// Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlVideo = videos.filter((video) =>
  video.textContent.includes('JAVASCRIPT LANJUTAN')
).length;

const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(jsLanjut);
