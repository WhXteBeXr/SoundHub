export function AppForPreview(
  captionPosition,
  appName,
  appCaption,
  src,
  alt = '',
) {
  if (!src) {
    console.error(`Error while loading card image src: ${src}`);
    src = '#';
  }
  const imageSrc = typeof src === 'string' ? src : src.src;

  return `
    <article class="preview-app preview-app--${captionPosition}">
      <div class="preview-app__image-container">
        <img class="preview-app__image" src="${imageSrc}" alt="${alt}">
        <p class="preview-app__name">${appName}</p>
      </div>
      <p class="preview-app__caption">${appCaption}</p>
    </article>
  `;
}
