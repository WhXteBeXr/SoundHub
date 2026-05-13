export function AppForPreview(captionPosition) {
  return `
    <article class='app'>
      <img class='app__image' src='' alt=''>
      <p class='app__name'></p>
      <p class='app__caption ${captionPosition}'></p>
    </article>
  `
}