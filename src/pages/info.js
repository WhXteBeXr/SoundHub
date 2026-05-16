import { SectionDivider } from '@/components/sectionDivider.js';
import { NavBar } from '@/components/navBar.js';
import { Card } from '@/components/card.js';
import { Header } from '@/components/header.js';
import { Footer } from '@/components/footer.js';
import { TextBlock } from '@/components/textBlock.js';

import { MotivationPhrases as motivationPhrases } from '@/data/motivationPhrases.js';
import { DAWSINFO as daws } from '@/data/DAWsInfo.js';
import { PLUGINSINFO as plugins } from '@/data/pluginsInfo.js';
import userAvatar from '@/assets/images/Pfp.jpg';
import garageBandLogo from '@/assets/images/GarageBandLogo.jpg';
import reaperLogo from '@/assets/images/ReaperLogo.jpg';
import audacityLogo from '@/assets/images/AudacityLogo.jpg';
import serum from '@/assets/images/Serum2.png';
import guitarRig from '@/assets/images/guitarRig.jpg';
import valhalla from '@/assets/images/valhallaVintageVerb.jpg';

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
          ${Card(normalOrder, 'GarageBand. Простая и дружелюбная среда для первого знакомства с записью и аранжировкой музыки. Подходит тем, кто хочет быстро собрать идею на Mac без сложной настройки.', garageBandLogo)}
          ${Card(reverseOrder, 'Reaper. Лёгкая и очень гибкая DAW для записи, сведения и монтажа. Её любят за стабильность, низкую нагрузку на систему и огромные возможности настройки.', reaperLogo)}
          ${Card(normalOrder, 'Audacity. Бесплатный аудиоредактор для записи голоса, обрезки, очистки и базовой обработки звука. Это хороший инструмент, когда нужен быстрый и понятный результат без лишней сложности.', audacityLogo)}
        </div>
        ${TextBlock(daws.audacity, daws.logicPro, daws.reaper)}
      </section>
      
      ${SectionDivider(motivationPhrases)}
      
      <section class="information-section">
        ${TextBlock(plugins.serum, plugins.guitarRig, plugins.valhallaVintageVerb)}
        <div class="cards-block">
          ${Card(normalOrder, 'Serum 2. Синтезатор для современных электронных звуков, басов и лидов. Подходит, если нужен гибкий инструмент для саунд-дизайна и мощных пресетов.', serum)}
          ${Card(reverseOrder, 'Guitar Rig. Плагин для гитарных тонов, усилителей и эффектов. Удобен для домашней записи, когда нужен готовый звук без отдельного железного оборудования.', guitarRig)}
          ${Card(normalOrder, 'Valhalla VintageVerb. Реверб, который быстро добавляет глубину, воздух и пространство. Хорошо подходит для вокала, синтов и гитар, когда треку не хватает объёма.', valhalla)}
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
