
const Intro = function(){
    const container = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.innerText = "El Restaurante";
    const image = document.createElement('img');
    const descr = document.createElement('p');
    descr.innerText = "El mejor restaurante de tapas de la región de Atahualpa"

    container.appendChild(heading);
    container.appendChild(image);
    container.appendChild(descr);
}

export{Intro}