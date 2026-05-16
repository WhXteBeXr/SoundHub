import { NewsList } from '@/components/newsList.js';
import { SectionDivider } from '@/components/sectionDivider.js';
import { AppForPreview } from '@/components/appForShowcase.js';
import { Card } from '@/components/card.js';
import { NavBar } from '@/components/navBar.js';
import { Header } from '@/components/header.js';
import { Footer } from '@/components/footer.js';

import { MotivationPhrases as motivationPhrases } from '@/data/motivationPhrases.js';
import userAvatar from '@/assets/images/Pfp.jpg';
import abletonLogo from '@/assets/images/AblteonLogo.jpg';
import abletonBox from '@/assets/images/AbletonLiveBox.jpg';
import flStudioBox from '@/assets/images/FlStudioBox.jpg';
import cubaseBox from '@/assets/images/CubaseProBox.png';
import abletonLiveInterface from '@/assets/images/AbletonLiveInterface.jpg';
import flStudioInterface from '@/assets/images/FlStudioInterface.jpg';
import cubaseInterface from '@/assets/images/CubaseInterface.jpg';
import dolbyAtmosLogo from '@/assets/images/DolbyAtmosLogo.jpg';
import spotifyLogo from '@/assets/images/SpotifyLogo.jpg';

const normalOrder = 'normal-order';
const reverseOrder = 'reversed-order';

export function HomePage() {
  console.info(`Запрошена страница ${HomePage.name}`);
  return `
    ${Header(userAvatar)}
    
    <main class="main">
      ${NewsList([abletonLogo, dolbyAtmosLogo, spotifyLogo])} 
      <section class="cards-block">
        ${Card(
    normalOrder,
    'Гибкая DAW для быстрого создания музыки, живых выступлений и экспериментов со звуком. Идеальна для тех, кто хочет легко собирать идеи в треки и сразу слышать результат.',
    abletonBox,
  )}
        ${Card(
    reverseOrder,
    'Одна из самых популярных DAW для битмейкинга, электронной музыки и аранжировки. Простой вход для новичков и огромные возможности для продвинутой работы.',
    flStudioBox,
  )}
        ${Card(
    normalOrder,
    'Профессиональная DAW с сильным акцентом на запись, сведение и работу с MIDI. Отлично подходит для студийной работы, композиторов и тех, кто ценит точность в каждом элементе проекта.',
    cubaseBox,
  )}
      </section>
      ${SectionDivider(motivationPhrases)}
      
      <section class="apps-preview-block">
        ${AppForPreview(
    normalOrder,
    'Ableton Live',
    'Ты в студии и быстро собираешь идею из лупов, битов и синтов. Нужно не просто записать трек, а сразу экспериментировать, переставлять части аранжировки и пробовать разные звуки без долгой возни.',
    'Преимущества: очень удобен для создания электронной музыки, быстрого наброска идей и live-выступлений.',
    abletonLiveInterface,
  )}
        ${AppForPreview(
    reverseOrder,
    'FL Studio',
    'Ты делаешь бит дома или собираешь трек с нуля, и тебе нужен быстрый и понятный рабочий процесс. Здесь удобно накидывать ударные, мелодии и бас, а потом быстро превращать всё это в полноценный трек.',
    'Преимущества: простой старт, сильная секвенсорная логика, отлично подходит для битмейкинга и электронной музыки.',
    flStudioInterface,
  )}
        ${AppForPreview(
    normalOrder,
    'Cubase',
    'Ты записываешь гитару, вокал или живые инструменты и хочешь всё аккуратно разложить по дорожкам. Cubase хорошо подходит, когда важны точная редактура, MIDI, сведение и контроль над каждым элементом проекта.',
    'Преимущества: мощные инструменты для записи, сведения и работы с MIDI, подходит для профессиональной студийной работы.',
    cubaseInterface,
  )}
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
