import Dexie from 'dexie';
import { STARS_STORAGE_NAME } from './state/consts';
let db;

export function initDB() {
    db = new Dexie("mainGameData");

    db.version(2).stores({
        items: `
          id,
          data`,
    });
}

export function getStarsInRange(xMin, xMax, yMin, yMax) {
    return db.stars.where('x').between(xMin, xMax).toArray();

}

export function saveStars(data) {
    return db.items.put({id: STARS_STORAGE_NAME, data: data})
        .catch(err => {
            console.log(err)
        })
}

export function getAllStars() {
    return db.items.get(STARS_STORAGE_NAME)
    .catch(err => {
        console.log(err)
    })
}

export function saveItemToDb(data) {
    return db.items.put(data)
}

export function saveStar(star) {
    return db.stars.put(star);
}
