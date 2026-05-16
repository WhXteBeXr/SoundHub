import { AboutBlock } from '@/components/aboutBlock.js';
import { SectionDivider } from '@/components/sectionDivider.js';
import { Footer } from '@/components/footer.js';
import { Header } from '@/components/header.js';

import { PHRASES as motivationPhrases } from '@/data/phrases.js';
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
        ${AboutBlock(normalOrder, 'test paragraph 1', 'test paragraph 2', pepeImage)}
        ${AboutBlock(reverseOrder, 'test paragraph 1', 'test paragraph 2', pepeImage)}
        ${AboutBlock(normalOrder, 'test paragraph 1', 'test paragraph 2', pepeImage)}
      </section>
      ${SectionDivider(motivationPhrases)}
    </main>
    
    ${Footer()}
  `;
}
