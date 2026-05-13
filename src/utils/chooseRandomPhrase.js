export function chooseRandomPhrase(phrases) {
  return phrases[Math.floor(Math.random() * phrases.length)];
}
