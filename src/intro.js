import {Clear} from './clear';
import Tapas from './tapas.jpg';

const Intro = function(){

    //Clear content of previuos tab
    const name = "Home";
    const container = document.getElementById('content');
    Clear(container, name);


    //Create new content
    const cont2 = document.createElement('div');
    cont2.setAttribute('id', 'cont2');
    const heading = document.createElement('h1');
    heading.innerText = "El Restaurante";
    const tapasImg = new Image();
    tapasImg.src = Tapas;

    const descr = document.createElement('h3');
    descr.innerText = "El mejor restaurante de tapas de la región de Atahualpa"

    cont2.appendChild(heading);
    cont2.appendChild(descr);

    cont2.appendChild(tapasImg);
    

    container.appendChild(cont2);
}

export{Intro}