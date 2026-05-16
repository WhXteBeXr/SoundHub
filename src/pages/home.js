import {NewsList} from '@/components/newsList.js';
import {SectionDivider} from '@/components/sectionDivider.js';
import {AppForPreview} from '@/components/appForShowcase.js';
import {Card} from '@/components/card.js';
import {NavBar} from '@/components/navBar.js';
import {Header} from '@/components/header.js';
import {Footer} from '@/components/footer.js';

import {MotivationPhrases as motivationPhrases} from '@/data/motivationPhrases.js';
import pepeImage from '@/assets/images/pepe-placeholder.jpg';
import userAvatar from '@/assets/images/Pfp.jpg';

const normalOrder = 'normal-order';
const reverseOrder = 'reversed-order';

export function HomePage() {
  console.info(`Запрошена страница ${HomePage.name}`);
  return `
    ${Header(userAvatar)}
    
    <main class="main">
      ${NewsList()} 
      <section class="cards-block">
        ${Card(
    normalOrder,
    'Гибкая DAW для быстрого создания музыки, живых выступлений и экспериментов со звуком. Идеальна для тех, кто хочет легко собирать идеи в треки и сразу слышать результат.',
    pepeImage
  )}
        ${Card(
    reverseOrder, 'Одна из самых популярных DAW для битмейкинга, электронной музыки и аранжировки. Простой вход для новичков и огромные возможности для продвинутой работы.',
    pepeImage)}
        ${Card(
    normalOrder, 'Профессиональная DAW с сильным акцентом на запись, сведение и работу с MIDI. Отлично подходит для студийной работы, композиторов и тех, кто ценит точность в каждом элементе проекта.',
    pepeImage)}
      </section>
      ${SectionDivider(motivationPhrases)}
      
      <section class="apps-preview-block">
        ${AppForPreview(
    normalOrder,
    'Ableton Live',
    'Ты в студии и быстро собираешь идею из лупов, битов и синтов. Нужно не просто записать трек, а сразу экспериментировать, переставлять части аранжировки и пробовать разные звуки без долгой возни.',
    'Преимущества: очень удобен для создания электронной музыки, быстрого наброска идей и live-выступлений.',
    pepeImage)}
        ${AppForPreview(
    reverseOrder,
    'FL Studio',
    'Ты делаешь бит дома или собираешь трек с нуля, и тебе нужен быстрый и понятный рабочий процесс. Здесь удобно накидывать ударные, мелодии и бас, а потом быстро превращать всё это в полноценный трек.',
    'Преимущества: простой старт, сильная секвенсорная логика, отлично подходит для битмейкинга и электронной музыки.',
    pepeImage)}
        ${AppForPreview(
    normalOrder,
    'Cubase',
    'Ты записываешь гитару, вокал или живые инструменты и хочешь всё аккуратно разложить по дорожкам. Cubase хорошо подходит, когда важны точная редактура, MIDI, сведение и контроль над каждым элементом проекта.',
    'Преимущества: мощные инструменты для записи, сведения и работы с MIDI, подходит для профессиональной студийной работы.',
    pepeImage)}
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
