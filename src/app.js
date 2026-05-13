// Показ контента
import { HomePage } from '@/pages/home.js';

export function renderApp() {
  const app = document.getElementById('app');
  console.info(`Получен элемент ${app.id}`);

  app.innerHTML = HomePage();
}
