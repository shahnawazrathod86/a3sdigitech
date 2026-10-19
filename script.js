// Mobile menu toggle for the site header.
(function () {
  var header = document.querySelector('header');
  var btn = document.querySelector('.menu-btn');
  if (!header || !btn) return;
  function setOpen(open) {
    header.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function () { setOpen(!header.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  header.querySelectorAll('nav a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
})();
