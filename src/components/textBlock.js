export function TextBlock(firstTextList, secondTextList, thirdTextList) {
  return `
    <article class="info-block">
      <div class="info-block__text-container">
        <p class="info-block__paragraph">${firstTextList[0]}</p>
        <p class="info-block__paragraph">${firstTextList[1]}</p>
        <p class="info-block__paragraph">${firstTextList[3]}</p>
      </div>
      <div class="info-block__text-container">
        <p class="info-block__paragraph">${secondTextList[0]}</p>
        <p class="info-block__paragraph">${secondTextList[1]}</p>
        <p class="info-block__paragraph">${secondTextList[2]}</p>
      </div>
      <div class="info-block__text-container">
        <p class="info-block__paragraph">${thirdTextList[0]}</p>
        <p class="info-block__paragraph">${thirdTextList[1]}</p>
        <p class="info-block__paragraph">${thirdTextList[2]}</p>
      </div>
    </article>
  `;
}
