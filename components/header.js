import {createElement} from "../common/data.js";

export function renderHeader(){
    const headerEl = createElement(`header`,``,`header`,``)
    const headerContent = createElement(`div`,``,`headerContent`, headerEl)
    const headerIco = createElement(`img`,``,`headerIco`, headerContent)
    headerIco.src = `./img/ico-header.svg`
    const headerText = createElement(`h2`,`InPlaylist`, `headerText`, headerContent)

    return headerEl
}