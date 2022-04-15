let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hDot = document.querySelector('.h-dot');
let mDot = document.querySelector('.m-dot');
let sDot = document.querySelector('.s-dot');

timeUp();
setInterval(() => {
  timeUp();
}, 1000);

function timeUp () {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  hh.style.strokeDashoffset = 502 - ((502 * (h > 11 ? h - 12 : h)) / 12) - (502 / 12 / 60 * m);
  mm.style.strokeDashoffset = 440 - (440 * m) / 60 - (440 / 60 / 60 * s);
  ss.style.strokeDashoffset = 377 - (377 * s) / 60;

  hDot.style.transform = `rotate(${360 / 12 / 60 * m + (h > 11 ? h - 12 : h) * 30}deg)`;
  mDot.style.transform = `rotate(${360 / 60 / 60 * s + m * 6}deg)`;
  sDot.style.transform = `rotate(${s * 6}deg)`;

  h = (h < 10) ? '0' + h : h;
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}