import {NavBar} from '@/components/navBar.js';

export function Footer() {
  return `
    <footer class='footer'>
      <div class='footer__navigation'>
        ${NavBar()}
        <p class='nav-bar__caption'></p>
      </div>
      <div class='footer-block'>
        <div class='footer-content'></div>
      </div>
    </footer>
  `
}