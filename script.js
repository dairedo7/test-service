document.addEventListener('DOMContentLoaded', function () {
  let e = 0,
    t = 0,
    n = 0;
  const o = document.querySelectorAll('#carousel .rc-slides-container img'),
    r = document.querySelectorAll('#carousel-mobile .rc-slides-container img'),
    l = document.querySelectorAll('#carousel-footer .rc-slides-container img'),
    c = document.getElementById('prev-btn'),
    d = document.getElementById('next-btn'),
    s = document.getElementById('prev-btn-mobile'),
    m = document.getElementById('next-btn-mobile');
  function i(e, t) {
    o.forEach((t) => {
      t.style.transform = `translateX(-${100 * e}%)`;
    }),
      r.forEach((e) => {
        e.style.transform = `translateX(-${100 * t}%)`;
      });
  }
  function u() {
    (e = (e - 1 + o.length) % o.length), (t = (t - 1 + r.length) % r.length), (n = (n - 1 + l.length) % l.length), i(e, t);
  }
  function a() {
    (e = (e + 1) % o.length), (t = (t + 1) % r.length), i(e, t);
  }
  c.addEventListener('click', u), d.addEventListener('click', a), s.addEventListener('click', u), m.addEventListener('click', a);
  const E = document.getElementById('stepOne'),
    y = document.getElementById('stepTwo'),
    h = document.getElementById('stepThree'),
    b = document.getElementById('stepOneIntro'),
    v = document.getElementById('stepTwoIntro'),
    I = document.getElementById('stepThreeIntro'),
    f = new IntersectionObserver(
      function (e) {
        e.forEach(function (e) {
          e.intersectionRatio > 0.2 ? e.target.play() : e.target.pause();
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    );
  f.observe(b), f.observe(v), f.observe(I), f.observe(E), f.observe(y), f.observe(h);
});
