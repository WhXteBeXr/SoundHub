import '@/styles/global.css';
import '@/styles/variables.css';
import '@/styles/styles.css';
import '@/assets/fonts/fonts.css';

import { router } from '@/router.js';

window.addEventListener('load', router);

window.addEventListener('hashchange', router);
