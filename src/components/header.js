import {NavBar} from '@/components/navBar.js';

export function Header() {
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
  `
}