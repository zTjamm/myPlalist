import {renderHeader} from "../components/header.js";

const rootElement = document.querySelector(`#root`)

const header = renderHeader();
rootElement.appendChild(header)