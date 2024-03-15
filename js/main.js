import * as PIXI from 'pixi.js';
import { gameData } from './state/game';
import { worldWidth, worldHeight, baseLengthVisible } from './state/consts';
import { getAllStars, getStarsInRange, initDB, saveItemToDb, saveStar, saveStars } from './indexDBHelpers';
import { drawVisibleStars } from './pixi/drawHelpers';
import { generateStars } from './generators';
import { getLocalStorageValue, initLocalStorage, setLocalStorageValue } from './state/local-storage';


// this is outside of a function because I want app to be exportable to other files.
export const app = new PIXI.Application({
    background: '#000000',
    resizeTo: window,
    antialias: true,
});

function initGame() {
    initPixi()
    initDB();
    initLocalStorage();
    setInitialData()
    // if the world is not already generated
    generateWorld()
    drawVisibleStars()
}

function setInitialData() {
    gameData.set('centerX', 0)
    gameData.set('centerY', 0)
    const zoom = 1;
    gameData.set('zoom', zoom)
    const lengthOfMaxSide = baseLengthVisible * zoom;
    const aspectRatio = worldWidth / worldHeight;
    const visibleWidth = lengthOfMaxSide;
    const visibleHeight = visibleWidth / aspectRatio;
    gameData.set('visibleWidth', visibleWidth);
    gameData.set('visibleHeight', visibleHeight);
}

function generateWorld() {
    const isWorldGenerated = getLocalStorageValue('worldGenerated')
    if(isWorldGenerated) return;
    // this will be in a web worker probably
    const numberStars = 1000
    generateStars(numberStars)
    // min distance between stars is determined by how close they are to eachother.
    // for each star, maybe it has up to 50 planets orbiting it.
    // for each planet, depending on the size, it has up to 10 moons.
    // each star can  also have bunches of astroids
    const numberMonsters = 10; // should be far away from you
    const galaxyWidth = 100000
    setLocalStorageValue('worldGenerated', true)
}

function initPixi() {
    document.body.appendChild(app.view);
}

initGame();
