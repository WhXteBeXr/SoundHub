import { NewsList } from '@/components/newsList.js';
import { SectionDivider } from '@/components/sectionDivider.js';
import { AppForPreview } from '@/components/appForShowcase.js';
import { Card } from '@/components/card.js';
import { NavBar } from '@/components/navBar.js';
import { Header } from '@/components/header.js';
import { Footer } from '@/components/footer.js';

import { PHRASES as motivationPhrases } from '@/data/phrases.js';
import pepeImage from '@/assets/images/pepe-placeholder.jpg';
import userAvatar from '@/assets/images/Pfp.jpg';

const elementsNormalOrder = 'normal-order';
const elementsReverseOrder = 'reversed-order';

export function HomePage() {
  console.info(`Вызвана функция ${HomePage.name}`);
  return `
    ${Header(userAvatar)}
    
    <main class="main">
      ${NewsList()} 
      <section class="cards-block">
        ${Card(elementsNormalOrder, 'Random caption for card block', pepeImage)}
        ${Card(elementsReverseOrder, 'Random caption for card block', pepeImage)}
        ${Card(elementsNormalOrder, 'Random caption for card block', pepeImage)}
      </section>
      ${SectionDivider(motivationPhrases)}
      
      <section class="apps-preview-block">
        ${AppForPreview(elementsNormalOrder, 'Test name', 'Test caption', pepeImage)}
        ${AppForPreview(elementsReverseOrder, 'Test name', 'Test caption', pepeImage)}
        ${AppForPreview(elementsNormalOrder, 'Test name', 'Test caption', pepeImage)}
      </section>
      
      ${SectionDivider(motivationPhrases)}
      
      <div class="bottom-navigation">
        ${NavBar()}
        <p class="bottom-navigation__caption">Meme phrase nav caption</p>
      </div>
    </main>
    
    ${Footer()}
  `;
}
