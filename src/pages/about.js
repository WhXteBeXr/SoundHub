import { AboutTextBlock } from '@/components/aboutTextBlock.js';
import { SectionDivider } from '@/components/sectionDivider.js';
import { Footer } from '@/components/footer.js';
import { Header } from '@/components/header.js';
import { PHRASES as motivationPhrases } from '@/data/phrases.js';

const aboutTextBlockRightPosition = 'project-info__text--right-side-caption';
const aboutTextBlockLeftPosition = 'project-info__text--left-side-caption';

export function AboutPage() {
  return `
    ${Header()}
    
    <main>
      ${SectionDivider(motivationPhrases)}
      ${AboutTextBlock(aboutTextBlockLeftPosition)}
      ${AboutTextBlock(aboutTextBlockRightPosition)}
      ${AboutTextBlock(aboutTextBlockLeftPosition)}
      ${SectionDivider(motivationPhrases)}
    </main>
    
    ${Footer()}
  `;
}
