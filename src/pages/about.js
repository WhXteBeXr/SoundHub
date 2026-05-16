import { AboutBlock } from '@/components/aboutBlock.js';
import { SectionDivider } from '@/components/sectionDivider.js';
import { Footer } from '@/components/footer.js';
import { Header } from '@/components/header.js';

import { MotivationPhrases as motivationPhrases } from '@/data/motivationPhrases.js';
import { ABOUTPARAGRAPHS as aboutParagraphs} from '@/data/aboutParagraphs.js';
import pepeImage from '@/assets/images/pepe-placeholder.jpg';
import userAvatar from '@/assets/images/Pfp.jpg';

const normalOrder = 'normal-order';
const reverseOrder = 'reversed-order';

export function AboutPage() {
  console.info(`Запрошена страница ${AboutPage.name}`);
  return `
    ${Header(userAvatar)}
    
    <main class="main">
      ${SectionDivider(motivationPhrases)}
      <section class="about-section">
        ${AboutBlock(normalOrder, aboutParagraphs.reason, aboutParagraphs.helpfulFor, pepeImage)}
        ${AboutBlock(reverseOrder, aboutParagraphs.siteStructureFirst, aboutParagraphs.siteStructureSecond, pepeImage)}
        ${AboutBlock(normalOrder, aboutParagraphs.myWishesFirst, aboutParagraphs.myWishesSecond, pepeImage)}
      </section>
      ${SectionDivider(motivationPhrases)}
    </main>
    
    ${Footer()}
  `;
}
