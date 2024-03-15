import { saveStars } from "./indexDBHelpers";
import { worldHeight, worldWidth } from "./state/consts";

export function generateStarData() {
    const randomX = Math.random() * worldWidth;
    const randomY = Math.random() * worldHeight;
    const x = randomX - (worldWidth / 2)
    const y = randomY - (worldHeight / 2)
    const mass = Math.random();

    return {
        x,
        y,
        mass
    }
}

export function generateStars(numberStars) {
    const stars = new Map();
    for (let i = 0; i < numberStars; i++) {
        const starData = generateStarData(i)
        stars.set(i, {id: i, ...starData});

        // check if it is too close to another
    }
    saveStars(stars);
}