function show(anything) {
  document.querySelector('.dropdown__textBox').value = anything;
}
document.querySelectorAll('.dropdown__item').forEach(item => {
  item.addEventListener('click',(e) => {
    show(e.target.textContent.trim());
    document.querySelector('.backText').textContent = e.target.dataset.title;
  });
})

const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click',() => {
  dropdown.classList.toggle('active');
})
