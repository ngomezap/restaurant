import {Clear} from './clear';
import MenuPic from './menu.png';

const Menu = function(){


    //Clear the previous content
    const name = "Menu";
    const container = document.getElementById('content');
    Clear(container, name);

    //Container of titles
    const cont3 = document.createElement('div');
    cont3.setAttribute('id', 'cont3');

    //List of prices
    const listOfPrices = document.createElement('div');
    listOfPrices.setAttribute('id', 'listOfPrices');

    //Dishes
    const dishes = document.createElement('div');
    dishes.setAttribute('id', 'dishes');

    //Prices
    const prices = document.createElement('div');
    prices.setAttribute('id', 'prices');
    
    //Starters
    const primeros = document.createElement("div");
    primeros.innerText = "Entrantes";

    primeros.addEventListener('mouseenter', showStarters);
    primeros.addEventListener('mouseleave', hide);


    //Main
    const segundos = document.createElement("div");
    segundos.innerText = "Principales";

    segundos.addEventListener('mouseenter', showMain);
    segundos.addEventListener('mouseleave', hide);


    //Desert
    const postres = document.createElement("div");
    postres.innerText = "Postres";

    postres.addEventListener('mouseenter', showDeserts);
    postres.addEventListener('mouseleave', hide);

    cont3.appendChild(primeros);
    cont3.appendChild(segundos);
    cont3.appendChild(postres);

    listOfPrices.appendChild(dishes);
    listOfPrices.appendChild(prices);

    const menuBook = document.createElement('div');
    menuBook.setAttribute('id', 'menuBook');
    menuBook.appendChild(cont3);
    menuBook.appendChild(listOfPrices);

    container.appendChild(menuBook);

    const imgMenu = new Image();
    imgMenu.src = MenuPic;
    imgMenu.setAttribute('id', 'imgMenu');

    menuBook.appendChild(imgMenu);
}


function showStarters(){

    document.getElementById('imgMenu').classList.add('hidden');
    const starters = ["Ensalada", "Tabla de quesos", "Rabas", "Fingers de pollo", "Patatas bravas"]
    const priceList = ["\u00A08€", "\u00A012€", "\u00A09€", "\u00A06€", "\u00A05€"];
    starters.forEach((starter) => {
        const st = document.createElement('div');
        st.innerText = starter;
        document.getElementById('dishes').appendChild(st);
    });
    priceList.forEach((price) => {
        const st = document.createElement('div');
        st.innerText = price;
        document.getElementById('prices').appendChild(st);
    })
}

function showMain(){
    document.getElementById('imgMenu').classList.add('hidden');
    const mains = ["Paella", "Cocido", "Solomillo", "Bacalao", "Revuelto"];
    const priceList = ["\u00A023€", "\u00A015€", "\u00A012€", "\u00A015€", "\u00A010€"];
    mains.forEach((main) => {
        const mn = document.createElement('div');
        mn.innerText = main;
        document.getElementById('dishes').appendChild(mn);
    });
    priceList.forEach((price) => {
        const st = document.createElement('div');
        st.innerText = price;
        document.getElementById('prices').appendChild(st);
    });
}

function showDeserts(e){
    document.getElementById('imgMenu').classList.add('hidden');
    const deserts = ["Tiramisu", "Tarta de queso", "Flan", "Crema catalana", "Arroz con leche"];
    const priceList = ["\u00A05€", "\u00A03€", "\u00A03€", "\u00A04€", "\u00A03€"];
    deserts.forEach((desert) => {
        const ds = document.createElement('div');
        ds.innerText = desert;
        document.getElementById('dishes').appendChild(ds);
    });
    priceList.forEach((price) => {
        const st = document.createElement('div');
        st.innerText = price;
        document.getElementById('prices').appendChild(st);
    });
}

function hide(){

    document.getElementById('imgMenu').classList.remove('hidden');

    [...document.getElementById('dishes').childNodes].forEach((node) => {
        node.remove()
    });
    
    [...document.getElementById('prices').childNodes].forEach((node) => {
        node.remove()
    })
}

export {Menu}