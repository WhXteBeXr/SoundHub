import { NavBar } from '@/components/navBar.js';

export function Header() {
  return `
    <header class="header">
      <h1 class='header__title'>SoundHub</h1>
      ${NavBar()}
      <div class='account'>
        <a class='account__image'>
          <img src='../assets/images/Pfp.jpg' alt='Аватар пользователя'>
        </a>
      </div>
    </header>
  `;
}
