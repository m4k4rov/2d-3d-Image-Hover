const marker = document.querySelector('#marker');
const list = document.querySelectorAll('ul li');

function moveIndicator(e) {
  marker.style.left = e.target.offsetLeft + 'px';
  marker.style.width = e.target.offsetWidth + 'px';
};
function moveIndicatorColumn(e) {
  marker.style.top = e.target.offsetTop + 'px';
  marker.style.width = e.target.offsetWidth + 'px';
};
function activeLink () {
  list.forEach(item => {
    item.classList.remove('active');
    this.classList.add('active');
  });
};

list.forEach(item => {
  window.innerWidth<420 ? item.addEventListener('mousemove', moveIndicatorColumn) : item.addEventListener('mousemove', moveIndicator);
  //item.addEventListener('mousemove', moveIndicatorColumn);
  item.addEventListener('mouseover', activeLink);
});


