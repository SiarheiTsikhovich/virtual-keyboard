
import {drawKeyboard} from './drawkeyboard.js';
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
function createElement(tagName, className){
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

// создаем функцию, чтобы обращаться к экрану.

const queryTextArea = () => document.querySelector('textarea');


// в кнопку мы передаем текст, текст с нажатым shift, цвет (по умолчанию серый), поведение (по умолчанию - печатать текст), размер.




//создаем класс для ряда кнопок, которому пропишем стили
const buttonsRowClassName = 'button-row';

//создаем функцию, которая очищает клавиатуру (перед переключением языка)



drawKeyboardinContainer();







