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
    <article class="app">
      <img class="app__image" src="${imageSrc}" alt="${alt}">
      <p class="app__name">${appName}</p>
      <p class="app__caption ${captionPosition}">${appCaption}</p>
    </article>
  `;
}
