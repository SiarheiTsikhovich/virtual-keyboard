import {drawKeyboardinContainer} from './drawkeyboard.js';


// создаем экран для отображения печатания
const textarea = document.createElement("textarea");
textarea.className = "textarea";
textarea.setAttribute('autofocus', ''); // экран в фокусе при загрузке страницы и остается в фокусе, даже, если мы кликаем по другим элементам страницы
textarea.onblur = () => { 
textarea.focus();
}
document.body.append(textarea);

// создаем клавиатуру
const keyboard = document.createElement("div");
keyboard.className = "keyboard";
document.body.append(keyboard);

drawKeyboardinContainer();







