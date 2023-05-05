const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  // Ngebuat urutan class pada animasi
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  // Jalankan sebuah function setelah beberapa detik dari klik
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
