
import {drawKeyboardinContainer} from './drawkeyboard.js';

// создаем экран для отображения печатания
const textarea = document.createElement("textarea");
textarea.className = "textarea";
document.body.append(textarea);

// создаем клавиатуру
const keyboard = document.createElement("div");
keyboard.className = "keyboard";
document.body.append(keyboard);

const keyboardItems = document.createElement("div");
keyboardItems.className = "keyboard-items";
keyboard.appendChild(keyboardItems);

// функция для создания кнопок


drawKeyboardinContainer();







