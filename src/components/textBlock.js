export function TextBlock(firstParagraph, secondParagraph, thirdParagraph) {
  return `
    <article class='info-block'>
      <p class='info-block__paragraph'>${firstParagraph}</p>
      <p class='info-block__paragraph'>${secondParagraph}</p>
      <p class='info-block__paragraph'>${thirdParagraph}</p>
    </article>
  `;
}
