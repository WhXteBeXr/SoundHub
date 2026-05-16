import { SectionDivider } from '@/components/sectionDivider.js';
import { NavBar } from '@/components/navBar.js';
import { Card } from '@/components/card.js';
import { Header } from '@/components/header.js';
import { Footer } from '@/components/footer.js';
import { TextBlock } from '@/components/textBlock.js';

import { PHRASES as motivationPhrases } from '@/data/phrases.js';
import pepeImage from '@/assets/images/pepe-placeholder.jpg';
import userAvatar from '@/assets/images/Pfp.jpg';

const normalOrder = 'normal-order';
const reverseOrder = 'reversed-order';

export function InfoPage() {
  console.info(`Запрошена страница ${InfoPage.name}`);
  return `
    ${Header(userAvatar)}
    
    <main class="main">
      ${SectionDivider(motivationPhrases)}
      <section class="information-section">
        ${TextBlock('test paragraph 1', 'test paragraph 2', 'test paragraph 3')}
        <div class="cards-block">
          ${Card(normalOrder, 'Random caption for card block', pepeImage)}
          ${Card(reverseOrder, 'Random caption for card block', pepeImage)}
          ${Card(normalOrder, 'Random caption for card block', pepeImage)}
        </div>
        ${TextBlock('test paragraph 1', 'test paragraph 2', 'test paragraph 3')}
      </section>
      
      ${SectionDivider(motivationPhrases)}
      
      <section class="information-section">
        ${TextBlock('test paragraph 1', 'test paragraph 2', 'test paragraph 3')}
        <div class="cards-block">
          ${Card(normalOrder, 'Random caption for card block', pepeImage)}
          ${Card(reverseOrder, 'Random caption for card block', pepeImage)}
          ${Card(normalOrder, 'Random caption for card block', pepeImage)}
        </div>
        ${TextBlock('test paragraph 1', 'test paragraph 2', 'test paragraph 3')}
      </section>
      ${SectionDivider(motivationPhrases)}
    
      <div class='bottom-navigation'>
        ${NavBar()}
        <p class='bottom-navigation__caption'>Meme phrase nav caption</p>
      </div>
    </main>
    
    ${Footer()}
  `;
}
