document.addEventListener('DOMContentLoaded', function() {
  
  var days = document.querySelector('.days span');
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var second = document.querySelector('.second');

  var startDate = new Date(2016, 12, 20, 21, 00, 00);
  days.innerText = Math.floor((new Date - startDate)/86400000);
  countTime();

  function countTime() {
    let today = new Date();
    let ms = (today - startDate) % 86400000;
    let h = Math.floor(ms / 3600000);
    hour.innerText = h >= 10 ? h : `0${h}`;
    let m = Math.floor(ms % 3600000 / 60000);
    min.innerText = m >= 10 ? m : `0${m}`;
    let s = Math.floor(ms % 3600000 % 60000 / 1000);
    second.innerText = s >= 10 ? s : `0${s}`;
  }

  setInterval(countTime, 1000);

}, false);