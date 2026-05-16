import {SectionDivider} from '@/components/sectionDivider.js';
import {NavBar} from '@/components/navBar.js';
import {Card} from '@/components/card.js';
import {Header} from '@/components/header.js';
import {Footer} from '@/components/footer.js';
import {TextBlock} from '@/components/textBlock.js';

import {MotivationPhrases as motivationPhrases} from '@/data/motivationPhrases.js';
import {DAWSINFO as daws} from '@/data/DAWsInfo.js';
import {PLUGINSINFO as plugins} from '@/data/pluginsInfo.js';
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
        ${TextBlock(daws.abletonList, daws.flStudio, daws.cubase)}
        <div class="cards-block">
          ${Card(normalOrder, 'GarageBand. Простая и дружелюбная среда для первого знакомства с записью и аранжировкой музыки. Подходит тем, кто хочет быстро собрать идею на Mac без сложной настройки.', pepeImage)}
          ${Card(reverseOrder, 'Reaper. Лёгкая и очень гибкая DAW для записи, сведения и монтажа. Её любят за стабильность, низкую нагрузку на систему и огромные возможности настройки.', pepeImage)}
          ${Card(normalOrder, 'Audacity. Бесплатный аудиоредактор для записи голоса, обрезки, очистки и базовой обработки звука. Это хороший инструмент, когда нужен быстрый и понятный результат без лишней сложности.', pepeImage)}
        </div>
        ${TextBlock(daws.audacity, daws.logicPro, daws.reaper)}
      </section>
      
      ${SectionDivider(motivationPhrases)}
      
      <section class="information-section">
        ${TextBlock(plugins.serum, plugins.guitarRig, plugins.valhallaVintageVerb)}
        <div class="cards-block">
          ${Card(normalOrder, 'Serum. Синтезатор для современных электронных звуков, басов и лидов. Подходит, если нужен гибкий инструмент для саунд-дизайна и мощных пресетов.', pepeImage)}
          ${Card(reverseOrder, 'Guitar Rig. Плагин для гитарных тонов, усилителей и эффектов. Удобен для домашней записи, когда нужен готовый звук без отдельного железного оборудования.', pepeImage)}
          ${Card(normalOrder, 'Valhalla VintageVerb. Реверб, который быстро добавляет глубину, воздух и пространство. Хорошо подходит для вокала, синтов и гитар, когда треку не хватает объёма.', pepeImage)}
        </div>
        ${TextBlock(plugins.omnisphere, plugins.decapitator, plugins.shaperBox)}
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
