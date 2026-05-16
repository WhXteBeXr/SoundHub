export function TextBlock(firstTextList, secondTextList, thirdTextList) {
  return `
    <article class="info-block">
      <div class="info-block__text-container">
        <p class="info-block__paragraph"><span class="highlight-word">${firstTextList[0]}</span>${firstTextList[1]}</p>
        <p class="info-block__paragraph">${firstTextList[2]}</p>
        <p class="info-block__paragraph">${firstTextList[3]}</p>
      </div>
      <div class="info-block__text-container">
        <p class="info-block__paragraph"><span class="highlight-word">${secondTextList[0]}</span>${secondTextList[1]}</p>
        <p class="info-block__paragraph">${secondTextList[1]}</p>
        <p class="info-block__paragraph">${secondTextList[2]}</p>
      </div>
      <div class="info-block__text-container">
        <p class="info-block__paragraph"><span class="highlight-word">${thirdTextList[0]}</span>${thirdTextList[1]}</p>
        <p class="info-block__paragraph">${thirdTextList[1]}</p>
        <p class="info-block__paragraph">${thirdTextList[2]}</p>
      </div>
    </article>
  `;
}
