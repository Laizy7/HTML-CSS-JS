// DOM Selection

// document.getElementById() ->
const judul = document.getElementById('judul');
judul.style.color = 'red';

// Camel case untuk lebih dari 1 kata
judul.style.backgroundColor = '#ccc';

// Untuk mengubah tulisan
judul.innerHTML = 'Lzyyy';

// document.getElementsByTagName()
const p = document.getElementsByTagName('p');
// Karena HTMLCollections, perlu memberikan index
p[2].style.backgroundColor = 'lightgreen';

// Dengan looping
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightgreen';
}

// Peletakan index di samping
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '30px';

// document.getElementsByClassName() -> Element
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah';

// document.querySelector()
const p4 = document.querySelector('#b p');
p4.style.color = 'salmon';

const li2 = document.querySelector('section#b ul li:nth-child(2');
li2.style.backgroundColor = 'pink';

// document.querySelectorAll() -> NodeList
const p2 = document.querySelectorAll('p');
p2[2].style.backgroundColor = 'lightblue';

// Mengubah node root
const sectionB = document.getElementById('b');
const p3 = sectionB.querySelector('p');
p3.style.backgroundColor = 'orange';

// -> Cara 2
const sectionB2 = document.querySelector('section#b');
const p5 = sectionB2.getElementsByTagName('p')[0];
p5.style.backgroundColor = 'purple';
