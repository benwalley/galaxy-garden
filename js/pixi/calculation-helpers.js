import { gameData } from "../state/game";
import { app } from "../main";

export function getXPosToScreenX(x) {
    const centerX = gameData.get('centerX')
    const width = gameData.get('visibleWidth');
    const xMin = centerX - (width / 2);
    const xMax = xMin + width;
    return app.screen.width * ((x - xMin) / (xMax - xMin))
}

export function getYPosToScreenY(y) {
    const centerY = gameData.get('centerY')
    const height = gameData.get('visibleHeight');
    const yMin = centerY - (height / 2);
    const yMax = yMin + height;
    return app.screen.height * ((y - yMin) / (yMax - yMin))
}