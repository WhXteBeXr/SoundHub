export function NewsList(images = []) {
  if (images.length !== 3) {
    console.error(`Error while loading card image src: ${images}`);
  }
  for (let i = 0; i < images.length; i++) {
    images[i] = typeof images[i] === 'string' ? images[i] : images[i].src;
  }

  return `
    <section class="news-list block-contrast-cascade-shadows">
      <div class="news-list__item">
        <img src="${images[0]}" class="news-list__image" alt="">
        <p class="news-list__caption focusable-element">Ableton не купили у нас рекламу, а очень жаль :(</p>
      </div>
      <div class="news-list__item">
        <img src="${images[1]}" class="news-list__image" alt="">
        <p class="news-list__caption">Dolby Atmos делает звук очень классным!</p>
      </div>
      <div class="news-list__item">
        <img src="${images[2]}" class="news-list__image" alt="">
        <p class="news-list__caption">Spotify наш спонсор... Хотелось бы нам сказать, но нет</p>
      </div>
    </section>
  `;
}
