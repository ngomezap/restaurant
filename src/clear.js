const Clear = function(container, name){
    [...container.childNodes].forEach((node) => {
        if(node.nodeName !== "NAV"){
            node.remove();
        }else{
            [...node.childNodes].forEach((node) =>{
                if(node.innerText === name){
                    node.classList.add('active');
                }else{
                    node.classList.remove('active');
                }
            })
        }
    })
}

export {Clear};