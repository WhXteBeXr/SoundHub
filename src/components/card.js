export function Card(
  captionPosition,
  captionText,
  src,
  alt = 'No image description'
) {
  if (!src) {
    console.error(`Error while loading card image src: ${src}`);
    src = '#';
  }
  const imageSrc = typeof src === 'string' ? src : src.src;

  return `
    <article class="card card--${captionPosition} block-cascade-shadows">
      <img class="card__image" src="${imageSrc}" alt="${alt}">
      <div class="card__caption-container">
        <p class="card__caption">${captionText}</p>
      </div>
    </article>
  `;
}
