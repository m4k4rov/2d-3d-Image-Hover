const focus = document.querySelector('.focus-box');
focus.addEventListener('mousemove', e => {
    focus.style.setProperty('--x', e.clientX + 'px');
    focus.style.setProperty('--y', e.clientY + 'px');
})
focus.addEventListener('touchmove', e => {
  focus.style.setProperty('--x', e.touches[0].clientX + 'px');
  focus.style.setProperty('--y', e.touches[0].clientY + 'px');
})