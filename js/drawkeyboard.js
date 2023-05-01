import {defaultAction} from './actions.js';
import {queryKeyboard} from './queries.js';
import {languages} from './keyboards.js';
import {shiftPressed, ctrlPressed, capslockPressed} from './actions.js';
import {currentLanguage} from './actions.js';
import { getLocalStorage } from './actions.js';
import { setLocalStorage } from './actions.js';

const buttonsRowClassName = 'button-row';

//функция для создания элементов
function createElement(tagName, className){
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}


export const drawKeyboard = (element) => {
  clearKeyboard(); // клавиатура пустая
  const currentKeyboard = languages[currentLanguage]; // задаем язык
  currentKeyboard.forEach((buttonsRow) => {
    const buttonsRowElement = createElement('div', buttonsRowClassName); //создаем ряды кнопок
    buttonsRow.forEach(({character, characterCapital, keyCode, color, action, size}) => { //создаем кнопки с параметрами, которые прописывали в массиве
      
      const button = createElement('button', keyCode);
      button.textContent = !shiftPressed && !capslockPressed ? character : characterCapital; //если не нажат shift и капс - первое значение, если что-то нажато - второе
 
      if (!action) {
        button.onclick = defaultAction.bind(null, character, characterCapital); //смысл bind здесь в том, что он указывает на конкретную кнопку
      } else {
        button.onclick = action;
      }

      button.classList.add('button');
      button.classList.add(`color-${color}`);
      button.classList.add(`size-${size}`);
      buttonsRowElement.appendChild(button);

      
    })
    element.appendChild(buttonsRowElement);
  })
}


export const drawKeyboardinContainer = () => { //отрисовываем клавиатуру в контейнере 
  const keyboardContainer = queryKeyboard();
  drawKeyboard(keyboardContainer);
}

export const clearKeyboard = () => {
  queryKeyboard().innerHTML = '';
};

getLocalStorage();
setLocalStorage();


