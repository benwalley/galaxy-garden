import * as PIXI from 'pixi.js';


function initGame() {
    initPixi()
}

function initPixi() {
    const app = new PIXI.Application({
        background: '#1099bb',
        resizeTo: window,
    });

    document.body.appendChild(app.view);
}

initGame();
