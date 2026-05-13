import {NewsList} from '@/components/newsList.js';
import {SectionDivider} from '@/components/sectionDivider.js';
import {AppForPreview} from '@/components/appForShowcase.js';
import {Card} from '@/components/card.js';

const cardBottomPositionClass = 'apps-showcase__card--bottom-caption';
const cardTopPositionClass = 'apps-showcase__card--top-caption';
const appCaptionRightPositionClass = 'app__caption--right-side-caption';
const appCaptionLeftPositionClass = 'app__caption--left-side-caption';

const motivationPhrases = [
  'Test motivation phrase',
  'You\'re the best',
  'You can do it!'
]

function chooseRandomPhrase(phrases) {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export function Main() {
  return `
    <main>
      ${NewsList()} 
      <section class='apps-cards-showcase'>
        ${Card(cardBottomPositionClass)}
        ${Card(cardTopPositionClass)}
        ${Card(cardBottomPositionClass)}
      </section>
      ${SectionDivider(chooseRandomPhrase(motivationPhrases))}
      
      <section class='apps-preview-block'>
        ${AppForPreview(appCaptionRightPositionClass)}
        ${AppForPreview(appCaptionLeftPositionClass)}
        ${AppForPreview(appCaptionRightPositionClass)}
      </section>
      
      ${SectionDivider(chooseRandomPhrase(motivationPhrases))}
    </main>
  `
}