// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function () {
//   card.style.display = 'none';
// });

// DOM Traversal
const close = document.querySelectorAll('.close');

/* for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function (e) {
    // // Mencari parent dari element close
    // close[i].parentElement.style.display = 'none';

    // Lebih berguna untuk mengetahui informasi dari event
    e.target.parentElement.style.display = 'none';
  });
} */

close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
  });
});
