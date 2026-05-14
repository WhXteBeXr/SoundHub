import { NewsList } from '@/components/newsList.js';
import { SectionDivider } from '@/components/sectionDivider.js';
import { AppForPreview } from '@/components/appForShowcase.js';
import { Card } from '@/components/card.js';
import { NavBar } from '@/components/navBar.js';
import { Header } from '@/components/header.js';
import { Footer } from '@/components/footer.js';

import { PHRASES as motivationPhrases } from '@/data/phrases.js';
import pepeImage from '@/assets/images/pepe-placeholder.jpg';

const cardBottomPosition = 'apps-showcase__card--bottom-caption';
const cardTopPosition = 'apps-showcase__card--top-caption';
const appCaptionRightPosition = 'app__caption--right-side-caption';
const appCaptionLeftPosition = 'app__caption--left-side-caption';

export function HomePage() {
  console.info(`Вызвана функция ${HomePage.name}`);
  return `
    ${Header()}
    
    <main>
      ${NewsList()} 
      <section class="app-cards">
        ${Card(cardBottomPosition, 'Random caption for card block', pepeImage)}
        ${Card(cardTopPosition, 'Random caption for card block', pepeImage)}
        ${Card(cardBottomPosition, 'Random caption for card block', pepeImage)}
      </section>
      ${SectionDivider(motivationPhrases)}
      
      <section class="apps-preview-block">
        ${AppForPreview(appCaptionRightPosition, 'Test name', 'Test caption', pepeImage)}
        ${AppForPreview(appCaptionLeftPosition, 'Test name', 'Test caption', pepeImage)}
        ${AppForPreview(appCaptionRightPosition, 'Test name', 'Test caption', pepeImage)}
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
