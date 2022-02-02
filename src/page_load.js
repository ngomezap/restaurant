
const nav = document.createElement('nav');
const intro = document.createElement('button');
const menu = document.createElement('button');
const contact = document.createElement('button');


const page = function(){

    intro.innerText = "Home";
    menu.innerText = "Menu";
    contact.innerText = "Where are we?";

    nav.appendChild(intro);
    nav.appendChild(menu);
    nav.appendChild(contact);

    const container = document.getElementById('content');
    container.appendChild(nav);
}

const elements = {
    intro,
    menu,
    contact
}

export{page, elements}