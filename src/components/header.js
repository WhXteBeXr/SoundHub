import { NavBar } from '@/components/navBar.js';

export function Header(userAvatarSrc) {
  return `
    <header class="header">
      <h1 class="header__title">SoundHub</h1>
      ${NavBar()}
      <a class="header__image-container">
        <img class="header__profile-image" src="${userAvatarSrc}" alt="Аватар пользователя">
      </a>
    </header>
  `;
}
