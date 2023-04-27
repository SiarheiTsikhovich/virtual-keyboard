import {defaultAction} from './actions.js';

const buttonsRowClassName = 'button-row';

export const drawKeyboard = (element) => {
  clearKeyboard();
  const currentKeyboard = keyboardButtonsEng;
  currentKeyboard.forEach((buttonsRow) => {
    const buttonsRowElement = createElement('div', buttonsRowClassName);
    buttonsRow.forEach(({character, characterCapital, color, action, size}) => {
      const button = createElement('button', '');
      button.textContent = !shiftPressed ? character : characterCapital;


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




