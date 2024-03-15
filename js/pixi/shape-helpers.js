import * as PIXI from 'pixi.js';
import { app } from '../main';
import { GlowFilter } from '@pixi/filter-glow';


export function addCircle(radius, color, x, y) {
    const circle = new PIXI.Graphics();
    circle.beginFill(color);
    circle.drawCircle(0, 0, radius);
    circle.endFill();
    circle.x = x;
    circle.y = y;
    circle.filters = [new GlowFilter({ distance: 30, outerStrength: 1 })];

    app.stage.addChild(circle)
}