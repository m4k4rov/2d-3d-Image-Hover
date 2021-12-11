document.querySelector('.parallax').addEventListener('mousemove', parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.dataset.speed;
    const x = (window.innerWidth - e.pageX*speed)/100; //шИрина окна - координата по х относительно элемента * speed
    const y = (window.innerHeight - e.pageY*speed)/100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
}
window.addEventListener('deviceorientation', function(e) {
  document.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.dataset.speed;
    const x = (window.innerWidth - e.gamma*speed)/10 - (window.innerWidth/10);
    const y = (window.innerHeight - e.beta*speed)/10 - (window.innerHeight/10);
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
});