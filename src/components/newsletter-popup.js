export function initNewsletterPopup() {
  if (document.getElementById('newsletterPopup')) return;

  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="newsletter-popup" id="newsletterPopup" aria-hidden="true">
        <button class="newsletter-popup__close" type="button" id="newsletterClose" aria-label="Закрыть"></button>

      <p class="newsletter-popup__title">Подписка на обновления</p>
      <p class="newsletter-popup__text">Оставь почту, и я просто проверю формат и выведу email в консоль.</p>

      <form class="newsletter-popup__form" id="newsletterForm" novalidate>
        <input
          class="newsletter-popup__input"
          id="newsletterEmail"
          type="email"
          placeholder="you@example.com"
          autocomplete="email"
          required
        >
        <button class="newsletter-popup__button" type="submit">Отправить</button>
      </form>

      <p class="newsletter-popup__message" id="newsletterMessage" aria-live="polite"></p>
    </div>
  `
  );

  const popup = document.getElementById('newsletterPopup');
  const closeBtn = document.getElementById('newsletterClose');
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const message = document.getElementById('newsletterMessage');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let popupTimeoutId = null;
  let hideTimeoutId = null;

  const showPopup = () => {
    popup.classList.add('is-visible');
    popup.setAttribute('aria-hidden', 'false');
  };

  const hidePopup = () => {
    popup.classList.remove('is-visible');
    popup.setAttribute('aria-hidden', 'true');
  };

  popupTimeoutId = window.setTimeout(showPopup, 7000);

  closeBtn.addEventListener('click', () => {
    if (popupTimeoutId) clearTimeout(popupTimeoutId);
    hidePopup();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
      message.textContent = 'Введите корректный email.';
      message.style.color = '#ff6b6b';
      return;
    }

    console.log('Email:', email);
    message.textContent = 'Спасибо! Email принят.';
    message.style.color = '#7CFF8B';
    form.reset();

    if (hideTimeoutId) clearTimeout(hideTimeoutId);
    hideTimeoutId = window.setTimeout(() => {
      hidePopup();
    }, 1500);
  });
}
