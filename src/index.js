import {Intro} from './intro';
import {elements, page} from './page_load';

page();
elements.intro.addEventListener('click', Intro);