// Показ контента
import {HomePage} from '@/pages/home.js';

export function renderApp() {
  const app = document.getElementById('app');
  console.log('get app element')

  const element = HomePage();
  console.log(element);
  app.innerHTML = element;
}