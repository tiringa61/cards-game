
const grid = document.querySelector(".grid");

const characters = [
"asteroide",
"jupiter",
"lua",
"marte",
"mercurio",
"netuno",
"plutao",
"saturno",
"sol",
"terra",
"urano",
"venos",
"marte",
"mercurio",
"netuno",

];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
    
    }
    
    const createCard = () =>{
    const card = createElement('div', 'card');
    const from = createElement('div', 'face from');
    const back = createElement('div', 'face back');

    
    
    card.appendChild(from);
    card.appendChild(back);
    
    return card;
    }
    
    const loadGame = () =>{

    
    characters.forEach((character) =>{    
    
        const card = createCard(character);
        grid.appendChild(card);
    
    });
    
    }
    
    loadGame();