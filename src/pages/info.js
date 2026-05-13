import { SectionDivider } from '@/components/sectionDivider.js';
import { NavBar } from '@/components/navBar.js';
import { Card } from '@/components/card.js';
import { PHRASES as motivationPhrases } from '@/data/phrases.js';

export function InfoPage() {
  return `
    <header>
      <h1 class=''>SoundHub</h1>
      ${NavBar()}
      <div class='account'>
        <a class='account__image'>
          <img src='' alt=''>
        </a>
      </div>
    </header>
    
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
    </main>
    
    <footer class='footer'>
      <div class='footer__navigation'>
        ${NavBar()}
        <p class='nav-bar__caption'></p>
      </div>
      <div class='footer-block'>
        <div class='footer-content'></div>
      </div>
    </footer>
  `;
}
