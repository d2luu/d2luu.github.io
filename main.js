document.addEventListener('DOMContentLoaded', function() {
  
  var daysEl = document.querySelector('.days-value');
  var hourEl = document.querySelector('.hour-value');
  var minEl = document.querySelector('.min-value');
  var secondEl = document.querySelector('.second-value');

  var startDate = new Date(2016, 11, 20, 21, 00, 00);
  if (daysEl) daysEl.textContent = Math.floor((new Date() - startDate) / 86400000);
  countTime();

  function countTime() {
    var today = new Date();
    var ms = (today - startDate) % 86400000;
    var h = Math.floor(ms / 3600000);
    var m = Math.floor((ms % 3600000) / 60000);
    var s = Math.floor((ms % 60000) / 1000);
    if (hourEl) hourEl.textContent = h < 10 ? '0' + h : h;
    if (minEl) minEl.textContent = m < 10 ? '0' + m : m;
    if (secondEl) secondEl.textContent = s < 10 ? '0' + s : s;
  }

  setInterval(countTime, 1000);

  // Mobile: tap avatar để mở/đóng popover thông tin Luu / Hoa
  var persons = document.querySelectorAll('.person');
  var avatarWraps = document.querySelectorAll('.person__avatar-wrap');
  function closeAllPopovers() {
    persons.forEach(function(p) { p.classList.remove('person--popover-open'); });
  }
  function isMobile() {
    return window.matchMedia('(max-width: 600px)').matches;
  }
  avatarWraps.forEach(function(wrap) {
    wrap.addEventListener('click', function(e) {
      if (!isMobile()) return;
      e.stopPropagation();
      var person = wrap.closest('.person');
      if (!person) return;
      var isOpen = person.classList.contains('person--popover-open');
      closeAllPopovers();
      if (!isOpen) person.classList.add('person--popover-open');
    });
  });
  document.addEventListener('click', function() {
    if (isMobile()) closeAllPopovers();
  });

}, false);