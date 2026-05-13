export function Card(captionPosition) {
  return `
    <article class='apps-showcase__card'>
      <img class='apps-showcase__image ${captionPosition}' src='' alt=''>
      <p class='card-caption'></p>
    </article>
  `;
}
