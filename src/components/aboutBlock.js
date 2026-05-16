export function AboutBlock(
  textPosition,
  firstParagraph,
  secondParagraph,
  src,
  alt = ''
) {
  if (!src) {
    console.error(`Error while loading card image src: ${src}`);
    src = '#';
  }
  const imageSrc = typeof src === 'string' ? src : src.src;

  return `
    <article class="about-block about-block--${textPosition}">
      <img class="about-block__image" src="${imageSrc}" alt="${alt}">
      <div class="about-block__text-content block-cascade-shadows">
        <p class="about-block__paragraph">${firstParagraph}</p>
        <p class="about-block__paragraph">${secondParagraph}</p>
      </div>
    </article>
  `;
}
