import { SectionDivider } from '@/components/sectionDivider.js';
import { NavBar } from '@/components/navBar.js';
import { Card } from '@/components/card.js';
import { Header } from '@/components/header.js';
import { Footer } from '@/components/footer.js';
import { PHRASES as motivationPhrases } from '@/data/phrases.js';

export function InfoPage() {
  return `
    ${Header()}
    
    <main>
      ${SectionDivider(motivationPhrases)}
      <article class="app-information-block information-block"></article>
      ${Card()}
      ${Card()}
      ${Card()}
      <article class="app-information-block information-block"></article>
      ${SectionDivider(motivationPhrases)}
      <article class="plugins-information-block information-block"></article>
      ${Card()}
      ${Card()}
      ${Card()}
      <article class="plugins-information-block information-block"></article>
      ${SectionDivider(motivationPhrases)}
    
      <div class='bottom-navigation'>
        ${NavBar()}
        <p class='bottom-navigation__caption'></p>
      </div>
    </main>
    
    ${Footer()}
  `;
}
