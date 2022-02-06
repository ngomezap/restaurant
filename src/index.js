import {Intro} from './intro';
import {Menu} from './menu';
import {Contact} from './contact';
import {elements, page} from './page_load';
import './style.css';

page();
Intro();
elements.intro.addEventListener('click', Intro);
elements.menu.addEventListener('click', Menu);
elements.contact.addEventListener('click', Contact);