import {Header} from '@/components/header.js';
import {Main} from '@/components/main.js'
import {Footer} from '@/components/footer.js';

export function HomePage() {
  return `
    ${Header()}
    ${Main()}
    ${Footer()}
  `
}