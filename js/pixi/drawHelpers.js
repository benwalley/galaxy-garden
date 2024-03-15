import { getAllStars } from "../indexDBHelpers";
import { gameData } from "../state/game";
import { addCircle } from "./shape-helpers";
import { app } from "../main";
import { getXPosToScreenX, getYPosToScreenY } from "./calculation-helpers";

export async function drawVisibleStars() {
    const centerX = gameData.get('centerX')
    const centerY = gameData.get('centerY');
    const width = gameData.get('visibleWidth');
    const height = gameData.get('visibleHeight');
    const xMin = centerX - (width / 2);
    const xMax = xMin + width;
    const yMin = centerY - (height / 2);
    const yMax = yMin + height;
    const allStars = await getAllStars();
    for (const [id, star] of allStars.data) {
        const isVisible = star.x > xMin && star.x < xMax && star.y > yMin && star.y < yMax;
        if (isVisible) {
            
            const screenXPos = getXPosToScreenX(star.x)
            const screenYPos = getYPosToScreenY(star.y)
            addCircle(10, 'white', screenXPos, screenYPos);
        }
    }
}

