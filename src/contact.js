import {Clear} from './clear';

const Contact = function(){
    const name = "Where?";
    const container = document.getElementById('content');
    Clear(container, name);

    const contacto = document.createElement('div');
    contacto.setAttribute('id', 'contacto');
    const calle = document.createElement('p');
    calle.innerText = "Avenida Constitución 42, Madrid"
    const tel = document.createElement('p');
    tel.innerText = "+34 654654654";
    contacto.appendChild(calle);
    contacto.appendChild(tel);
    container.appendChild(contacto);
}

export{Contact}