const container = document.querySelector('.container');
const satu = document.querySelector('.satu');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function (e) {
  if (e.target.className == 'thumb') {
    satu.src = e.target.src;
    satu.classList.add('fade');
    // Agar gambar lain yang diklik dapat animasi
    setTimeout(function () {
      satu.classList.remove('fade');
    }, 500);

    thumbs.forEach(function (thumb) {
      //   if (thumb.classList.contains('active')) {
      //     thumb.classList.remove('active');
      //   }

      thumb.className = 'thumb';
    });

    e.target.classList.add('active');
  }
});
