import {defaultAction} from './actions.js';
import {queryKeyboard} from './queries.js';
import {languages} from './keyboards.js';
import {shiftPressed, ctrlPressed, capslockPressed} from './actions.js';
import {currentLanguage} from './actions.js';
const buttonsRowClassName = 'button-row';

function createElement(tagName, className){
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

export const drawKeyboard = (element) => {
  clearKeyboard();
  const currentKeyboard = languages[currentLanguage];
  currentKeyboard.forEach((buttonsRow) => {
    const buttonsRowElement = createElement('div', buttonsRowClassName);
    buttonsRow.forEach(({character, characterCapital, color, action, size}) => {
      const button = createElement('button', '');
      button.textContent = !shiftPressed ? character : characterCapital;
      button.textContent = !capslockPressed ? button.textContent.toLowerCase() : button.textContent.toUpperCase();

      if (!action) {
        button.onclick = defaultAction.bind(null, character, characterCapital);
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

export const drawKeyboardinContainer = () => {
  const keyboardContainer = queryKeyboard();
  drawKeyboard(keyboardContainer);
}

export const clearKeyboard = () => {
  queryKeyboard().innerHTML = '';
};




