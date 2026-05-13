import { chooseRandomPhrase } from '@/utils/chooseRandomPhrase.js';

export function SectionDivider(motivationPhrases) {
  return `
    <div class='section-divider'>
      <p class='section-divider__motivation-phrase'>${chooseRandomPhrase(motivationPhrases)}</p>
    </div>
  `;
}
