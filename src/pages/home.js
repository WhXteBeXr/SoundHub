import { NewsList } from '@/components/newsList.js';
import { SectionDivider } from '@/components/sectionDivider.js';
import { AppForPreview } from '@/components/appForShowcase.js';
import { Card } from '@/components/card.js';
import { NavBar } from '@/components/navBar.js';
import { PHRASES as motivationPhrases } from '@/data/phrases.js';

const cardBottomPosition = 'apps-showcase__card--bottom-caption';
const cardTopPosition = 'apps-showcase__card--top-caption';
const appCaptionRightPosition = 'app__caption--right-side-caption';
const appCaptionLeftPosition = 'app__caption--left-side-caption';

export function HomePage() {
  console.info(`Вызвана функция ${HomePage.name}`);
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
      ${NewsList()} 
      <section class='apps-cards-showcase'>
        ${Card(cardBottomPosition)}
        ${Card(cardTopPosition)}
        ${Card(cardBottomPosition)}
      </section>
      ${SectionDivider(motivationPhrases)}
      
      <section class='apps-preview-block'>
        ${AppForPreview(appCaptionRightPosition)}
        ${AppForPreview(appCaptionLeftPosition)}
        ${AppForPreview(appCaptionRightPosition)}
      </section>
      
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
