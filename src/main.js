import '@/styles/global.css';
import '@/styles/variables.css';
import '@/styles/styles.css';
import '@/styles/newsletter.css';
import '@/styles/decorations.css';
import '@/assets/fonts/fonts.css';

import { router } from '@/router.js';
import { initNewsletterPopup } from '@/components/newsletter-popup.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

initNewsletterPopup();
