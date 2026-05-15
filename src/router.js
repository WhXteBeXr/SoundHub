import { HomePage } from '@/pages/home.js';
import { AboutPage } from '@/pages/about.js';
import { InfoPage } from '@/pages/info.js';
import { NotFoundPage } from '@/pages/notFound.js';

const routes = {
  '#/home': HomePage,
  '#/about': AboutPage,
  '#/info': InfoPage,
};

export function router() {
  const app = document.querySelector('#app');
  const currentHash = window.location.hash || '#/home';
  const page = routes[currentHash];

  if (!page) {
    app.innerHTML = NotFoundPage();
    return;
  }

  app.innerHTML = page();
}
