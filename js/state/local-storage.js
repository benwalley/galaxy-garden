import { LOCAL_STORAGE_NAME } from "./consts";

export function initLocalStorage() {

}

export function getLocalStorageValue(key) {
    const data = window.localStorage.getItem(LOCAL_STORAGE_NAME);
    const dataObject = JSON.parse(data)
    return dataObject?.[key]
}

export function setLocalStorageValue(key, value) {
    const data = window.localStorage.getItem(LOCAL_STORAGE_NAME) || '{}';
    const objectData = JSON.parse(data)
    objectData[key] = value;
    window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(objectData));
}
