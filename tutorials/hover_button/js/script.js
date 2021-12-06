const btn = document.querySelector('.btn');
btn.addEventListener('mousemove', (e)=> {
  let x = e.pageX - btn.getBoundingClientRect().left;
  let y = e.pageY - btn.getBoundingClientRect().top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
})