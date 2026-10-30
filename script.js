// Плавное появление секций по бокам при прокрутке
const items = document.querySelectorAll('.reveal-left, .reveal-right');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

items.forEach(function (item) {
  observer.observe(item);
});

// Форма записи
const form = document.getElementById('enrollForm');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.elements['name'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const course = form.elements['course'].value;
    const message = document.getElementById('formMessage');

    if (name.length < 2 || phone.length < 6) {
      message.style.color = '#dc2626';
      message.textContent = 'Заполните имя и телефон.';
      return;
    }

    message.style.color = '#22c55e';
    message.textContent = name + ', вы записаны на курс «' + course + '». Мы позвоним вам в ближайшее время!';
    form.reset();
  });
}
