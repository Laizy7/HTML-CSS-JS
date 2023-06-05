/* // DOM Prevent Default & Event Bubbling
const close = document.querySelectorAll('.close');

close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
    // Atasi Event Bubbling
    e.stopPropagation();
  });
});

const cards = document.querySelectorAll('.cards');
cards.forEach(function (card) {
  card.addEventListener('click', function (e) {
    alert('ok');
  });
}); */

// == Cara Efektif ==
const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
  // Jika target yang diklik punya class bernama close
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
});
