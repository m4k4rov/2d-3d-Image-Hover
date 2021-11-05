const toggle = document.querySelector('.card__toggle');
const section = document.querySelector('section');
if (localStorage.getItem('themeColor')=='dark') section.classList.add('dark');  

toggle.addEventListener('click', ()=>{
  section.classList.toggle('dark');  
  section.classList.contains('dark') ? localStorage.setItem('themeColor', 'dark') : localStorage.setItem('themeColor', 'light');
});