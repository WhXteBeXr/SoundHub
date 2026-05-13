import { AboutTextBlock } from '@/components/aboutTextBlock.js';
import { SectionDivider } from '@/components/sectionDivider.js';
import { NavBar } from '@/components/navBar.js';
import { PHRASES as motivationPhrases } from '@/data/phrases.js';

const aboutTextBlockRightPosition = 'project-info__text--right-side-caption';
const aboutTextBlockLeftPosition = 'project-info__text--left-side-caption';

export function AboutPage() {
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
      ${AboutTextBlock(aboutTextBlockLeftPosition)}
      ${AboutTextBlock(aboutTextBlockRightPosition)}
      ${AboutTextBlock(aboutTextBlockLeftPosition)}
      ${SectionDivider(motivationPhrases)}
    </main>
    
    <footer class='footer'>
      <div class='footer-block'>
        <div class='footer-content'></div>
      </div>
    </footer>
  `;
}
