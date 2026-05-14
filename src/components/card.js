export function Card(
  captionPosition,
  captionText,
  src,
  alt = 'No image description',
) {
  if (!src) {
    console.error(`Error while loading card image src: ${src}`);
    src = '#';
  }
  const imageSrc = typeof src === 'string' ? src : src.src;

  return `
    <article class="card">
      <img class="card__image ${captionPosition}" src="${imageSrc}" alt="${alt}">
      <p class="card__caption">${captionText}</p>
    </article>
  `;
}
